import React, { Fragment } from 'react'

const NameAdder = () =>{
    return
    (
        <Fragment>
            <form>
                <div>
                name: 
                <input 
                        value={newName}
                        onChange={(event)=>setNewName(event.target.value)}/>
                <br/>
                        number: 
                <input 
                        value={newNumber}
                        onChange={(event)=>setNewNumber(event.target.value)}/>
                </div>
                <div>
                <button type="submit" >add</button>
                </div>
            </form>
      </Fragment>
    )
}
export default nameAdder