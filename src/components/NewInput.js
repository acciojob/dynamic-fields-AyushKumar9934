import React from 'react'

const NewInput = (props) => {

  return (
    <div id={props.div_id}>
    <input  type="text" name="name" placeholder="Name"></input>
    <input  type="text" name="age" placeholder="Age"></input> <button onClick={()=>{props.removeOne(props.div_id)}}>Remove</button><br/></div>
  )
}

export default NewInput