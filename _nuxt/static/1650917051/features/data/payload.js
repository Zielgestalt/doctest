__NUXT_JSONP__("/features/data", (function(a,b,c,d,e,f,g,h,i,j,k){return {data:[{document:{slug:"data",description:"",title:"Data",position:9,category:"Features",toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"The data is always pulled"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Have data price split and dividend adjusted, fill forward stale date"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"from Yieldster.data import priceCurrent \n\n# initilize ...\n\ndef rebalance():\n    if priceCurrent.ETH() \u003E 2000:\n        # buy\n    else:\n        # sell\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A series of prices"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"from Yieldster.data import priceSeries\n\n# initilize ...\n\ndef rebalance():\n    # returns pandas dataframe \n    priceETH =  priceSeries.ETH(timePeriod = \"daily\") \n    if priceETH[-1] \u003E priceETH[-7]:\n        # sell\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All data in the Yieldster.data class is returned as a pandas object. The class would make a request to the database to get the information required."}]}]},dir:"\u002Fen\u002Ffeatures",path:"\u002Fen\u002Ffeatures\u002Fdata",extension:".md",createdAt:k,updatedAt:k,to:"\u002Ffeatures\u002Fdata"},prev:{title:"Vault",path:"\u002Fen\u002Ffeatures\u002Fvault",to:"\u002Ffeatures\u002Fvault"},next:{title:"Database",path:"\u002Fen\u002Ffeatures\u002Fdatabase",to:"\u002Ffeatures\u002Fdatabase"}}],fetch:{},mutations:[]}}("text","element","\n","p","div","nuxt-content-highlight","pre","language-text","line-numbers","code","2022-04-25T20:03:21.660Z")));