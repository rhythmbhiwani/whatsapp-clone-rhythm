(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{55:function(e,a,t){e.exports=t(80)},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},73:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(22),l=t.n(r),i=(t(60),t(11)),m=(t(61),t(62),t(106)),s=t(92),o=t(96),u=t(93),d=t(94),E=t(95),p=t(97),h=t(27),b=t(26),g=t.n(b),v=g.a.initializeApp({apiKey:"AIzaSyAu0fGlvLP7qhpWHC5rpuytR_2fRliiVPA",authDomain:"whatsapp-clone-rhythm.firebaseapp.com",databaseURL:"https://whatsapp-clone-rhythm.firebaseio.com",projectId:"whatsapp-clone-rhythm",storageBucket:"whatsapp-clone-rhythm.appspot.com",messagingSenderId:"1070517561603",appId:"1:1070517561603:web:4a3deeb8556d2dd5952136",measurementId:"G-E9DT699RVT"}).firestore(),f=g.a.auth(),O=new g.a.auth.GoogleAuthProvider,j=v;t(73);var N=function(e){var a,t=e.id,r=e.name,l=e.addNewChat,s=Object(n.useState)(""),o=Object(i.a)(s,2),u=o[0],d=o[1],E=Object(n.useState)(""),p=Object(i.a)(E,2),b=p[0],g=p[1];return Object(n.useEffect)((function(){d(t)}),[]),Object(n.useEffect)((function(){t&&j.collection("rooms").doc(t).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){g(e.docs.map((function(e){return e.data()})))}))}),[t]),l?c.a.createElement("div",{onClick:function(){var e=prompt("Please enter name for chat");e&&j.collection("rooms").add({name:e})},className:"sidebarChat"},c.a.createElement("h2",null,"Add new Chat")):c.a.createElement(h.b,{to:"/rooms/".concat(t)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(m.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null,r),c.a.createElement("p",null,null===(a=b[0])||void 0===a?void 0:a.message))))},w=t(31),y=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(y.Provider,{value:Object(n.useReducer)(a,t)},r)},S=function(){return Object(n.useContext)(y)};t(43);var k=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=S(),h=Object(i.a)(l,2),b=h[0].user;return h[1],Object(n.useEffect)((function(){var e=j.collection("rooms").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(m.a,{src:null===b||void 0===b?void 0:b.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(s.a,null,c.a.createElement(u.a,null)),c.a.createElement(s.a,null,c.a.createElement(d.a,null)),c.a.createElement(w.a,{position:"bottom right",contentStyle:{width:"fit-content"},trigger:c.a.createElement(s.a,null,c.a.createElement(E.a,null)),arrow:!1},c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,{style:{width:"150px"}},"New group")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,{style:{width:"150px"}},"Profile")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,{style:{width:"150px"}},"Archived")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,{style:{width:"150px"}},"Starred")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,{style:{width:"150px"}},"Settings")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,{style:{width:"150px"},onClick:function(){return f.signOut()}},"Logout")))))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(p.a,null),c.a.createElement("input",{placeholder:"Search or start a new chat",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(N,{addNewChat:!0}),t.map((function(e){return c.a.createElement(N,{key:e.id,id:e.id,name:e.data.name})}))))},C=t(6),x=t(98),R=t(99),A=t(100),I=t(101),P=t(102),M=t(103),D=t(104),W=t(105),L=t(7);t(78);var T=function(){var e,a,t,r,l,u,d,h=Object(n.useState)(""),b=Object(i.a)(h,2),v=b[0],f=b[1],O=Object(n.useState)(""),N=Object(i.a)(O,2),y=N[0],_=N[1],k=Object(n.useState)(""),T=Object(i.a)(k,2),B=T[0],G=T[1],U=Object(n.useState)([]),V=Object(i.a)(U,2),q=V[0],z=V[1],H=Object(n.useState)(""),J=Object(i.a)(H,2),F=J[0],K=J[1],Q=S(),$=Object(i.a)(Q,2),X=$[0].user,Y=($[1],Object(L.f)().roomId),Z=["#1b262c","#c02739","#30475e","#0f3460","#e43f5a","#202060","#ed6363","#a0204c","#a64942","#ed8d8d"];return Object(n.useEffect)((function(){K(Z[Math.floor(Math.random()*Z.length)]),Y&&j.collection("rooms").doc(Y).onSnapshot((function(e){var a;G(null===(a=e.data())||void 0===a?void 0:a.name),j.collection("rooms").doc(Y).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){z(e.docs.map((function(e){return e.data()})))}))}))}),[Y]),Object(n.useEffect)((function(){f(Y)}),[Y]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(m.a,{src:"https://avatars.dicebear.com/api/human/".concat(v,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,B),q.length>0&&c.a.createElement("p",null,"Last seen at ",new Date(null===(e=q[q.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(s.a,null,c.a.createElement(p.a,null)),c.a.createElement(w.a,{position:"bottom right",contentStyle:{width:"fit-content"},trigger:c.a.createElement(s.a,null,c.a.createElement(E.a,null)),arrow:!1},c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,null,"Contact info")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,null,"Select messages")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,null,"Mute notifications")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,null,"Clear messages")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(o.a,null,"Delete Chat")))))),c.a.createElement("div",{className:"chat__body"},q.map((function(e){var a,t;return c.a.createElement("p",{key:(null===(a=e.timestamp)||void 0===a?void 0:a.toString())+e.name,className:"chat__message ".concat(e.email==X.email&&"chat__reciever")},c.a.createElement("span",{style:{color:F},className:"chat__name"},e.name),c.a.createElement("span",{className:"chat__mainMessage"},e.message),c.a.createElement("span",{className:"chat__timestamp"},function(e){var a=e.getHours(),t=e.getMinutes(),n=a>=12?"PM":"AM";return(a=(a%=12)||12)+":"+(t=t<10?"0"+t:t)+" "+n}(new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()))))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(s.a,null,c.a.createElement(x.a,null)),c.a.createElement(w.a,{position:"top center",contentStyle:{width:"fit-content",backgroundColor:"transparent",padding:"0px",border:"none",boxShadow:"none"},trigger:c.a.createElement(s.a,null,c.a.createElement(R.a,null)),arrow:!1},c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"menu-item"},c.a.createElement(s.a,null,c.a.createElement(A.a,{style:(t={background:"rgb(64,121,236)"},Object(C.a)(t,"background","linear-gradient(180deg, rgba(64,121,236,1) 50%, rgba(57,108,211,1) 50%)"),Object(C.a)(t,"fill","white"),Object(C.a)(t,"padding","15px"),Object(C.a)(t,"borderRadius","100%"),t)}))),c.a.createElement("div",{className:"menu-item"},c.a.createElement(s.a,null,c.a.createElement(I.a,{style:(r={background:"rgb(7,149,220)"},Object(C.a)(r,"background","linear-gradient(180deg, rgba(7,149,220,1) 50%, rgba(14,171,244,1) 50%)"),Object(C.a)(r,"fill","white"),Object(C.a)(r,"padding","15px"),Object(C.a)(r,"borderRadius","100%"),r)}))),c.a.createElement("div",{className:"menu-item"},c.a.createElement(s.a,null,c.a.createElement(P.a,{style:(l={background:"rgb(81,87,174)"},Object(C.a)(l,"background","linear-gradient(180deg, rgba(81,87,174,1) 50%, rgba(95,102,205,1) 50%)"),Object(C.a)(l,"fill","white"),Object(C.a)(l,"padding","15px"),Object(C.a)(l,"borderRadius","100%"),l)}))),c.a.createElement("div",{className:"menu-item"},c.a.createElement(s.a,null,c.a.createElement(M.a,{style:(u={background:"rgb(211,57,109)"},Object(C.a)(u,"background","linear-gradient(180deg, rgba(211,57,109,1) 50%, rgba(236,64,122,1) 50%)"),Object(C.a)(u,"fill","white"),Object(C.a)(u,"padding","15px"),Object(C.a)(u,"borderRadius","100%"),u)}))),c.a.createElement("div",{className:"menu-item"},c.a.createElement(s.a,null,c.a.createElement(D.a,{style:(d={background:"rgb(172,68,207)"},Object(C.a)(d,"background","linear-gradient(180deg, rgba(172,68,207,1) 50%, rgba(191,89,207,1) 50%)"),Object(C.a)(d,"fill","white"),Object(C.a)(d,"padding","15px"),Object(C.a)(d,"borderRadius","100%"),d)}))))),c.a.createElement("form",null,c.a.createElement("input",{rows:"1",value:y,onChange:function(e){return _(e.target.value)},type:"text",placeholder:"Type a message"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),""!=y.trim()&&j.collection("rooms").doc(Y).collection("messages").add({name:X.displayName,email:X.email,timestamp:g.a.firestore.FieldValue.serverTimestamp(),message:y}),_("")},type:"submit"},"Submit")),c.a.createElement(s.a,null,c.a.createElement(W.a,null))))},B=(t(79),t(39)),G="SET_USER",U=function(e,a){switch(console.log(a),a.type){case G:return Object(B.a)(Object(B.a)({},e),{},{user:a.user});default:return e}};var V=function(){var e=S(),a=Object(i.a)(e,2),t=a[0].user,r=a[1];return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){r({type:G,user:e})}))}),[t]),c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:"WhatsApp Logo"}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Sign in to WhatsApp")),c.a.createElement(o.a,{onClick:function(){f.signInWithPopup(O).then((function(e){return r({type:G,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In With Google")))},q=t(47);var z=function(){return c.a.createElement("div",null,"Please Open this on a PC")};var H=function(){var e=S(),a=Object(i.a)(e,2),t=a[0].user;return a[1],Object(q.useMediaQuery)({query:"(max-width: 750px)"})?c.a.createElement(z,null):c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(h.a,{basename:"/"},c.a.createElement(k,null),c.a.createElement(L.c,null,c.a.createElement(L.a,{path:"/rooms/:roomId"},c.a.createElement(T,null)),c.a.createElement(L.a,{path:"/"})))):c.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{user:null},reducer:U},c.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.b9f9dc84.chunk.js.map