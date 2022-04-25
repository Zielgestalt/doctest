__NUXT_JSONP__("/features/web3-py", (function(a,b,c,d,e){return {data:[{document:{slug:"web3-py",description:"",title:"web3.py",position:12,category:"Features",toc:[],body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Users should be able to call the blockchain without having to go through our order balancer. For this porpose, we expose the web3 python library to the user so they can directly call smart contracts."}]},{type:b,value:d},{type:a,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:a,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:a,tag:"code",props:{},children:[{type:b,value:"from web3 import Web3\n\n# initilize \n\ndef getBalance():\n    w3 = Web3(Web3.HTTPProvider('http:\u002F\u002F127.0.0.1:8545')\n    balance = w3.eth.getBalance(\"0x\")\n    return balance\n\n"}]}]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Ideal but not neccery functionality: all smart contract interactions should go through our vault proxy. so a function such as ERC20.send(\"0x\") would send 10 ERC20 tokens from the vault"}]}]},dir:"\u002Fen\u002Ffeatures",path:"\u002Fen\u002Ffeatures\u002Fweb3-py",extension:".md",createdAt:e,updatedAt:e,to:"\u002Ffeatures\u002Fweb3-py"},prev:{title:"Secret Keys",path:"\u002Fen\u002Ffeatures\u002Fsecret-keys",to:"\u002Ffeatures\u002Fsecret-keys"},next:{title:"Logging & Testing",path:"\u002Fen\u002Ffeatures\u002Flogging",to:"\u002Ffeatures\u002Flogging"}}],fetch:{},mutations:[]}}("element","text","p","\n","2022-04-25T19:53:41.340Z")));