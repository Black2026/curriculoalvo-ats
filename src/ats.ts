export type Requirement={label:string;weight:number;found:boolean;evidence?:string};
export type Analysis={score:number|null;requirements:Requirement[];found:number;missing:number;message?:string};
const catalog:[string,string[],number][]=[
['Excel',['excel','microsoft excel'],2],['Power BI',['power bi','powerbi'],2],['SQL',['sql'],2],['Python',['python'],2],['JavaScript',['javascript'],2],['TypeScript',['typescript'],2],['React',['react','react.js'],2],['Node.js',['node.js','nodejs'],2],['Git',['git'],2],['GitHub',['github'],2],['AWS',['aws'],2],['Docker',['docker'],2],['Figma',['figma'],2],['CRM',['crm'],2],['SAP',['sap'],2],['Gestão de projetos',['gestão de projetos','gerenciamento de projetos'],2],['Análise de dados',['análise de dados','analisar dados'],2],['Atendimento ao cliente',['atendimento ao cliente','suporte ao cliente'],1],['Comunicação',['comunicação'],1],['Liderança',['liderança'],1],['Scrum',['scrum'],2],['Kanban',['kanban'],2],['Inglês',['inglês','english'],1],['Graduação',['graduação','ensino superior','bacharelado'],1]];
export const normalize=(s:string)=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const has=(s:string,p:string)=>(' '+normalize(s).replace(/[^a-z0-9]+/g,' ')+' ').includes(' '+normalize(p).replace(/[^a-z0-9]+/g,' ')+' ');
export function analyze(vacancy:string,resume:string):Analysis{
const requirements=catalog.filter(([,aliases])=>aliases.some(a=>has(vacancy,a))).map(([label,aliases,weight])=>{const found=aliases.some(a=>has(resume,a));const evidence=found?resume.split(/\n|[.!?] /).map(s=>s.trim()).find(s=>aliases.some(a=>has(s,a)))?.slice(0,220):undefined;return {label,weight,found,evidence}});
const total=requirements.reduce((n,r)=>n+r.weight,0),hits=requirements.filter(r=>r.found);
return {score:total?Math.round(100*hits.reduce((n,r)=>n+r.weight,0)/total):null,requirements,found:hits.length,missing:requirements.length-hits.length,message:total?undefined:'Nenhum requisito reconhecido no catálogo local. Revise a vaga manualmente.'};
}
export const prepareResume=(s:string)=>s.replace(/\r\n/g,'\n').split('\n').map(x=>x.trimEnd()).join('\n').trim();
export const exampleVacancy='Analista de Dados Júnior: Excel, SQL, Power BI, Python e análise de dados. Desejável: comunicação.';
export const exampleResume='ANA PEREIRA\nRecife, PE\n\nRESUMO PROFISSIONAL\nEstudante com experiência acadêmica em análise de dados e Excel.\n\nPROJETOS\nOrganização e análise de planilhas no Excel.\n\nFORMAÇÃO\nTecnólogo em Análise e Desenvolvimento de Sistemas — em andamento.';
