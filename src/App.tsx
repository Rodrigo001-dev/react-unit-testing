import { useState } from "react"

function App() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['Rodrigo', 'Rafael', 'Gabriel']);

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem]);
    }, 500);
  };
  
  return (
    <>
    <input placeholder="Novo item" value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
