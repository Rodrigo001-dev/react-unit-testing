import { render } from '@testing-library/react';
import App from './App';

// test('', () => {
//   // por ter configurando o swc eu posso importar um componente react dentro do
//   // teste
//   // o getByText vai procurar um elemento pelo texto contido dentro dele
//   /*
//     no get temos várias opções e além de várias opções podemos encontrar 1
//     unico elemento, ou seja, todos que começam com getBy vai me retornar um
//     unico elemento, todos que começam com getAll vai econtrar todos os elementos
//     que satisfação aquela query e também temos várias outras opções
//     os que começam com query eles não falham caso eu não encontre o elemento, ou
//     seja, se eu quero testar se um elemento esta em tela ou não eu posso utilizar
//     o query porque ele não vai fazer meus testes falharem caso eu não encontre o
//     elemento, diferente do get que caso ele não encontre o elemento ele faz
//     falhar, o get  o elemento precisa estar em tela se ele não esta vai falhar
//     e por ultimo tem o find, o find é quase a mesma coisa que o get porém ele
//     espera o elemento aparecer em tela
//   */
//   const { getByText } = render(<App />);

//   // toBeTruthy é para que o valor do getByText seja verdadeiro
//   expect(getByText('Hello World')).toBeInTheDocument();
// });

describe('App Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />);

    expect(getByText('Rodrigo')).toBeInTheDocument();
    expect(getByText('Rafael')).toBeInTheDocument();
    expect(getByText('Gabriel')).toBeInTheDocument();
  });
});