export {}

// import React, { useCallback, useMemo, useState } from 'react'
// import ItemsList from './ItemsList'
// export const App: React.FC<{}> = props => {
//   const [colored, setColored] = useState(false)
//   const [count, setCount] = useState(1)

//   const styles = {
//     color: colored ? 'darkred' : 'black'
//   }

//   const generateItemsFromAPI = useCallback(() => {
//     return new Array(count).fill('').map((_, i) => `Элемент ${i}`)
//   }, [count])

//   return (
//     <>
//       <h1 style={styles}>Количество элементов: {count}</h1>
//       <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Добавить</button>
//       <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
//       <ItemsList getItems={generateItemsFromAPI} />
//     </>
//   )
// }

// export default App