import React, {useState} from "react"

import axios from "axios"
function FetchBitcoin(){
    const[data,setData]= useState({})

axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
.then(resp =>{
    console.log(resp)
    setData(resp.data)
})
.catch(err =>
    console.log(err)
)

return(
    <div>
    <h2>The Data</h2>
    {
       <pre>{JSON.stringify(data,null,2)}</pre>
    }
    </div>
)



}






export default FetchBitcoin