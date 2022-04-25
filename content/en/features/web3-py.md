---
title: web3.py
description: ''
position: 12
category: 'Features'
---

Users should be able to call the blockchain without having to go through our order balancer. For this porpose, we expose the web3 python library to the user so they can directly call smart contracts. 


```

from web3 import Web3

# initilize 

def getBalance():
    w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545')
    balance = w3.eth.getBalance("0x")
    return balance

```

Ideal but not neccery functionality: all smart contract interactions should go through our vault proxy. so a function such as ERC20.send("0x") would send 10 ERC20 tokens from the vault