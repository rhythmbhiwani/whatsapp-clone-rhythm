(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{51:function(e,a,t){e.exports=t(76)},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},69:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t.n(r),o=(t(56),t(9)),s=(t(57),t(58),t(97)),i=t(88),m=t(89),u=t(90),d=t(91),h=t(92),p=t(26),E=t(25),f=t.n(E),v=f.a.initializeApp({apiKey:"AIzaSyAu0fGlvLP7qhpWHC5rpuytR_2fRliiVPA",authDomain:"whatsapp-clone-rhythm.firebaseapp.com",databaseURL:"https://whatsapp-clone-rhythm.firebaseio.com",projectId:"whatsapp-clone-rhythm",storageBucket:"whatsapp-clone-rhythm.appspot.com",messagingSenderId:"1070517561603",appId:"1:1070517561603:web:4a3deeb8556d2dd5952136",measurementId:"G-E9DT699RVT"}).firestore(),b=f.a.auth(),g=new f.a.auth.GoogleAuthProvider,_=v;t(69);var j=function(e){var a,t=e.id,r=e.name,l=e.addNewChat,i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1],h=Object(n.useState)(""),E=Object(o.a)(h,2),f=E[0],v=E[1];return Object(n.useEffect)((function(){d(t)}),[]),Object(n.useEffect)((function(){t&&_.collection("rooms").doc(t).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){v(e.docs.map((function(e){return e.data()})))}))}),[t]),l?c.a.createElement("div",{onClick:function(){var e=prompt("Please enter name for chat");e&&_.collection("rooms").add({name:e})},className:"sidebarChat"},c.a.createElement("h2",null,"Add new Chat")):c.a.createElement(p.b,{to:"/rooms/".concat(t)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null,r),c.a.createElement("p",null,null===(a=f[0])||void 0===a?void 0:a.message))))},O=Object(n.createContext)(),N=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(O.Provider,{value:Object(n.useReducer)(a,t)},r)},w=function(){return Object(n.useContext)(O)};var S=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=w(),p=Object(o.a)(l,2),E=p[0].user;return p[1],Object(n.useEffect)((function(){var e=_.collection("rooms").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===E||void 0===E?void 0:E.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(i.a,null,c.a.createElement(m.a,null)),c.a.createElement(i.a,null,c.a.createElement(u.a,null)),c.a.createElement(i.a,{onClick:function(){return b.signOut()}},c.a.createElement(d.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(h.a,null),c.a.createElement("input",{placeholder:"Search or start a new chat",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(j,{addNewChat:!0}),t.map((function(e){return c.a.createElement(j,{key:e.id,id:e.id,name:e.data.name})}))))},y=t(93),C=t(94),k=t(95),A=t(5);t(74);var I=function(){var e,a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],m=r[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),E=p[0],v=p[1],b=Object(n.useState)(""),g=Object(o.a)(b,2),j=g[0],O=g[1],N=Object(n.useState)([]),S=Object(o.a)(N,2),I=S[0],R=S[1],W=Object(n.useState)(""),D=Object(o.a)(W,2),M=D[0],P=D[1],x=w(),T=Object(o.a)(x,2),B=T[0].user,L=(T[1],Object(A.f)().roomId),G=["#1b262c","#c02739","#30475e","#0f3460","#e43f5a","#202060","#ed6363","#a0204c","#a64942","#ed8d8d"];return Object(n.useEffect)((function(){P(G[Math.floor(Math.random()*G.length)]),L&&_.collection("rooms").doc(L).onSnapshot((function(e){var a;O(null===(a=e.data())||void 0===a?void 0:a.name),_.collection("rooms").doc(L).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){R(e.docs.map((function(e){return e.data()})))}))}))}),[L]),Object(n.useEffect)((function(){m(L)}),[L]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,j),I.length>0&&c.a.createElement("p",null,"Last seen at ",new Date(null===(e=I[I.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(i.a,null,c.a.createElement(h.a,null)),c.a.createElement(i.a,null,c.a.createElement(d.a,null)))),c.a.createElement("div",{className:"chat__body"},I.map((function(e){var a,t;return c.a.createElement("p",{key:(null===(a=e.timestamp)||void 0===a?void 0:a.toString())+e.name,className:"chat__message ".concat(e.email==B.email&&"chat__reciever")},c.a.createElement("span",{style:{color:M},className:"chat__name"},e.name),c.a.createElement("span",{className:"chat__mainMessage"},e.message),c.a.createElement("span",{className:"chat__timestamp"},function(e){var a=e.getHours(),t=e.getMinutes(),n=a>=12?"PM":"AM";return(a=(a%=12)||12)+":"+(t=t<10?"0"+t:t)+" "+n}(new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()))))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(i.a,null,c.a.createElement(y.a,null)),c.a.createElement(i.a,null,c.a.createElement(C.a,null)),c.a.createElement("form",null,c.a.createElement("input",{rows:"1",value:E,onChange:function(e){return v(e.target.value)},type:"text",placeholder:"Type a message"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),""!=E.trim()&&_.collection("rooms").doc(L).collection("messages").add({name:B.displayName,email:B.email,timestamp:f.a.firestore.FieldValue.serverTimestamp(),message:E}),v("")},type:"submit"},"Submit")),c.a.createElement(i.a,null,c.a.createElement(k.a,null))))},R=t(96),W=(t(75),t(37)),D="SET_USER",M=function(e,a){switch(console.log(a),a.type){case D:return Object(W.a)(Object(W.a)({},e),{},{user:a.user});default:return e}};var P=function(){var e=w(),a=Object(o.a)(e,2),t=a[0].user,r=a[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){r({type:D,user:e})}))}),[t]),c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:"WhatsApp Logo"}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Sign in to WhatsApp")),c.a.createElement(R.a,{onClick:function(){b.signInWithPopup(g).then((function(e){return r({type:D,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In With Google")))};var x=function(){var e=w(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(p.a,{basename:"/"},c.a.createElement(S,null),c.a.createElement(A.c,null,c.a.createElement(A.a,{path:"/rooms/:roomId"},c.a.createElement(I,null)),c.a.createElement(A.a,{path:"/"})))):c.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,{initialState:{user:null},reducer:M},c.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.72368a40.chunk.js.map