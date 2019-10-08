import React, {useState, useEffect} from 'react'

function Game(){
    const [click,clicked] = useState(0);
    useEffect(()=> {
        console.log("updated" + click)
    },[click])
    return(
        <button onClick= {() => clicked(click +1)}>
            {click}
        </button>
    )
}

export default Game