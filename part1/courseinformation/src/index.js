import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
      <>
      <Part pt={part1} ex={exercises1}/>
      <Part pt={part2} ex={exercises2}/>
      <Part pt={part3} ex={exercises3}/>
      </>
  )
}

const Part = (props) =>{
  return(
    <p>
        {props.pt} {props.ex}
      </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.ex1+props.ex2+props.ex3}
  </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))