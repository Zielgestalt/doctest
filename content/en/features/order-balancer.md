---
title: Order balancer
description: ''
position: 2
category: 'Features'
---

Lorem ipsum

## function call and min/max

The following code calls order balancer function. 

```

balancer(sendTokens = {"USDC": 100}, receiveTokens = {"ETH": 0.3})

```

The code below is equivalent to the code above.

``` 

balancer({"self": "Ethereum"}, 
            {"self": "Ethereum"}, 
            {"USDC": 100}, 
            {"ETH": 0.3}, 
            path = protocol.orderBalancer, 
            residual = min) 

```

This function call is automatically categorized as a swap function because the fromAddress and toAddress are both address of the vault. Although the order balancer itself may take actions such as borrow, stake and other to achive the end result.

The "min" command minimizes the number of sendTokens sold, until 0.3 ETH is reached. While with the "max" command all of USDC would be sold to get the greatest amount of ETH. In this scenario the order balancer will minimize the number of USDC/DAI liquidated to purchase exactly 0.3 ETH. 

Number of receiveTokens serves as a limit order. If 0.3 ETH cannot be purchased then the transaction will fail. To make this order similar to a market order it should have a max residual with ETH amount set to 0. (more on this later)


``` 
balancer(sendTokens = [{"USDC": 100}, {"DAI": 50}], 
            receiveTokens = [{"ETH": 0.3}, {"MKR": 3}], 
            min) 
```

The code above shows that multiple tokens can be swapped for multiple tokens. The advantage of this is it provides us with an exponential number of arbitrauge oppertunities when executing the order.

The min command purchases the exact number of sendTokens while the amount of receiveTokens liquidated is minimized. While the max command liquidates all of the fromTokens and purchases as many toTokens as possible.

With the min command, the liquidation will be in proportion to the ratio of USDC/DAI, for every 1 DAI we will liquidate 2 USDC. The ratio of the residual will also be 2:1, i.e. 10 USDC to 5 DAI left after the transaction is complete. 

With the max command, if there is excess purchasing power tokens will be in the ratio of 10:1, i.e. 0.33ETH to 3.3 MKR or 0.6 ETH to 6 MKR.

## Object oriented

The prefered way to call the order balancer is to pass in objects created by Yieldster. This way the developer will be assisted with autocomplete and ensure that they do not type in the wrong token name.

Take the following example

```

balancer([{"0x": "Ethereum", "0x": "Polygon"}, 
            [{"0x": "Ethereum", "0x": "Polygon}, 
            {"USDC": 100}, 
            {"USDC": 100}, 
            path="orderBalancer", 
            min) 

```

The alternative would be below using objects.

```

balancer([self.address.ethereum, self.address.polygon], 
            [self.address.ethereum, self.address.polygon], 
            {token.USDC: 100}, 
            {token.USDC: 100}, 
            path=protocol.orderBalancer, 
            min) 

```
