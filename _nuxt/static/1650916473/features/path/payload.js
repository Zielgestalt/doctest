__NUXT_JSONP__("/features/path", (function(a,b,c,d,e){return {data:[{document:{slug:"path",description:"",title:"Path",position:7,category:"Features",toc:[],body:{type:"root",children:[{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"from Yieldster.path import pathClass\n\nclass myPath(pathClass):\n    def execute(sendToken, receiveToken):\n        # stuff\n        # returns EVM bytecode\n        return transactionPlan \n\n    def quote(sendToken, receiveToken):\n        return 1\n    \n    self.sendTokens = []\n    self.receiveTokens = []\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The code above is the template for a path."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"execute is a simple function that takes in one tokens and returns the EVM bytecode on how that can be converted to anther token."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"quote will provide the estimated price range for how much receiveTokens can be expected."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The list of which tokens can be sent and received is registered in the database to be used by the order balancer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If the path takes advantage of a centralized exchange then the path will purchase the token on the exchange and place them on the blockchain to be withdrawn by the order balancer."}]}]},dir:"\u002Fen\u002Ffeatures",path:"\u002Fen\u002Ffeatures\u002Fpath",extension:".md",createdAt:e,updatedAt:e,to:"\u002Ffeatures\u002Fpath"},prev:{title:"Triggers",path:"\u002Fen\u002Ffeatures\u002Ftriggers",to:"\u002Ffeatures\u002Ftriggers"},next:{title:"Vault",path:"\u002Fen\u002Ffeatures\u002Fvault",to:"\u002Ffeatures\u002Fvault"}}],fetch:{},mutations:[]}}("text","element","\n","p","2022-04-25T19:53:41.340Z")));