import React from "react";
import Data from "./JokesData";
import Joke from "./Joke";
function Root() {
  const result = Data.map((joke) => (
      
    <Joke 
    question={joke.question} 
    punchLine={joke.punchLine} 
    />
  ));

  return <div>
  {result}
  </div>;
}

export default Root;
