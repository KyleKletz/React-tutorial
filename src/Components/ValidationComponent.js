import React from 'react';

function ValidationComponent(props){
    
    let validateLength = props.length < 5 ? "Text too short " : null

    return (
    <p>{validateLength}</p>
    )
    
}

export default ValidationComponent