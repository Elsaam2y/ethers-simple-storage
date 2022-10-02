
const ethers = require("ethers");
const fs = require("fs-extra"); //helps us store, access, and manage data on our operating system.
require("dotenv").config();
// synchronous [solidity]
// asynchronous [Javascript]

// can use await function 
/*
async function setuppMovieNight{
    await cookpopcorn()
    await pourDrinks()
    startMovie() // will start only after finihsing the previous call since they use wait 
}


function main(){
    console.log("hi");
    let variable = 5;
    console.log(variable);
    // won't wait for the contract to be deployed
}

//main();
main() // another way for making the call for async function
    .then(() => ProcessingInstruction.exit(0))
    .catch((error) => {
        console.error(error);
        ProcessingInstruction.exit(1);
    }); 
*/

async function main(){
    // wait for contcart to be deployed
    // http://127.0.0.1:7545
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545"); // we are going to connect to this URL of the local blockchain
    const wallet = new ethers.Wallet(
        process.env.PRIVATE_KEY,
        provider
    ); // now we can connect. It takes private key of Ganache 
    
    // read the abi and binary files of the compliation 
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
    
    // create the contract factory which is object to deploy contracts 
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, please wait...");
    const contract = await contractFactory.deploy(); // STOP here! wait for the contract to be deployed
    // in deply we can add condtions like gasprice, number of bloakc
    console.log(contract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

// synchronous [solidity]
// asynchronous [javascript]

// cooking
// Synchronous
// 1. Put popcorn in microwave -> Promise
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asynchronous
// 1. Put popcorn in the mircrowave
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

// Promise
// Pending  when we dont use the await keyword since it exited before finishing the full deplyoment 
// Fulfilled
// Rejected



