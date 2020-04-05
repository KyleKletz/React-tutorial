import React from 'react'
import './CharComponent.css'

function CharComponent (props) {

    let output = (
        <div className = "CharComponent" onClick = {props.onClick}>{props.character}</div>
    )

    if (props.character === ""){
        output = null
    }
    return (
        output
    )
}

export default CharComponent