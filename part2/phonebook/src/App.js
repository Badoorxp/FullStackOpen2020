import React, { useState } from 'react'
import ContactList from './components/ContactList'
import NameAdder from './components/NameAdder'
import Search from './components/Search'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '1234567890' },
      { name: 'Ada Lovelace', 
      number: '39-44-5323523' },
      { name: 'Dan Abramov', 
      number: '12-43-234345' },
      { name: 'Mary Poppendieck', 
      number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const [ newSearch, setnewSearch ] = useState('')
  const [result,setResult]=useState([{
    name: '',
    number: ''
  }])

  const newNameHandle = (event)=>setNewName(event.target.value)

  const newNumberHandle = (event)=>setNewNumber(event.target.value)

  const nameAdder=(event)=>{
      event.preventDefault()
      if(newName.length>0)
      {
        if(newNumber.length>0)
        {
          if((persons.findIndex(person=>person.name===newName))>=0)
          {
            alert(`${newName} already exists in List`)
          }
          else 
            if((persons.findIndex(person=>person.number===newNumber))>=0)
            {
              alert(`${newNumber} is a duplicate number`)
            }       
          else {
            const newPerson={
              name: newName,
              number: newNumber
            }
            setPersons(persons.concat(newPerson))
          }
          setNewName('')
          setNewNumber('')
        }
        else
          alert("Please type a number before adding a contact")
      }
      else
        alert("Please enter a name before adding a contact")
  }

  const search=(event)=>{
    setnewSearch(event.target.value)
    setResult(persons.filter(person=>person.name.includes(newSearch)))  
  }

  const searchClear=()=>{
   setResult([{name:'',number:''}])
   setnewSearch('')
  }

  return (
    <div className="App-header">
      <h2>Phonebook</h2>
      
      <Search 
        name={newSearch}
        HSearch={search}
        list={result}
        cleanup={searchClear}
      />

      <NameAdder 
        submitController={nameAdder}
        name={newName}
        number={newNumber}
        HName={newNameHandle}
        HNumber={newNumberHandle}
      />

      <ContactList list={persons}/>
      
    </div>
  )
}

export default App