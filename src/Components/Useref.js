//import { count } from "console"
import React,{useState,useEffect,useRef} from "react"


 function Useref() {
     const [name,setName] = useState('')
     const setCount = useRef(2)

     useEffect(()=>{
         setCount.current = setCount.current + 1
     })

    return (
        <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <div>My name is: {name}</div>
            <div>I counted {setCount.current} times</div>
        </div>
    )
}
export default Useref