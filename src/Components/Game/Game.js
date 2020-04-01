import React, {useState, useEffect} from 'react'

function Game(props){
    const [click,clicked] = useState(0);

    const incrementHandler = () => {
        clicked(click+1)
    } 

    useEffect(()=> {
        console.log("updated" + click)
    },[click])
    return(
        <button onClick= {incrementHandler} >
            <p>{props.children}</p>
            <p>{props.name} {click}</p>   
        </button>
    )
}

export default Game