(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5402],{15402:function(e,n,r){"use strict";function t(e,n,r,t,a,u,c){try{var i=e[u](c),s=i.value}catch(o){return void r(o)}i.done?n(s):Promise.resolve(s).then(t,a)}function a(e){return function(){var n=this,r=arguments;return new Promise((function(a,u){var c=e.apply(n,r);function i(e){t(c,a,u,i,s,"next",e)}function s(e){t(c,a,u,i,s,"throw",e)}i(void 0)}))}}r.r(n);function u(e){return c.apply(this,arguments)}function c(){return(c=a(regeneratorRuntime.mark((function e(n){var t,u,c,i,s,o,p,l,f,A,g,w,h,d,m,x,v,b,k,y,R,C,L,X,B,P,D,N,J,q,M,O,T,S,V,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j=function(){return(j=a(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==m.length){e.next=3;break}return e.next=3,L();case 3:return e.prev=3,e.next=6,h.signPersonalMessage(m[0],n.data);case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)},V=function(e){return j.apply(this,arguments)},S=function(){return(S=a(regeneratorRuntime.mark((function e(n){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==m.length){e.next=3;break}return e.next=3,L();case 3:return r=new c.Transaction(n,{chain:g(p)}),e.prev=4,e.next=7,h.signTransaction(m[0],r);case 7:return t=e.sent,e.abrupt("return","0x".concat(t.serialize().toString("hex")));case 11:throw e.prev=11,e.t0=e.catch(4),e.t0;case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)},T=function(e){return S.apply(this,arguments)},O=function(e){return new Promise((function(n,r){b.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,t){e&&r(e);var a=t&&t.result;n(null!=a?new A(a).toString(10):null)}))}))},M=function(e){return Promise.all(e.map((function(e){return new Promise(function(){var n=a(regeneratorRuntime.mark((function n(r){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(e);case 2:t=n.sent,r({address:e,balance:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})))},q=function(){return(q=a(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}return e.abrupt("return",[]);case 2:if(!(m.length>0)||n){e.next=4;break}return e.abrupt("return",m);case 4:return e.prev=4,e.next=7,h.addAccounts();case 7:m=e.sent,e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(4),e.t0;case 13:return e.abrupt("return",m);case 14:case"end":return e.stop()}}),e,null,[[4,10]])})))).apply(this,arguments)},J=function(e){return q.apply(this,arguments)},N=function(){return(N=a(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Lattice only supports one exported account per wallet. Checking for new wallet.",console.warn("Lattice only supports one exported account per wallet. Checking for new wallet."),e.next=4,J(!0);case 4:return n=e.sent,e.abrupt("return",n&&M(n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},D=function(){return N.apply(this,arguments)},P=function(){return x?X()[0]:void 0},B=function(){},X=function(){return m},L=function(){return x=!0,J()},C=function(){return v},R=function(){return(R=a(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===o){e.next=2;break}throw new Error("Lattice only supports standard path: m/44'/0'/0'/0/x");case 2:return v=!1,d=n,e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},y=function(e){return R.apply(this,arguments)},k=function(){d="",x=!1,b.stop()},e.next=20,Promise.all([r.e(9351),r.e(1094),r.e(2480),r.e(3038)]).then(r.t.bind(r,2480,23));case 20:return t=e.sent,u=t.default,e.next=24,Promise.all([r.e(9351),r.e(9332),r.e(3342)]).then(r.bind(r,59332));case 24:return c=e.sent,e.next=27,Promise.all([r.e(9351),r.e(8142),r.e(8090),r.e(795),r.e(9835),r.e(8850),r.e(4891)]).then(r.bind(r,78850));case 27:return i=e.sent,s=i.default,o="m/44'/60'/0'/0",p=n.networkId,l=n.appName,f=n.rpcUrl,A=n.BigNumber,g=n.networkName,w={name:l,network:g(p)},h=new u(w),d="",m=Array.from([]),x=!1,v=!1,(b=s({getAccounts:function(e){J().then((function(n){return e(null,n)})).catch((function(n){return e(n,null)}))},signTransaction:function(e,n){T(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},processMessage:function(e,n){V(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},processPersonalMessage:function(e,n){V(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},signMessage:function(e,n){V(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},signPersonalMessage:function(e,n){V(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},rpcUrl:f})).setPath=y,b.dPath=d,b.enable=L,b.setPrimaryAccount=B,b.getPrimaryAddress=P,b.getAccounts=J,b.getMoreAccounts=D,b.getBalance=O,b.getBalances=M,b.send=b.sendAsync,b.disconnect=k,b.isCustomPath=C,e.abrupt("return",b);case 51:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.default=function(e){var n=e.appName,r=e.rpcUrl,t=e.networkId,c=e.preferred,i=e.label,s=e.iconSrc;return{name:i||"Lattice",svg:e.svg||'\n  <svg width="41px" height="41px" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">\n  \x3c!-- Generated by Pixelmator Pro 1.8 --\x3e\n  <defs>\n    <image id="image" width="41px" height="41px" xlink:href="data:image/png;base64,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"/>\n  </defs>\n  <use id="image-1" xlink:href="#image" x="0px" y="0px" width="41px" height="41px"/>\n  </svg>\n',iconSrc:s,wallet:function(){var e=a(regeneratorRuntime.mark((function e(c){var i,s,o,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.BigNumber,s=c.networkName,o=c.resetWalletState,e.next=3,u({appName:n,rpcUrl:r,networkId:t,BigNumber:i,networkName:s,resetWalletState:o});case 3:return p=e.sent,e.abrupt("return",{provider:p,interface:{name:"Lattice",connect:p.enable,disconnect:p.disconnect,address:{get:function(){var e=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=a(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.getPrimaryAddress(),e.abrupt("return",n&&p.getBalance(n));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:c}}}}]);