import React, {useState} from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'
function App() {

  const [name, changeName] = useState("max")

  const handleNameChange = (event) => {
    changeName(event.target.value)
  }

  return (
    <div className = "App">

      <UserInput onChange = {handleNameChange} currentName = {name}></UserInput>
      <UserOutput userName = {name}></UserOutput>

    </div>
  );
}

export default App;
