---
title: Command Line
description: ''
position: 16
category: 'Features'
---

Advisor developers should be able to upload their advisors via the command line. The question is whether we should allow them to upload multiple files via a zip folder, with one file as the entry file or only allow them to upload one file which contains the entire logic. 

```

$ Yieldster upload file.py

$ Yieldster upload folder.zip

```

Users should also be able to set secret keys which they will then be able to use later in the SDK.

```

$ Yieldster upload file.py

$ Yieldster upload folder.zip

```


To test their advisors, exposes the functions on a local host. All of the Yieldster Backend functions would all still remain functional, but we would provide them with a port that simulates rather than executions the order balancer calls.

```

Yieldster run file.py


```


Every sdk has a smart contract. It is either our vault or their custom smart contract. Their smart contract should implement the deposit and withdrawal function, some form of token transformation.

Question for developers:
- Should we limit external ULR request?
- How can the users test the app in their own enviroment. 
- Key value store vs relational database. Allow them to set their own database
- Yieldster.finance should be created as any other Advisor
- Should they have to initilize data sources they are going to use?

Token Documentation: 

We need data helper functions. Pass in data as class with raw data and helper functions 