import React from 'react'

const List = ({data}) => data.map(person=>
        <li key={person.name}>{person.name} {person.number}</li>)

export default List