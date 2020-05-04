import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = ({course}) => {
  return (
      <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}
const Header = ({course}) =><h1>{course}</h1>

const Content = ({parts}) =>parts.map(part=> <p key={part.id}>{part.name} {part.exercises}</p>)

const Total = ({parts})=>{
  let sum=0
  for(let i=0;i<parts.length;i++)
  {
    sum+=parts[i].exercises
  }
  return(<p>Total of {sum} exercises.</p>)
}

ReactDOM.render(<App />, document.getElementById('root'))
