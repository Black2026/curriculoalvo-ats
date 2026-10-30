# CurrículoAlvo ATS

**Seu talento alinhado às oportunidades.**

MVP educativo de comparação textual entre currículo e descrição de vaga. Desenvolvido com **React + TypeScript + Vite**, sem depender de créditos Lovable.

> **Regra ética:** o aplicativo não inventa nem insere experiências, cursos, certificações, números ou habilidades ausentes. O usuário é responsável por revisar toda alteração manual.

## Funcionalidades (v0.1)
- Entrada de vaga e currículo por texto, com exemplo **fictício**.
- Indicador de aderência textual ponderado pelos termos de um **catálogo local**.
- Lista de termos encontrados e ausentes; evidência textual quando detectada.
- Currículo editável, preservado sem reescrita generativa.
- Copiar texto e exportar por impressão do navegador (**Salvar como PDF**).
- Dados em memória da aba: **sem banco de dados, login ou API externa**.

## Executar localmente

```bash
npm install
npm run dev
npm test
npm run build
```

O Vite mostra o endereço local, normalmente http://localhost:5173.

## Como funciona
`src/ats.ts` define o catálogo de expressões, normaliza diferenças de acentuação e capitalização, encontra os termos presentes na vaga e busca evidências no currículo. A pontuação é: **soma dos pesos encontrados / soma dos pesos dos requisitos reconhecidos × 100**, arredondada. Se não houver nenhum requisito reconhecido, mostra indicador indisponível em vez de fabricar percentual.

O catálogo é incompleto e uma simples menção a uma palavra não comprova experiência. O sistema **não é um ATS real**, não prevê classificação de recrutadores e não garante entrevistas.

`prepareResume` apenas normaliza quebras de linha e espaços finais; a edição posterior é manual. Para gerar PDF, abrir a aba de currículo, clicar **Exportar PDF / imprimir** e escolher **Salvar como PDF**.

## Estrutura
- `src/main.tsx`: interface, estado e ações.
- `src/ats.ts`: análise determinística e exemplos.
- `src/style.css`: layout responsivo e estilos de impressão.
- `tests/ats.test.ts`: verificações unitárias.
- `.github/workflows/ci.yml`: testes e build em GitHub Actions.

## Critérios de validação
- Colagem de vaga e currículo; campos com pelo menos 35 caracteres.
- Exemplos fictícios demonstram termos presentes e ausentes.
- Termos não reconhecidos não geram um score inventado.
- Nenhuma competência ausente é adicionada ao texto do currículo.
- Cópia e impressão em PDF devem ser verificadas no navegador.
- Testar responsividade e verificar execução **Actions → CI - testes e build**.

**Estado em 30/10/2026:** GitHub Actions CI com últimas execuções aprovadas conforme capturas; aplicação publicada na Vercel; interface de edição e pré-visualização de impressão PDF comprovadas por capturas. Resultado de compatibilidade do exemplo fictício confirmado: 36%, 2 requisitos encontrados (Excel e análise de dados) e 4 ausentes; salvamento efetivo do PDF não demonstrado isoladamente.

## Processo de criação e evolução do mega prompt
A especificação inicial foi elaborada com ChatGPT: comparação de currículo e vaga, porcentagem explicável, palavras-chave presentes/ausentes, currículo ajustado, design responsivo e exportação. Com os créditos do Lovable indisponíveis, a primeira implementação foi feita diretamente em React/TypeScript/GitHub. Optou-se por **não simular reescrita por IA**: o MVP local preserva o currículo, permite edição e calcula apenas correspondência de termos, sem APIs externas.

**Evoluções possíveis:** correspondência semântica mais ampla, exportação .docx, armazenamento consentido e reescrita assistida por IA com revisão humana. Nenhuma delas deve ser apresentada como implementada.

## Segurança e privacidade
Não inserir currículos reais em testes ou repositório. Não versionar `.env`, chaves, senhas ou tokens. Sem persistência intencional dos textos digitados.

## Endereços
- Código: https://github.com/Black2026/curriculoalvo-ats
- **Aplicação pública:** https://curriculoalvo-ats.vercel.app (Vercel; publicação confirmada em 30/10/2026).

## Observação sobre o desafio DIO
A descrição do desafio solicita uso do Lovable; esta versão alternativa sem Lovable pode **não satisfazer integralmente** esse requisito. Publicar e validar o endereço público, então decidir se será necessário integrar a etapa Lovable quando os créditos retornarem.

## Homologação parcial — 30/10/2026
- Aplicação publicada em https://curriculoalvo-ats.vercel.app, confirmada em tela da Vercel e no navegador.
- Exemplo fictício de currículo exibido no editor de texto; conteúdo mantido na visualização de impressão em uma página.
- Diálogo de impressão com destino 'Salvar como PDF' exibido; não há evidência isolada de arquivo já salvo.
- Testes e build de CI aprovados nas execuções recentes apresentadas pelo participante.
- Pendência: registrar captura da aba Compatibilidade com indicador e lista de termos encontrados/ausentes.
- Dica de exportação: desmarcar 'Cabeçalhos e rodapés' nas opções de impressão do navegador.

## Evidência final de compatibilidade
Em 30/10/2026 a captura do resultado demonstrativo confirmou **36% (4 pontos em 11)**, com **2 termos encontrados** e **4 ausentes**. A demonstração foi registrada em [homologação funcional](docs/homologacao-funcional-2026-10-30.md). O indicador é apenas textual, não nota oficial de ATS.
