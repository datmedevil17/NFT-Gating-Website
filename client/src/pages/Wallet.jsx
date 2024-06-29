import React from 'react'
import {ethers} from "ethers"
import { useState } from 'react'
import abi from "../contract/NFTGate.json"
import {useNavigate} from "react-router-dom"





const Wallet = () => {
    const navigateTo = useNavigate()
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
      });
    const [account, setAccount] = useState("")
    const connectWallet = async () => {
        window.ethereum.on("chainChanged", ()=>{
          window.location.reload()
        })
        window.ethereum.on("accountsChanged", ()=>{
          window.location.reload()
        })
        const contractAddress = "0xF7CAF7C5891129024f84a1b7ca23849D5A5dA024";
        const contractABI = abi.abi;
    
        try {
          const { ethereum } = window;
          if (!ethereum) {
            console.log("Metamask is not installed");
            return;
          }
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });
          navigateTo("/home", {state:{address:accounts[0]}})
    
          if (accounts.length === 0) {
            console.log("No account found");
            return;
          }
    
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress()
          setAccount(address)
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          console.log(signer)
    
          setState({ provider, signer, contract,address });
        } catch (error) {
          console.error("Error connecting to Metamask:", error);
        }
      };
  return (
    <div>
        <button onClick={connectWallet}>{account ? (account) : ("Connect Wallet")}</button>

      
    </div>
  )
}

export default Wallet
