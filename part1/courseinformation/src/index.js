import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
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
      {/* <Total parts={courses}/> */}
    </div>
  )
}
const Header = ({course}) =>{
  return (
    course.map((heading) =><h1 key={heading.id}>{heading.name}</h1>))
}

const Content = ({course})=>{
  return(
    course.map(courses=>courses.parts.map(part=><p key={part.id}>{part.name} {part.exercises}</p>))
)}
  // let heading=course.map(heading=><h1 key={heading.id}>{heading.name}</h1>)
  // let contents=course.map(heading=>heading.parts.map(part=><p key={part.id}>{part.name} {part.exercises}</p>))
  

// const Total = ({parts})=><p>Total of {parts.reduce((sum,part)=>sum+part.exercises,0)} exercises.</p>

ReactDOM.render(<App />, document.getElementById('root'))
