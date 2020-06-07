import React from 'react'

const ContactList = ({p}) => p.map(person=>
        <li key={person.name}>{person.name} {person.number}</li>)

export default ContactList