(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t){},134:function(e,t){},151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(9),i=a.n(c),r=a(22),l=a(192),s=a(187),o=a(182),d=a(185),j=a(153),u=a(19),b=a(85),m=a(57),x=a.n(m),p=a(4),O=Object(n.createContext)(),f=Object(b.io)("https://video-chat-aparsh.herokuapp.com/"),h=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(u.a)(a,2),i=c[0],r=c[1],l=Object(n.useState)(""),s=Object(u.a)(l,2),o=s[0],d=s[1],j=Object(n.useState)(""),b=Object(u.a)(j,2),m=b[0],h=b[1],g=Object(n.useState)(null),v=Object(u.a)(g,2),C=v[0],w=v[1],y=Object(n.useState)(!1),N=Object(u.a)(y,2),k=N[0],I=N[1],S=Object(n.useState)(!1),D=Object(u.a)(S,2),A=D[0],B=D[1],R=Object(n.useRef)(),V=Object(n.useRef)(),E=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){r(e),R.current.srcObject=e})),f.on("me",(function(e){d(e)})),f.on("callUser",(function(e){var t=e.from,a=e.name,n=e.signal;w({isReceivedCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(p.jsx)(O.Provider,{value:{call:C,callAccepted:k,myVideo:R,userVideo:V,stream:i,name:m,setName:h,callEnded:A,me:o,answerCall:function(){I(!0);var e=new x.a({initiator:!1,trickle:!1,stream:i});e.on("signal",(function(e){f.emit("answerCall",{signal:e,to:C.from})})),e.on("stream",(function(e){V.current.srcObject=e})),e.signal(C.signal),E.current=e},callUser:function(e){var t=new x.a({initiator:!0,trickle:!1,stream:i});t.on("signal",(function(t){f.emit("callUser",{userToCall:e,signal:t,from:o,name:m})})),t.on("stream",(function(e){V.current.srcObject=e})),f.on("callAccepted",(function(e){I(!0),console.log(e),t.signal(e)})),E.current=t},leaveCall:function(){B(!0),E.current.destroy(),window.location.reload()}},children:t})},g=Object(o.a)((function(e){return{video:Object(r.a)({width:"550px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(r.a)({flexDirection:"row",justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",border:"2px solid black",margin:"10px"}}})),v=function(){var e=Object(n.useContext)(O),t=e.name,a=e.callAccepted,c=e.myVideo,i=e.userVideo,r=e.callEnded,l=e.stream,o=e.call,u=g();return Object(p.jsxs)(d.a,{className:u.gridContainer,children:[l&&Object(p.jsx)(j.a,{className:u.paper,children:Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(p.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:t||"Name"}),Object(p.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:u.video})]})}),a&&!r&&Object(p.jsx)(j.a,{className:u.paper,children:Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(p.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:o.name||"Name"}),Object(p.jsx)("video",{playsInline:!0,ref:i,autoPlay:!0,className:u.video})]})})]})},C=a(194),w=function(){var e=Object(n.useContext)(O),t=e.answerCall,a=e.call,c=e.callAccepted;return Object(p.jsx)(p.Fragment,{children:a&&a.isReceivedCall&&!c&&Object(p.jsxs)("div",{styles:{display:"flex",justifyContent:"center"},children:[console.log(a),Object(p.jsxs)("h1",{children:[a.name," is calling!!"]}),Object(p.jsx)(C.a,{variant:"contained",color:"primary",onClick:t,children:"Answer call"})]})})},y=a(188),N=a(193),k=a(91),I=a(189),S=a(190),D=a(191),A=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(r.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(r.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),B=function(e){var t=e.children,a=Object(n.useContext)(O),c=a.me,i=a.callAccepted,r=a.name,l=a.setName,o=a.callEnded,b=a.leaveCall,m=a.callUser,x=Object(n.useState)(""),f=Object(u.a)(x,2),h=f[0],g=f[1],v=A();return Object(p.jsx)(y.a,{className:v.container,children:Object(p.jsxs)(j.a,{elevation:10,className:v.paper,children:[Object(p.jsx)("form",{className:v.root,noValidate:!0,autoComplete:"off",children:Object(p.jsxs)(d.a,{container:!0,className:v.gridContainer,children:[Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(p.jsx)(s.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(p.jsx)(N.a,{label:"Name",value:r,onChange:function(e){l(e.target.value)},fullWidth:!0}),Object(p.jsx)(k.CopyToClipboard,{text:c,className:v.margin,children:Object(p.jsx)(C.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(p.jsx)(I.a,{fontSize:"large"}),children:"Copy your ID"})})]}),Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(p.jsx)(s.a,{gutterBottom:!0,variant:"h6",children:"Make call"}),Object(p.jsx)(N.a,{label:"ID to call",value:h,onChange:function(e){g(e.target.value)},fullWidth:!0}),i&&!o?Object(p.jsx)(C.a,{variant:"contained",color:"error",fullWidth:!0,startIcon:Object(p.jsx)(S.a,{fontSize:"large"}),onClick:b,className:v.margin,children:"Hang up"}):Object(p.jsx)(C.a,{variant:"contained",color:"success",fullWidth:!0,startIcon:Object(p.jsx)(D.a,{fontSize:"large"}),onClick:function(){return m(h)},className:v.margin,children:"Call"})]})]})}),t]})})},R=Object(o.a)((function(e){return{appBar:Object(r.a)({borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"2px solid black"},e.breakpoints.down("xs"),{width:"90%"}),image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}})),V=function(){var e=R();return Object(p.jsxs)("div",{className:e.wrapper,children:[Object(p.jsx)(l.a,{className:e.appBar,position:"static",color:"inherit",children:Object(p.jsx)(s.a,{variant:"h2",align:"center",children:"Video Chat"})}),Object(p.jsx)(v,{}),Object(p.jsx)(B,{children:Object(p.jsx)(w,{})})]})};a(151);i.a.render(Object(p.jsx)(h,{children:Object(p.jsx)(V,{})}),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.501af491.chunk.js.map