import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Headings= ({text}) => <h1>{text}</h1>

const Buttons=({text,update,setShown})=>{
return(
  <button onClick={update}>{text}</button>
  )  
}

const Stats=({text,count})=>{
  return(<tr><td>{text}</td> <td>{count}</td></tr>)}

const Average=({text,count})=>{
  const calculate=(count)=>count===0?0:(3/count);
  return(
  <tr><td>{text}</td> <td>{calculate(count)}</td></tr>
  )
}

const Percentage=({text,count,total})=><tr><td>{text}</td> <td>{(count/total)*100}%</td></tr>

const Display=({total,good,bad,neutral})=>{
  if(total>0)
  {
    return(
    <table>
    <Stats text='Good' count={good}/>
    <Stats text='Neutral' count={neutral}/>
    <Stats text='Bad' count={bad}/>
    <Stats  text='All' count={total}/>
    <Average  text='Average' count={(good-bad)}/>
    <Percentage text='Positive' count={good} total={total}/>
    </table>
    )
  }
  return(
    <div>No Feedback Given</div>
  )
}

const App =() =>{
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  const total= good+neutral+bad
  
  return(
    <div>
      <Headings text='Give Feedback'/>
      <Buttons text='Good' update={()=>setGood(good+1)}/>
      <Buttons text='Neutral' update={()=>setNeutral(neutral+1)}/>
      <Buttons text='Bad' update={()=>setBad(bad+1)}/>
      <Headings text='Statistics'/>
      <Display total={total} good={good}  neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

