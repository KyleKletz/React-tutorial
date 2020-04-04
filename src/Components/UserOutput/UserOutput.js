import React from 'react';
import "./UserOutput.css";

function UserOutput(props) {

    let display = null

    if (props.person.name !== ""){
        display = (
            <div className = "UserOutput">
                {console.log(props.person)}
            <p >User Name: {props.person.name}</p>
            <p>Paragraph 2</p>
            <button onClick = {props.onClick}>Click to Remove this element</button>
            </div>
        )
    }

    return display    
}

export default UserOutput