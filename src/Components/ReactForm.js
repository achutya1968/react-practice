
import React,{useState} from 'react'


export default function ReactForm() {
  const [newInput, setNewinput] = useState({
    name: "",
    email: "",
    password: "",
  });



  function changeHandler(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setNewinput(prevData =>{
    return{
        ...prevData,
        [name]:value
    }
})
} 


  return (
    
      <div className="App">
        <h2>React Form</h2>
        <form>
          <div>
            <input
              style={{ margin: 10, width: "50%" }}
              type="text"
              name="name"
              value={newInput.name}
              placeholder="Type your name..."
              required
              onChange={changeHandler}
            />
          </div>

          <div>
            <input
              style={{ margin: 10, width: "50%" }}
              type="text"
              name="email"
              value={newInput.email}
              placeholder="Type your email.."
              required
              onChange={changeHandler}
            />
          </div>

          <div>
            <input
              style={{ margin: 10, width: "50%" }}
              type="password"
              value={newInput.password}
              name="password"
              onChange={changeHandler}
              placeholder="Type your password..."
              required
            />
          </div>

          <button type="submit" style={{ margin: 10 }}>
            Submit
          </button>
        </form>
        <h2>{newInput.name}</h2>
        <h2>{newInput.email}</h2>
        <h2>{newInput.password}</h2>
      </div>
    
  );
}

