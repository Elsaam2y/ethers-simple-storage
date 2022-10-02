# Ethers Simple Storage


# Getting Started

## Requirements

- Nodejs 
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
- [ganache](https://trufflesuite.com/ganache/)

## Setup

Clone this repo

```
git@github.com:Elsaam2y/ethers-simple-storage.git
cd ethers-simple-storage
```

Then install dependencies

```
yarn
```

## Usage

1. Run your ganache local chain, by hitting `quickstart` on your ganache application

> Save the workspace. This way, next time you open ganache you can start the workspace you've created, otherwise you'll have to redo all the steps below.

2. Copy the `RPC SERVER` sting in your ganache CLI, and place it into your `.env` file similar to what's in `.env.example`.

<img src="./img/ganache-http.png" alt="ganache" width="500"/>

`.env` Example:

```
RPC_URL=http://0.0.0.0:8545
```

3. Hit the key on one of the accounts, and copy the key you see and place it into your `.env` file, similar to what you see in `.env.example`.


4. Compile your code

Run

```
yarn compile
```

You'll see files `SimpleStorage_sol_SimpleStorage.abi` and `SimpleStorage_sol_SimpleStorage.bin` be created.

5. Run your application

```
node deploy.js
```

### Deploying to a testnet

Make sure you have a [metamask](https://metamask.io/) or other wallet, and export the private key.

**IMPORTANT**

USE A METAMASK THAT DOESNT HAVE ANY REAL FUNDS IN IT. Just in case you accidentally push your private key to a public place. I _highly_ recommend you use a different metamask or wallet when developing.

1. [Export your private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) and place it in your `.env` file, as done above.

2. Go to [Alchemy](https://alchemy.com/?a=673c802981) and create a new project on the testnet of choice (ie, Goerli)
3. Grab your URL associated with the testnet, and place it into your `.env` file.
4. Make sure you have [testnet ETH](https://faucets.chain.link/) in your account. You can [get some here](https://faucets.chain.link/). You should get testnet ETH for the same testnet that you made a project in Alchemy (ie, Goerli)
5. Run

```
node deploy.js
```
