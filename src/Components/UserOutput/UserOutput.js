import React from 'react';
import "./UserOutput.css";

function UserOutput(props) {

    let display = null

    if (props.userName !== ""){
        display = (
            <div className = "UserOutput">
            <p>User Name: {props.userName}</p>
            <p>Paragraph 2</p>
            </div>
        )
    }

    return display    
}

export default UserOutput