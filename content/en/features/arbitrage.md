---
title: Arbitrage
description: ''
position: 4
category: 'Features'
---

``` 

balancer({"self": "Polygon"}, 
            {"0x": "Polygon"}, 
            {"USDC": 100})

```

The code above sends 100 USDC to another address on the polygon network. During this transfer the orderbalancer will take advantage of arbigrauge oppertunities if one exist. This will reduce the amount of funds withdrawn from the wallet.


``` 

balancer({"self": "Polygon"}, 
            {"self": "Polygon"}, 
            {"USDC": 100}, 
            {"USDC": 100}, 
            path="orderBalancer", 
            min) 

```

As in the code above takes advantage of arbitrage opportunities within a vault.

``` 

balancer([{"self": "Ethereum", "self": "Polygon"}, 
            [{"self": "Ethereum", "self": "Polygon}, 
            {"USDC": 100}, 
            {"USDC": 100}, 
            path="orderBalancer", 
            max) 

```

The above code takes advantage of arbitrage opportunities between different chain. With fromAddress and toAddress set to self and fromChain and toChain set as the same value. This might be for a use who is a long term investor and is agnostic to where the assets are held in the short term.


``` 

from Yieldster import transfer

transfer([{"self": "Ethereum", "self": "Polygon"}, 
            [{"0x": "Ethereum", "0x": "Polygon}, 
            {"USDC": 100}, 
            {"USDC": 100}, 
            min)

```

An alternative syntax is the code above
