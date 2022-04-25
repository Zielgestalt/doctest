---
title: Lending
description: ''
position: 5
category: 'Features'
---

AAVE is a lending platform. You can deposit and withdraw collateral, and against those collateral borrow assets or lend assets.

```
balancer(toAddres = {"Aave": "any"}, fromToken = {"USDC": 100}) 
```

The above code does one of two actions depending on the state of the lending protocol:
- Deposits 100 USDC into AAVE. Keep in mind that funds deposited into AAVE are automatically lent out.
- Pay back loan If the user had borrowed 100 USDC

```
balancer(fromAddress = {"Aave": "any"}, fromToken = {"ETH": 0.3}) 
```

The above code will take one of two actions depending on the state of the lending protocol:
- Withdraw 100 USDC if fund are available
- Borrow 100 USDC if no fund are available


```
balancer(toAddress = {"Aave": "any"}, fromToken = {"USDC": 100}, toToken = {"ETH": 0.3}) 
```

Consider the above code. Assume we are in a state where no deposits or loans exist. This code will first deposit 100USDC into AAVE and then borrow 0.3 ETH

```
balancer(toAddres = {"Aave": "any"}, fromToken = {"USDC": 100}) 

balancer(fromAddress = {"Aave": "any"}, fromToken = {"ETH": 0.3}) 
```

Alternatively these two transactions can be chain together.



```

balancer.Aave.deposit("USDC", 100, PositionObject ) // PositionObject is 7 lines below

balancer.Aave.deposit("USDC", 100) // automatically selects Aave V2 on mainnet

balancer.Aave.withdraw("ETH", 0.3, PositionObject) 

balancer.Aave.withdraw("ETH", 0.3) 

balancer.Aave.positions() -> [
    { // this is a PositionObject
        "vaultId": 1, 
        "chain": "polygon",  
        "assets": [
            {"USDC": 100}
        ], 
        "debts": [
            {"ETH": 0.3}
        ], 
        "margin": 30%
    }
] 

```

An easier syntax might be the code above