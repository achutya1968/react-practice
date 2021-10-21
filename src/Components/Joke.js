import React from "react"

function Joke(props){
    return(
        <div>
        <h1>The List:</h1>
        <h2>Question:{props.question}</h2>
        <h2>Answer:{props.punchLine}</h2><hr />
        </div>
    )
}

export default Joke