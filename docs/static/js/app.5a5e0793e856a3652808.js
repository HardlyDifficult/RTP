webpackJsonp([1],{E6z2:function(t,e){t.exports={log:function(t){console.log("--------------------"),console.log(t.toString()),console.log("--------------------")}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},u,!1,function(t){n("vGjf")},null,null).exports,o=n("/ocq"),i=n("Xxa5"),p=n.n(i),r=n("exGp"),c=n.n(r),l=n("//Fk"),y=n.n(l);"undefined"!=typeof web3&&(web3=new Web3(web3.currentProvider));var m={getBalance:function(){return new y.a(function(t,e){web3.eth.getBalance(web3.eth.defaultAccount,function(n,a){if(n)return e(n);t(a)})})},getBalanceInEth:function(){var t=this;return c()(p.a.mark(function e(){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBalance();case 2:return n=e.sent,e.abrupt("return",web3.fromWei(n,"ether"));case 4:case"end":return e.stop()}},e,t)}))()}},d=web3.eth.contract([{constant:!0,inputs:[],name:"mintingFinished",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_amount",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"totalAmount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"DECIMALS",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"mint",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_address",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"finishMinting",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"baseSupply",outputs:[{name:"initialAmount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"NAME",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"makeTradable",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"SYMBOL",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"vault",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[],name:"MintFinished",type:"event"},{anonymous:!1,inputs:[],name:"TradableTokens",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_amount",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_amount",type:"uint256"}],name:"Approval",type:"event"}]).at("0xc77add231ef94ca78968aa6ce7e4f4474362c544"),f=function(){return new y.a(function(t,e){d.transfer(web3.eth.defaultAccount,1,{value:0,gas:2e3},function(n,a){if(n)return e(n);t(a)})})},b=n("E6z2"),v={name:"HelloWorld",data:function(){return{balance:null,no_metamask:!1}},methods:{test:function(){var t=this;return c()(p.a.mark(function e(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=b,t.next=3,f();case 3:t.t1=t.sent,t.t0.log.call(t.t0,t.t1);case 5:case"end":return t.stop()}},e,t)}))()}},mounted:function(){var t=this;return c()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getBalanceInEth().catch(function(e){t.no_metamask=!0});case 2:t.balance=e.sent;case 3:case"end":return e.stop()}},e,t)}))()}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t.balance?n("h1",[t._v("Hey there, I see you got "+t._s(t._f("eth")(t.balance)))]):t._e(),t._v(" "),t.no_metamask?n("h1",[t._v("Get Metamask and buy ETH. NOW.")]):t._e(),t._v(" "),n("button",{on:{click:function(e){t.test()}}},[t._v("Test")])])},staticRenderFns:[]};var w=n("VU/8")(v,_,!1,function(t){n("lXY3")},"data-v-742afe58",null).exports;a.a.use(o.a);var h=new o.a({routes:[{path:"/",name:"HelloWorld",component:w}]});a.a.config.productionTip=!1,a.a.filter("eth",function(t){return t.toString()+" ETH"}),new a.a({el:"#app",router:h,components:{App:s},template:"<App/>"})},lXY3:function(t,e){},vGjf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5a5e0793e856a3652808.js.map