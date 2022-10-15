import { ethers } from "./ethers-5.6.esm.min.js"
const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        console.log("we have metamask")
        await window.ethereum.request({ method: "eth_requestAccounts" })
        document.getElementById("connectButton").innerHTML = "Connected!"
        console.log("Connected!")
    } else {
        console.log("No Metamask!")
        document.getElementById("connectButton").innerHTML =
            "Please Install Metamask"
    }
}

async function fund(ethAmount) {
    console.log(`Funding with ${ethAmount}...`)
    if (typeof window.ethereum !== "undefined") {
        // provider / connection to the blockchain
        // signer / wallet / someone with some gas
        // contract that we are are interacting with
        // ^ABI & address
    }
}
