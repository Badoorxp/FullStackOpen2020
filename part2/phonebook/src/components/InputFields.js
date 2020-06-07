import React, { Fragment } from 'react'

const InputFields = ({text,data,handler}) =>{
    return(
        <Fragment>
            {text}
            <input 
                value={data}
                onChange={handler}/>
            </Fragment>
    )
}
export default InputFields