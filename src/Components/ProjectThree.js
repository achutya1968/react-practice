import React,{useState} from 'react'

/*export default function ProjectThree() {
    const Time = new Date().toLocaleTimeString()
    const[time,setTime]=useState(Time)

    function changeTime(){
         let newTime = new Date().toLocaleTimeString()
         setTime(newTime)
     }

     setInterval(changeTime,1000)

    return (
        <div>
        <h1>Digital Clock</h1>
       <h1>{time}</h1> 
        </div>
    )
}*/

export default function Clock(){
    const Time = new Date().toLocaleTimeString()
    const Date1 = new Date().toLocaleDateString()
    const [time,setTime] = useState(Time)
    const [date,setDate] = useState(Date1)


    function changeTime(){
        let update = new Date().toLocaleTimeString();
        setTime(update)
    }
    function updateDate(){
        let newDate = new Date().toLocaleDateString();
        setDate(newDate)
    }
    
    setInterval(updateDate)

    setInterval(changeTime,1000)

    return(
        <div>
        <h3>Today's date:{date}</h3>
        <h1>Digital Clock</h1>
        <h2>{time}</h2>
        </div>
    )
}