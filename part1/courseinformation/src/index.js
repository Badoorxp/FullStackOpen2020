import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props)
  return (
      <>
      <Part pt={props.parts[0].name} ex={props.parts[0].exercises}/>
      <Part pt={props.parts[1].name} ex={props.parts[1].exercises}/>
      <Part pt={props.parts[2].name} ex={props.parts[2].exercises}/>
      </>
  )
}

const Part = (props) =>{
  console.log(props)
  return <p>{props.pt} {props.ex}</p>
}

const Total = (props) => {
  return <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))