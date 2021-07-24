(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{22:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);a(22);var n=a(1),c=a.n(n),r=a(19),o=a.n(r),i=(a(27),a(4)),s=(a(28),function(){}),l=[];function u(e){s(e),l=e}var j=a(9),d=a(11),f=function(){},v=Object(d.a)(Array(8)).map((function(){return Object(d.a)(Array(8))}));function m(e){f(e),v=e}var b=function(){},O=!1;var h="move",p="status",x="board",g="connect",y="create_id",N="no_name",w="initiate",k="opponent",S="owner",B="viewer",C="closed",I="users",P="role",W="ping",E=new WebSocket("".concat(window.location.protocol.replace("http","ws"),"//").concat(window.location.hostname,":").concat("localhost"===window.location.hostname||window.location.hostname.toString().startsWith("127.0.0")?5e3:window.location.port,"/ws").concat(window.location.pathname)),F=!1;var J=function e(){var t,a=localStorage.getItem("userName"),n=localStorage.getItem("userID");if(!a)return b(t=!0),void(O=t);F?E.send(JSON.stringify({type:g,userName:a,userID:n})):setTimeout((function(){e()}),100)};E.addEventListener("open",(function(){setTimeout((function(){J()}),100)}));var R=null;E.addEventListener("message",(function(e){var t={};try{t=JSON.parse(e.data)}catch(a){}T(t)}));var T=function(e){switch(e.type){case W:break;case p:switch(e.status){case N:window.location.reload();break;case C:E.close(),alert("Socket is closed");break;default:console.log("STATUS",e.status)}break;case x:u(e[x]);break;case I:break;case w:R=e[P],u(e[x]);break;case y:var t=e.userID;localStorage.setItem("userID",t),window.location.reload();break;default:console.log("Cannot identify message")}},D={K:{move:[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],castling:[[0,1],[0,-1]],type:3},Q:{move:[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],type:1},R:{move:[[-1,0],[0,-1],[0,1],[1,0]],type:1},B:{move:[[-1,-1],[-1,1],[1,-1],[1,1]],type:1},N:{move:[[-1,2],[-1,-2],[1,2],[1,-2],[-2,1],[-2,-1],[2,1],[2,-1]],type:0},P:{initial:[[-1,0],[-2,0]],move:[[-1,0]],cut:[[-1,1],[-1,-1]],type:3}},K=function(e){var t=e.target,a=1*t.dataset.i,n=1*t.dataset.j,c=t.dataset.piece;if(U(),Q!==t){Q=t;var r=Object(d.a)(v);r[a][n]="selected";var o=D[c[1]].move;switch(D[c[1]].type){case 0:var s,l=Object(j.a)(o);try{for(l.s();!(s=l.n()).done;){var u=Object(i.a)(s.value,2),f=u[0],b=u[1],O=a+f,h=n+b;if(O>-1&&h>-1&&O<8&&h<8){if(Y(c,O,h))continue;A(c,O,h)?r[O][h]="red":(r[O][h]="green",O+=f,h+=b)}}}catch(re){l.e(re)}finally{l.f()}break;case 1:var p,x=Object(j.a)(o);try{for(x.s();!(p=x.n()).done;)for(var g=Object(i.a)(p.value,2),y=g[0],N=g[1],w=a+y,k=n+N;w>-1&&k>-1&&w<8&&k<8&&!Y(c,w,k);){if(A(c,w,k)){r[w][k]="red";break}r[w][k]="green",w+=y,k+=N}}catch(re){x.e(re)}finally{x.f()}break;default:switch(c[1]){case"K":var S,B=Object(j.a)(o);try{for(B.s();!(S=B.n()).done;){var C=Object(i.a)(S.value,2),I=C[0],P=C[1],W=a+I,E=n+P;if(W>-1&&E>-1&&W<8&&E<8){if(Y(c,W,E))continue;A(c,W,E)?r[W][E]="red":(r[W][E]="green",W+=I,E+=P)}}}catch(re){B.e(re)}finally{B.f()}break;case"P":if(6===a){var F,J=Object(j.a)(D.P.initial);try{for(J.s();!(F=J.n()).done;){var R=Object(i.a)(F.value,2),T=R[0],K=R[1],L=a+T,_=n+K;if(L>-1&&_>-1&&L<8&&_<8){if(Y(c,L,_))continue;if(A(c,L,_))continue;r[L][_]="green"}}}catch(re){J.e(re)}finally{J.f()}}else{var H,M=Object(j.a)(D.P.move);try{for(M.s();!(H=M.n()).done;){var q=Object(i.a)(H.value,2),z=q[0],G=q[1],V=a+z,X=n+G;if(V>-1&&X>-1&&V<8&&X<8){if(Y(c,V,X))continue;if(A(c,V,X))continue;r[V][X]="green"}}}catch(re){M.e(re)}finally{M.f()}}var Z,$=Object(j.a)(D.P.cut);try{for($.s();!(Z=$.n()).done;){var ee=Object(i.a)(Z.value,2),te=ee[0],ae=ee[1],ne=a+te,ce=n+ae;ne>-1&&ce>-1&&ne<8&&ce<8&&A(c,ne,ce)&&(r[ne][ce]="red")}}catch(re){$.e(re)}finally{$.f()}}}m(r)}else Q=null},Y=function(e,t,a){for(var n in l)for(var c in l[n])if(t===1*n&&a===1*c&&l[n][c][0]&&l[n][c][0]===e[0])return!0;return!1},A=function(e,t,a){for(var n in l)for(var c in l[n])if(t===1*n&&a===1*c&&l[n][c][0]&&l[n][c][0]!==e[0])return!0;return!1},Q=null,L=function(e,t){Q&&(E.send(JSON.stringify({type:h,move:{from:{x:Q.dataset.i,y:Q.dataset.j},to:{x:e,y:t}}})),U(),Q=null)},U=function(){var e=Object(d.a)(v);for(var t in e)for(var a in e[t])e[t][a]=void 0;m(e)},_=a(0),H={BR:14,BN:16,BB:15,BQ:13,BK:12,BP:17,WR:20,WN:22,WB:21,WQ:19,WK:18,WP:23},M={};var q=function(){var e=Object(n.useState)(l),t=Object(i.a)(e,2),a=t[0],c=t[1];s=c,F=!0;var r=R,o={};for(var u in a)for(var j in a[u])o[a[u][j]]={i:u,j:j};var d={};for(var f in M)f in o&&(d[f]=M[f]);for(var v in M=d,o)M[v]=o[v];var m=[];for(var b in M)m.push({el:b,i:M[b].i,j:M[b].j});return Object(_.jsx)(_.Fragment,{children:m.map((function(e,t){return e.el?Object(_.jsx)("div",{style:{"--i":e.i,"--j":e.j},"data-i":e.i,"data-j":e.j,"data-piece":e.el,className:"chess-piece ".concat(r===B||r===S&&"B"===e.el[0]||r===k&&"W"===e.el[0]?"read-only":""),onClick:K,children:String.fromCharCode(9800+H["".concat(e.el[0]).concat(e.el[1])])},e.el):""}))})};function z(){var e=c.a.useState(v),t=Object(i.a)(e,2),a=t[0],n=t[1];return f=n,Object(_.jsx)(_.Fragment,{children:a.map((function(e,t){return Object(_.jsx)("div",{className:"row",children:e.map((function(e,a){return e?Object(_.jsx)("div",{className:"cell ".concat(e),onClick:function(){return L(t,a)}},a):Object(_.jsx)("div",{className:"cell",onClick:function(){return L(t,a)}},a)}))},t)}))})}var G=function(e){return Object(_.jsxs)("div",{className:"chess-board cell",children:[Object(_.jsx)(z,{}),Object(_.jsx)(q,{})]})};function V(){return Object(_.jsx)(_.Fragment,{children:[{className:"top",marks:["a","b","c","d","e","f","g","h"]},{className:"bottom",marks:["a","b","c","d","e","f","g","h"]},{className:"left",marks:["1","2","3","4","5","6","7","8"]},{className:"right",marks:["1","2","3","4","5","6","7","8"]}].map((function(e,t){return Object(_.jsx)("div",{className:e.className,children:e.marks.map((function(e,t){return Object(_.jsx)("div",{children:e.toUpperCase()},t)}))},t)}))})}var X=function(e){return Object(_.jsxs)("div",{className:"play-ground",children:[Object(_.jsx)(G,{}),Object(_.jsx)(V,{})]})};a(30);var Z=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(_.jsx)("div",{className:"popupBackground",children:Object(_.jsxs)("div",{className:"namePopup",children:[Object(_.jsx)("div",{className:"heading",children:"Enter Your Name"}),Object(_.jsx)("input",{type:"text",placeholder:"Your Name",onChange:function(e){c(e.target.value)},value:a}),Object(_.jsx)("button",{onClick:function(){localStorage.setItem("userName",a),window.location.reload()},children:"Enter Room"})]})})};var $=function(){var e=Object(n.useState)(O),t=Object(i.a)(e,2),a=t[0],c=t[1];return b=c,Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(X,{}),a?Object(_.jsx)(Z,{}):""]})};a(31);var ee=function(){var e=Object(n.useState)(localStorage.getItem("userName")||""),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(_.jsx)("div",{className:"popupBackground",children:Object(_.jsxs)("div",{className:"namePopup",children:[Object(_.jsx)("div",{className:"heading",children:"Enter Your Name"}),Object(_.jsx)("input",{type:"text",placeholder:"Your Name",onChange:function(e){c(e.target.value)},value:a}),Object(_.jsx)("button",{onClick:function(){a&&(localStorage.setItem("userName",a),fetch("/room",{method:"POST"}).then((function(e){return e.json()})).then((function(e){window.location="room/".concat(e.room)})))},children:"Create Room"})]})})};var te=function(e){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{children:"Home"}),Object(_.jsx)(ee,{})]})};var ae=function(){return Object(_.jsx)("h1",{children:"404 Page NotFound"})},ne=a(20),ce=a(2);var re=function(e){return Object(_.jsx)(ne.a,{children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)(ce.c,{children:[Object(_.jsx)(ce.a,{path:"/",component:te,exact:!0}),Object(_.jsx)(ce.a,{path:"/room/*",component:$,exact:!0}),Object(_.jsx)(ce.a,{path:"/room",component:te,exact:!0}),Object(_.jsx)(ce.a,{component:ae})]})})})};o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(re,{})}),document.getElementById("root"))}},[[37,1,2]]]);