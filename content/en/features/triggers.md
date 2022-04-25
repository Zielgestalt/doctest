---
title: Triggers
description: ''
position: 6
category: 'Features'
---

Simple time schedule

```

from Yieldster.triggers import timeSchedule

# Entry function for the SDK
def initilize():
    timeSchedule(rebalance, "Monthly", offSet = 1) # first of every month

def rebalance():
    pass

```

Each vault would also be able to subscribe to web3 events. These events may be events on the vault itself or other smart contracts.

```

from Yieldster.triggers import webRequest, web3Event

def initilize():
    web3Event(depositOnChain, address = '0x', event="deposit(address user, uint amount)")

def depositOnChain(event):
    deposit(event.user, event.amount)

```

Since an http portal must be opened for each vault, we should also allow users to recive web request. In this way we are able to build fully fleged applications on top of the automation platform. 

```

from Yieldster.triggers import webRequest, web3Event

def initilize():
    webRequest(depositDelayed, url = "/deposit")

def depositDeplayed(request):
    deposit(request.user, request.amount)


```

Custom triggers can be created by the community and placed on the marketplace. Each trigger will be running in its own proccess. A vault will subscribe it by calling its function through the triggers library. A trigger is unsubscribed when the advisor shuts down, updates or if it does not respond to the trigger after a timeout period.

```

from Yieldster.triggers import priceDrop
from Yieldster.tokens import ETH

def initilize():
    priceDrop(marginCall, ETH, 0.3)

def marginCall():
    pass

```
