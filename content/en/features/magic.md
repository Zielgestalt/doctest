---
title: Magic
description: ''
position: 1
category: 'Features'
---

The magic function is key to the SDK's ease of use of. Users should be able to interact with any DeFi protocol without knowing the specific interface of that protocol. The users focus should only be on the tokens.

## Basic Call

The result of this call can be a swap, deposit, withdrawal, lend, borrow or stake depending on the path and path restrictions.

```

from Yieldster import balancer, protocol

numberOfReturnTokens = balancer([{fromAddress: fromChain}], 
            [{sendToken: sendAmount}], 
            [{toAddress: toChain}], 
            [{receiveToken" receiveAmount}], 
            path = protocol.orderBalancer
            residual = min/max, 
            **kwargs) 

```

## fromAddress / fromChain: 
- The address which the tokens are either held in or where the transaction tokens originate from, the fromAddress can be a Yieldster vault or a wallet address on a specific chain
- If ommited the from address is any vault or address on any chain that is the most cost effective. For example borrowing can be done on Aave's mainnet or polygon chain

## fromToken / fromAmount: 
- Name of the token should be autocompleted, and have description of the token in the comments
- If name is not available then ERC20 token address should work as well.

## Path:
- Path restriction that should be taken. Command such as "OrderBalancer", "None", "AAVE".
- If ommited then the path will be the OrderBalancer

## residual
- With min, minimizing the number of sendTokens sent, and recieve the exact number of receiveTokens, 
- With max, maximize receiveTokens, while sending all of the send tokens

## ** config: 
future extendible options, passed in as python kwargs 

## numberOfReturnTokens
- an array with objects of tokens, and the number of that token which was returned.