import React from 'react';


function UserInput(props) {
    const inputStyle = {
        border: '3px solid red',
        textAlign: 'center'
    }
    return(
    <input 
        type = "text"
        style = {inputStyle}
        value= {props.currentName} 
        onChange = {(event) => props.onChange(event, props.index)}
    >
        
    </input>
    )
}


export default UserInput