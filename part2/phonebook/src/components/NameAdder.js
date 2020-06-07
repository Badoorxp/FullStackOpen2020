import React, { Fragment } from 'react'
import Headings from './Headings'
import InputFields from './InputFields'

const NameAdder = ({submitController,name,HName,number,HNumber}) =>{
    return(
        <Fragment>
             <Headings text="Add New Contact"/>
             <form onSubmit={submitController}>
                <p>
                <InputFields text="name:" data={name} handler={HName}/>
                <br/>
                <InputFields text="number:" data={number} handler={HNumber}/>
                <button type="submit" >add</button>
                </p>
            </form>
      </Fragment>
    )
}
export default NameAdder