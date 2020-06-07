import React, { useState } from 'react'

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
  const [ newSearch, setnewSearch ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [result,setResult]=useState([{
    name: '',
    number: ''
  }])
  
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
    //setResult(persons.filter((person)=>person.name.includes(newSearch.toLowerCase)>-1?true:false))
    setResult(persons.filter(person=>person.name.includes(newSearch)))  
    if(event.target.value.length===0)
    {
      //searchClear()
    }
  }

  const searchClear=()=>{
   setResult([{name:'',number:''}])
   setnewSearch('')
  }

  return (
    <div className="App-header">
      <h2>Phonebook</h2>
      <div>
        <h3>Search</h3>
        name: 
          <input 
                value={newSearch}
                onChange={search}/>
          {result.map(person=>
        <li key={person.name}>{person.name} {person.number}</li>
      )}
          <button onClick={searchClear} >Clear Search</button>
      </div>
      <h3>Add New Contact</h3>
      <form onSubmit={nameAdder}>
        <div>
          name: 
          <input 
                value={newName}
                onChange={(event)=>setNewName(event.target.value)}/>
          <br/>
                number: 
          <input 
                value={newNumber}
                onChange={(event)=>setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {persons.map(person=>
        <li key={person.name}>{person.name} {person.number}</li>
      )}
      <div>debug: Name- {newName} Number- {newNumber}</div>
    </div>
  )
}

export default App