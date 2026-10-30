# Homologação funcional — CurrículoAlvo ATS

**Data:** 30/10/2026  
**Versão:** MVP 0.1, React/TypeScript, hospedado na Vercel  
**Aplicação:** https://curriculoalvo-ats.vercel.app  
**Repositório:** https://github.com/Black2026/curriculoalvo-ats

## Evidências observadas

O participante compartilhou capturas da aplicação publicada, do editor do currículo e da pré-visualização de impressão para PDF, além do resultado de compatibilidade do exemplo fictício.

### Resultado da análise

Vaga fictícia: Analista de Dados Júnior, com requisitos de Excel, SQL, Power BI, Python, análise de dados e comunicação.

Currículo fictício: Ana Pereira, com menções explícitas a Excel e análise de dados.

| Requisito | Peso | Resultado |
| --- | ---: | --- |
| Excel | 2 | Encontrado, com evidência |
| Power BI | 2 | Ausente |
| SQL | 2 | Ausente |
| Python | 2 | Ausente |
| Análise de dados | 2 | Encontrado, com evidência |
| Comunicação | 1 | Ausente |

**Cálculo:** (2 + 2) / (2 + 2 + 2 + 2 + 2 + 1) × 100 = 36,36%, arredondado para **36%**.  
**Contagem:** 2 encontrados, 4 ausentes, 6 analisados.

O cálculo foi consistente com o indicador da interface. A análise é textual e restrita ao catálogo local; não é ranking real de software de recrutamento.

### Revisão do currículo e exportação
- Currículo fictício presente e editável no campo de texto.
- Pré-visualização do documento na janela nativa de impressão, com destino “Salvar como PDF”, mostrou 1 página, com conteúdo do currículo preservado.
- A gravação final do arquivo PDF não foi verificada separadamente.
- A impressão pode adicionar cabeçalhos e rodapés do navegador; recomendar desmarcá-los para entregar currículo mais limpo.

### Publicação e CI
- A página inicial foi mostrada na produção da Vercel e no endereço público.
- Capturas de GitHub Actions mostram sucesso nas execuções #4, #5 e #6, após falhas das execuções iniciais.
- Alterações posteriores ao último CI observado precisam de verificação própria quando necessário.

## Limitações e cautelas
- Não foi realizada auditoria independente de acessibilidade, usabilidade ou compatibilidade com ATS de terceiros.
- A comparação detecta apenas os termos previstos no catálogo local.
- O currículo ajustado é uma cópia limpa e editável, sem reescrita generativa por IA.
- Não há confirmação de salvamento final do arquivo PDF além da prévia de impressão.
- A ferramenta não deve inferir proficiência ou inventar experiência.
- O desafio da DIO especifica Lovable; esta versão foi desenvolvida com React, GitHub e Vercel enquanto os créditos Lovable estavam indisponíveis. Aceitação pela DIO não está confirmada.
- Nenhuma submissão na DIO foi comprovada para este novo desafio.

## Conclusão
**Homologação funcional demonstrativa positiva para análise textual, edição e pré-visualização de exportação PDF.** Aplicativo publicado e com documentação. Sem alegações de compatibilidade garantida com ATS reais.
