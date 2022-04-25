---
title: Database
description: ''
position: 10
category: 'Features'
---

The Key value store records python dictionaries 

recording items

```

from Yieldster.store import get, set

## initialize

def deposit(user, amount):
    balance = get(user + ":balance")
    set(user, balance + amount)

```

Editing the key value store

```

from Yieldster.triggers import webrequest
from Yieldster.store import get, set

def initilize():
    webrequest(depositdelayed, url = "/edit")

def editsore(request):
    set(request.key, request.value) 

```