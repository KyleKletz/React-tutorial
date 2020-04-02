import React from 'react';
import "./UserOutput.css";

function UserOutput(props) {

    return(
        <div className = "UserOutput">
            <p>User Name: {props.userName}</p>
            <p>Paragraph 2</p>
        </div>
    )
    
}

export default UserOutput