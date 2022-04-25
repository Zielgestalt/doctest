---
title: Vault
description: ''
position: 8
category: 'Features'
---

A Yieldster vault listed on the automation platform must implement the following function. The vault classes exposes the appropriate http portal to each function call. For example  "/vault/<id>/deposit" will call the deposit function in the class myVault. 

```

from Yieldster.vault import VaultClass

class myVault(VaultClass):

    withdrawalAssets = [{token:chain}]
    depositAssets = [{token:chain}]
    whiteList = [{address:chain}]

    def deposit(address, amount):
        pass

    def withdrawal(address, amount):
        pass

    def swap():
        pass

    def addWhiteList(address):
        pass

    def removeWhiteList(address):
        pass
    
    isWhitelist(address):
        pass

```

- withdrawalAssets
    - a list of token addresses and their corresponding chain 
- depositAssets
    - a list of token addresses and their corresponding chain 
- whiteList
    - a list of addresses and their corresponding chain 
- deposit
    - returns a bytecode that can be executed by metamask 
- withdrawal
    - returns a bytecode that can be executed by metamask 
    - Alternatively white list group can be added 

```

from Yieldster.vault import vaultClass
from Yieldster.whitelist import accreditedInvestor

class myVault(vaultClass):
    
    isWhitelist(address):
        return accreditedInvestor[address]

```

The following are static variables of the vault

```

from Yieldster.vault import vaultClass

class myVault(vaultClass):

    self.address
    self.address.chainName 
    self.NAV

```

- self.address:
    - An array/object of the vaults addresses on all chains approved by the APS
- self.address.chainName
    - An object with vault address and its corresponding chain
- self.NAV
    - the total value of all assets held in the vault
