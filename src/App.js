import React, {useState} from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'
function App() {

  const [name, changeName] = useState(["max","steve","paul"])

  const handleNameChange = (event,index) => {
    var temp = name.slice()
    temp.splice(index,1,event.target.value)
    changeName(temp) 
  } 

  return (
    <div className = "App">
      
      {name.map((person, index) => {
        return (
          <div> 
            <UserInput onChange = {handleNameChange} currentName = {person} index = {index}></UserInput>
            <UserOutput userName = {person} ></UserOutput> 
          </div>
        )
      })
      }

    </div>
  );
}

export default App;
