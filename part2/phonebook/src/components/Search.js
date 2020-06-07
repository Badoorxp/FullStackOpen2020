import React, { Fragment } from 'react'
import Headings from './Headings'
import InputFields from './InputFields'
import List from './List'

const Search=({name,HSearch,list,cleanup})=>{
    return(
        <Fragment>
            <Headings text="Search"/>
            <InputFields text="name" data={name} handler={HSearch}/>
            <List data={list}/>
            <button onClick={cleanup} >Clear Search</button>
        </Fragment>
    )
}
export default Search