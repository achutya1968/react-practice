import { useState, useEffect } from "react";
import axios from "axios";


//function ReactHook() {
  //const [posts, setPosts] = useState([]);

  /*useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

function ReactHook(){
  const [posts, setPosts] = useState([]);
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(resp => {
      console.log(resp)
      setPosts(resp.data)
    })
    .catch((err) => {
      console.log(err);
    })
    
    //useEffect(()=>{
      //ReactHook()
    //},[])


  return (
    <div>
      <h1 style={{textAlign:"center"}}>The list</h1>
        {
          posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))
      }
      
    </div>
  );
}

export default ReactHook;
