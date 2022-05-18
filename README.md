## Projeto

Nessa aplicação apliquei testes dentro do React.
Utilizando as ferramentas: Jest para fazer os testes e também o React Testing Library que é uma ferramenta que trás alguns helpers para executar testes dentro do ecossistema React tanto para o React-Native e para o React para web.
O React Testing Library ele vai auxiliar para ter algumas funcionalidades de uma maneira mais rápida mas ele não é necessário para fazer os testes.
[Veja mais sobre o React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

<LINKEDIN>
Pra quem nunca escreveu testes, testes só vai começar a fazer sentido quando vocês sofrerem pela falta de teste, ou seja, testes só vai fazer sentido quando nós passarmos pela dor de não ter testes em uma aplicação grande.
<LINKEDIN />

O principal ponto dos testes é que eles garantem confiabilidade, isso nada mais é do que basicamente desenvolver o software com segurança, ou seja, significa adicionar novas funcionalidades ou mexer em funcionalidades existentes sem aquele medo constante de estar quebrando algo no nosso sistema.

Existem metodologias para a escrita de testes assim como metodologias para escritas de aplicação
TDD é basicamente Test Driven Development, fazer um desenvolvimento dirigido a testes, ou seja, você desenvolve os testes antes que são basicamente as suas regras de negócio sendo testadas para depois desenvolver as aplicações, TDD é somente uma metodologia!! Você consegue ter uma cobertura de testes boa da sua aplicação independente de qual metodologia utilizar.

Existem tipos e tipos de testes, hoje os principais tipos de testes são 2:

- Testes unitários: vão testar uma unidade, uma parte muito isolada da aplicação e não como ela funciona no contexto que ela esta aplicada mas simplesmente uma unidade muito pequena, traduzindo isso para o React, é testado um componente, a menor camada que conseguimos dividir algo na aplicação que dentro do React na grande maioria das vezes vai ser um componente

- Testes de integração: nada mais é do que testes que testam como 2 componentes, como 2 unidades ou mais se comunicam, funcionam juntas, ou seja, quando é testado várias unidades ao mesmo tempo, como uma impacta na outra, estamos criando testes de integração.

- E existem os famosos testes End to End(E2E): é o testes que tenta simular como um usuário interage com a aplicação, o testes End to End tenta repetir ações que um usuário faria na aplicação tradicionalmente para ver ser o resultado que esta vindo para o usuário é o que realmente é o esperado. No teste E2E não vai ser testado muito o código, se o código esta acontecendo da maneira que é esperada, teste E2E o vai testar como se realmente fosse um usuário utilizando a aplicação.
Nos E2E é muito fácil cometer um problema muito famoso nos testes, que é gerar falsos positivos, porque quando fazemos testes E2E é muito propenso a criar os famosos mocks dentro dos testes, que são os "simuladores" de uma ação que no mundo real vai acontecer de outra forma, somos muito propenso nos testes E2E a manipular os testes para que eles deem positivo 

<LINKEDIN>
Se existem tantos tipos de testes eu tenho que produzir todos esses tipos de testes e para todas as funcionalidades?
A resposta é não! Talvez o momento da sua aplicação você precise ter testes E2E para um fluxo muito específico da aplicação que esse fluxo não pode quebrar.
Por Exemplo: você esta desenvolvendo um e-commerce, você precisa desenvolver um testes E2E que ele testa de ponta a ponta para o fluxo de compra do e-commerce porque isso não pode falhar.

Para quem esta iniciando no mundo dos testes o mais fácil são os testes unitários, porque nesse tipo de teste é testado um pedaço muito isolado da aplicação e eles são mais fáceis de serem testados no começo
<LINKEDIN />

## 🚀 Tecnologias/Bibliotecas utilizadas
  
<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://pt-br.reactjs.org/" target="_blank"> <img src="https://img.shields.io/badge/-ReactJS-61dafb?style=flat-square&logo=React&logoColor=white" alt="ReactJS"> </a>
<a href="https://jestjs.io/pt-BR/" target="_blank"> <img src="https://img.shields.io/badge/-Jest-FF7800?style=flat-square&logo=jest&logoColor=white" alt="Jest"> </a>
  
## 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>
