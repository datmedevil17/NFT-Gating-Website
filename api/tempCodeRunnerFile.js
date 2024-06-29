const express = require('express')
const {Web3} = require("web3")
const ABI = require("./NFTGate.json")

const app = express()
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/u8rBawJz3bpdAe7h_DKZt6z1_moUiDbM")
const contractAddress = "0xF7CAF7C5891129024f84a1b7ca23849D5A5dA024"

console.log(ABI)
const contract = new web3.eth.Contract(ABI,contractAddress)
console.log(contract)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})