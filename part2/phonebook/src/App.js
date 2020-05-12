import React,{useState} from 'react'
import Persons from './components/Persons'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [ newName, setNewName ] = useState('')
  
  const inputHandler = (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
 
  const formHandler = (event)=>{
    event.preventDefault()
    const newContact={
      name: newName,
    }
    setPersons(persons.concat(newContact))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formHandler}>
        <div>
          name: <input  value={newName} onChange={inputHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol> 
        {persons.map((p)=>
          <Persons personInfo={p} key={p.name}/>
        )}
      </ol>
    </div>
  )
}

export default App;
