import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './List';

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

describe('List Component', () => {
  it('should render list items', () => {
    const { getByText, rerender } = render(<List initialItems={['Rodrigo', 'Rafael', 'Gabriel']} />);

    expect(getByText('Rodrigo')).toBeInTheDocument();
    expect(getByText('Rafael')).toBeInTheDocument();
    expect(getByText('Gabriel')).toBeInTheDocument();

    // o rerender permite renderizar novamente um componente trocando as props
    // que eu passei
    rerender(<List initialItems={['Julius']} />);

    expect(screen.getByText('Julius')).toBeInTheDocument();
    expect(screen.queryByText('Rafael')).toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, debug, getByPlaceholderText, findByText } = render(<List initialItems={[]} />);
    
    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    debug();

    // o userEvent permite disparar ações dentro da interface na minha aplicação
    userEvent.type(inputElement, 'Novo');
    userEvent.click(addButton);


    debug();

    // o waitFor roda um loop que vai rodar várias vezes ate retornar um valor
    // que é valido 
    await waitFor(() => {
      expect(getByText('Novo')).toBeInTheDocument();
    });

    // o findByText vai esperar o elemento aparecer em tela
    // expect(await findByText('Novo')).toBeInTheDocument();
  });

  it('should be able to add remove item from the list', async () => {
    const { getAllByText, queryByText } = render(<List initialItems={['Rodrigo']} />);

    // pegando todos os buttons que esta escrito Remover
    const removeButtons = getAllByText('Remover');

    // disparando um evento para clicar no primeiro button
    userEvent.click(removeButtons[0]);

    await waitFor(() => {
      // o not é para fazer uma negação, ou seja, que o Rodrigo não estaja no
      // documento
      expect(queryByText('Rodrigo')).not.toBeInTheDocument();
    });

    // await waitForElementToBeRemoved(() => {
    //   return getByText('Rodrigo');
    // });
  });
});