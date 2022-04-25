---
title: Data
description: ''
position: 9
category: 'Features'
---

The data is always pulled

Have data price split and dividend adjusted, fill forward stale date

```

from Yieldster.data import priceCurrent 

# initilize ...

def rebalance():
    if priceCurrent.ETH() > 2000:
        # buy
    else:
        # sell

```
A series of prices

```

from Yieldster.data import priceSeries

# initilize ...

def rebalance():
    # returns pandas dataframe 
    priceETH =  priceSeries.ETH(timePeriod = "daily") 
    if priceETH[-1] > priceETH[-7]:
        # sell

```

All data in the Yieldster.data class is returned as a pandas object. The class would make a request to the database to get the information required.
