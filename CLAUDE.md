# Instruções do projeto

## Projeto (preencher a cada landing nova)
- Cliente: Imobiliária RE/MAX Kadimah (CRECI 42090-J), Perdizes, São Paulo
- Produto/serviço: compra, venda e locação de imóveis
- Público-alvo: seguidores do Instagram que querem comprar, vender ou alugar imóvel em SP
- Objetivo da página (ex: captar leads, vender, agendar): link na bio; levar para o WhatsApp
- Ação principal (botão): falar no WhatsApp (11) 98983-3309
- Paleta de cores: marinho #001F4E, branco #FFFFFF, vermelho #E10600 e azul #004BFD (do balão, só detalhes), névoa #B9C6DC (texto secundário)
- Fontes: Archivo Variable (uma família, largura expandida nos títulos)
- Referências: ver pasta inspiracao/

## Stack
- Astro + Tailwind CSS.
- Página estática, leve e rápida. Sem bibliotecas pesadas sem necessidade.
- Deploy no GitHub Pages (workflow em .github/workflows/deploy.yml).

## Fluxo de trabalho
1. Leia este arquivo e a pasta inspiracao/ antes de começar.
2. Crie a estrutura e o layout.
3. Use o agente copywriter para os textos.
4. Rode o revisor-design e corrija o que ele apontar.
5. Antes de publicar, rode o revisor-tecnico e o agente seguranca e corrija os problemas críticos.

## Regras de design
- Siga o estilo das referências em inspiracao/. Elas têm prioridade sobre qualquer padrão.
- No máximo 2 famílias de fonte, com tamanhos bem contrastantes.
- Muito espaço em branco entre seções.
- Use só as cores da paleta definida.
- Proibido: gradiente roxo/azul genérico, emojis como ícones, cards todos iguais, sombras exageradas, visual de template de IA.
- Ícones de uma biblioteca só (ex: Lucide).
- Mobile first: tem que ficar perfeito em 375px.

## Imagens
- Use fotos reais da pasta public/img.
- Se faltar foto, deixe um espaço marcado [FOTO: descrição] e avise. Nunca use imagens com marca d'água.
- Sempre com texto alternativo e formato WebP.

## Textos
- Português do Brasil, frases curtas, foco em benefícios.
- Nunca invente depoimentos, números ou clientes. Use [PREENCHER].

## Segurança
- Nunca coloque chaves de API ou senhas no código. Use variáveis de ambiente.
