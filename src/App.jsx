import { useState } from 'react'

import './App.css'

function App() {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem])
      setNewItem('')
    }
  }

  return (
    <>
    <div className="container">
      <section>
        <h3>To-Do List</h3>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new item"
        />
        <button onClick={addItem}>Add Item</button>
      </section>
      <section>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input type='checkbox' />
            {item}
           <button className="delete-button" onClick={() => {
            const updatedItems = items.filter((_, i) => i !== index)
            setItems(updatedItems)
          }}>Delete</button>
          </li>
        ))}
      </ul>
      </section>
      </div>
    </>
  )
}

export default App
