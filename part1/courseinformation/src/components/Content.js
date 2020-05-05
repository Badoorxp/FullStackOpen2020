import React from 'react'

const Content = ({course})=>{
  return(
    course.map(part=><p key={part.id}>{part.name} {part.exercises}</p>))
}

  export default Content