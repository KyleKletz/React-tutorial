import React, {useState} from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'
function App() {

  const [person, updatePerson] = useState([{id: "1asd", name: "max"}, {id: "2era", name: "steve"}, {id: "3met", name: "paul"}])

  const handleNameChange = (event,index) => {
    let persons = [...person]
    persons[index].name = event.target.value
    updatePerson(persons) 
  } 

  const handleRemovePerson = (index) => {
    let persons = [...person]
    persons.splice(index,1)
    updatePerson(persons)
  }

  return (
    <div className = "App">
      
      {person.map((person, index) => {
        return (
          <div key = {person.id}> 
            <UserInput onChange = {handleNameChange}  person = {person} index = {index}></UserInput>
            <UserOutput person = {person} onClick = {() => handleRemovePerson(index)}></UserOutput> 
          </div>
        )
      })
      }

    </div>
  );
}

export default App;
