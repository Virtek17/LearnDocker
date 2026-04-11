import { useEffect, useState } from 'react'
import './App.css'

import monkey from "./assets/monkey.webp"
import monkey1 from "./assets/monkey1.jpg"
import monkey2 from "./assets/monkey2.jpg"

interface Item {
  id: number;
  name: string;
  phone: string;
}

interface Monkey {
  id: number;
  title: string;
  img: string; 
}

const monkeyImages: Record<string, string> = {
  'monkey': monkey,
  'monkey1': monkey1,
  'monkey2': monkey2,
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [monkeys, setMonkeys] = useState<Monkey[]>([]);
  const [show, setShow] = useState<boolean>(false);
  
  useEffect(() => {
    // fetch('http://localhost:3000/api/items')
    //   .then((res) => res.json())
    //   .then((data) => setItems(data))
    //   .catch((err) => console.error("Ошибка: ", err))

    fetch('http://localhost:3000/api/monkey')
      .then((res) => res.json())
      .then((data) => setMonkeys(data))
      .catch((err) => console.error("Ошибка: ", err))

    fetch('http://localhost:3000/api/items')
    .then(res => res.json())
    .then(data => setItems(data));
  }, [])

  return (
   <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    {show ? (
      <>
        <h1>Список дел из бэкенда:</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> — {item.phone}
            </li>
          ))}
        </ul>
      </>
    ) : (
      <>
        <h1>Обезьяны</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {monkeys.map((item) => (
            <img 
              key={item.id}
              src={monkeyImages[item.img] || monkey} 
              alt={item.title} 
              style={{ 
                maxWidth: '200px', 
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          ))}
        </div>
      </>
    )}
      <button onClick={() => setShow(!show)}>Клик</button>
    </div>
  )
}

export default App