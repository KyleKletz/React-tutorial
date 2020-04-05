import React, {useState} from 'react';
import './App.css'
import ValidationComponent from './Components/ValidationComponent'
import CharComponent from './Components/CharComponent/CharComponent'

function App() {
  const [text,updateText] = useState('')

  let updateList = ( index) => {
    let list = [...text]
    list.splice(index,1)
    updateText(list.join(""))
  }

 let charList = (
  [...text].map((char,index) =>
    <CharComponent onClick ={() => updateList(index)} character = {char}></CharComponent>
    )
 )

  return (
    <div className = "App">
      <header className = "App-link">
        <input onChange = {(event) => updateText(event.target.value)} type = "text" value = {text}></input>
        <p>{text.length}</p>
        <ValidationComponent length = {text.length}></ValidationComponent>
        {charList}
      </header>
    </div>
     
  );
}

export default App;
