
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() =>{
    fetch('http://localhost:3000/api/items')
    .then((res) => res.json())
    .then((data) => setItems(data))
    .catch((err) => console.error("Ошибка: ", err))
  },[])

  return (
   <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Список дел из бэкенда:</h1>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            <strong>{item.title}</strong> — {item.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
