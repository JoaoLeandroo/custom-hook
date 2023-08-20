import useClickCounter from "./hooks/useClickCounter"

function App() {

  const { count, increment } = useClickCounter()

  return (
    <div>
      <h1>Contagem de cliques: {count}</h1>
      <button onClick={increment}>Clique aqui</button>
    </div>
  )
}

export default App