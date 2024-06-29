const express = require('express')
const {Web3} = require("web3")
const ABI = require("./NFTGate.json").abi
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/u8rBawJz3bpdAe7h_DKZt6z1_moUiDbM")
const contractAddress = "0xed7b7ac9ffc8fb72af8986d7e865e389e8e427e0"

// console.log(ABI)
const contract = new web3.eth.Contract(ABI,contractAddress)
// console.log(contract)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
const fetchNFTs = async(account)=>{
    try {
        const nftBalance = await contract.methods.balanceOf(account).call()
        return{userBalance:Number(nftBalance)}
        
    } catch (error) {
        console.error(error)
        
    }
}

app.post('/members', async(req,res)=>{
    try {
        const account = req.body.from;
        const numNFTs = await fetchNFTs(account)
        console.log(numNFTs.userBalance)
        if(numNFTs.userBalance>0){
            res.status(200).json({status:200, numNFTs})
        }else{
            res.status(400).json({error: 'Internal Error'})
        }
        
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
        
    }
})