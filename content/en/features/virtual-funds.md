---
title: Virtual funds
description: ''
position: 3
category: 'Features'
---

An alternative way is to buy and sell against a virtual funds. The advantage of using this system is that it works well with many developers and quants are already familiar with the traditional limit orders. Having them convert over their logic to that of the order balancer can be a challange.

In this scenerio the excess value is kept in form of the sell assets and not in USD or ETH. this similar to the min command, the excess value will be in proportion to the number of tokens sold. 

Consider the following exmaple:

```

from Yieldster import order

order.sell("USDC", 100) 

order.sell("USDT", 300) 

order.buy("ETH", 0.3, chain.polygon) // market order

```

It will have an equavilient execution as the code below

```

balancer({"self": "ethereum"}, 
            {"self": "polygon"}, 
            [{"USDC": 100}, {"USDT": 300}],
            {"ETH": 0.3}, 
            path="orderBalancer", 
            min) 

```

unlike with the balancer, if the 


With the virtual dollar a limit price can also be placed, this is so the entire order is not fulfilled if the price is beyond the limit price.

```

order.sell("DAI", 600, limit = 0.99, chain.polygon) // limit order

order.buy("ETH", 0.2, limit = 3000, chain.polygon) // limit order

```
