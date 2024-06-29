 import React from 'react'
 import { useNavigate, useLocation } from 'react-router-dom'
 
 const Home = () => {
    const navigateTo = useNavigate()
    const location = useLocation()
    const revealMsg = async()=>{
        const account = location.state.address;
        const res = await fetch(`http://localhost:3000/members`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({from:account})
        })
        const data = await res.json()
        if(data.status===200){
            navigateTo("/members")

        }else{
            window.alert("You are currently not holding any NFTs in collection regarding address 0xF7CAF7C5891129024f84a1b7ca23849D5A5dA024")
        }
    }
   return (
     <div>
        <p>I have a secret message for holders of my NFT collection with address</p>
        <p>0xF7CAF7C5891129024f84a1b7ca23849D5A5dA024</p>
        <button onClick={revealMsg}>Reveal Message</button>
       
     </div>
   )
 }
 
 export default Home
 