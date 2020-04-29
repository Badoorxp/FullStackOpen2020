import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Heading= () => <h1>Give Feedback</h1>

const Buttons=({text,update})=>{
return(
  <button onClick={update}>{text}</button>
  )  
}

const Heading2=()=><h2>Statistics</h2>

const Stats=({text,count})=><div>{text} {count}</div>

const App =() =>{
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  
  return(
    <div>
      <Heading/>
      <Buttons text='Good' update={()=>setGood(good+1)}/>
      <Buttons text='Neutral' update={()=>setNeutral(neutral+1)}/>
      <Buttons text='Bad' update={()=>setBad(bad+1)}/>
      <Heading2/>
      <Stats text='Good' count={good}/>
      <Stats text='Neutral' count={neutral}/>
      <Stats text='Bad' count={bad}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

