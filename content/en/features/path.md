---
title: Path
description: ''
position: 7
category: 'Features'
---


```

from Yieldster.path import pathClass

class myPath(pathClass):
    def execute(sendToken, receiveToken):
        # stuff
        # returns EVM bytecode
        return transactionPlan 

    def quote(sendToken, receiveToken):
        return 1
    
    self.sendTokens = []
    self.receiveTokens = []

```

The code above is the template for a path. 

execute is a simple function that takes in one tokens and returns the EVM bytecode on how that can be converted to anther token. 

quote will provide the estimated price range for how much receiveTokens can be expected.

The list of which tokens can be sent and received is registered in the database to be used by the order balancer.

If the path takes advantage of a centralized exchange then the path will purchase the token on the exchange and place them on the blockchain to be withdrawn by the order balancer. 
