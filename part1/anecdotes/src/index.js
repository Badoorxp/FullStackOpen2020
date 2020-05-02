import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const randomizer= ()=>setSelected(Math.round(Math.random()*5))
  const voter=()=>{
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
}

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Display anecdotes={anecdotes[selected]} count={votes[selected]}/>
      <br/>
      <VoteButton click={voter}/>
      <Next click={randomizer} current={selected}/>

    </div>
  )
}

const Display = ({anecdotes,count}) =>{
  return (
  <div>{anecdotes}
  <br/>Has {count} Votes.
  </div>
  )
}

const Header = ({text})=>{
  return(
    <h1>{text}</h1>
  )
}



const Next = ({click,current}) =>{
  console.log("",current)
  return(
    <button onClick={click}>Next Anecdote</button>
  )
}

const VoteButton = ({click}) =>{
  return(
    <button onClick={click}>Vote</button>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)