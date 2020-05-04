import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // const course = {
  //   id: 1,
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10,
  //       id: 1
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7,
  //       id: 2
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14,
  //       id: 3
  //     }
  //   ]
  // }
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

const Course = ({courses}) => {
  return (
      <div>
      <Header course={courses}/>
      <Content course={courses}/>
      {/* <Total parts={course}/> */}
    </div>
  )
}
const Header = ({course}) =>{
  return (course.map(heading =><h1 key={heading.id}>{heading.name}</h1>))
}

const Content = ({course}) =>{
  return (course.map(part=><p key={part.parts.id}>{part.parts.name} {part.parts.exercises}</p>))
}

// const Total = ({parts})=><p>Total of {parts.reduce((sum,part)=>sum+part.exercises,0)} exercises.</p>

ReactDOM.render(<App />, document.getElementById('root'))
