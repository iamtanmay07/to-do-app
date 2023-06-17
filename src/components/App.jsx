import React, { useState } from "react";
import Todo  from "./Todo";

function App() {
  const [inputText , setInput] = useState("");
  const [items , setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setInput(newValue);
  }

  function addItems(){
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInput("");
  }


  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter(
        (items,index) => {
          return index !== id;
        }
      )
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul> 
        {items.map((todoItem, index) => (
            <Todo
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
