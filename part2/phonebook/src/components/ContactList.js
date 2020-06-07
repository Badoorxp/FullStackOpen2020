import React, { Fragment } from 'react'
import Headings from './Headings'
import List from './List'

    const ContactList=({list})=>{
        return(
            <Fragment>
                <Headings text="Contacts"/>
                <List data={list}/>
            </Fragment>
        )
    }
export default ContactList