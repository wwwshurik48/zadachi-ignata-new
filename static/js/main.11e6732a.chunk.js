(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={link:"Header_link__12diM",active:"Header_active__3jTHN",block:"Header_block__2UojH",header:"Header_header__16JGU"}},11:function(e,t,n){e.exports={greeting:"Greeting_greeting__g-zG5",error:"Greeting_error__SrNyO",input:"Greeting_input__1XoVr",errorInput:"Greeting_errorInput__3dRzu",button:"Greeting_button__aRs35",count:"Greeting_count__2LldC"}},18:function(e,t,n){e.exports={input:"SuperInputText_input__2dKTf",superInput:"SuperInputText_superInput__12jfa",errorInput:"SuperInputText_errorInput__3qv-7",error:"SuperInputText_error___vX3Z"}},22:function(e,t,n){e.exports={blue:"HW4_blue__2Eme7",column:"HW4_column__3Csm1",testSpanError:"HW4_testSpanError__32E7s"}},23:function(e,t,n){e.exports={label:"SuperCheckbox_label__1Ywee",checkbox:"SuperCheckbox_checkbox__1kufx",spanClassName:"SuperCheckbox_spanClassName__Y0S3f"}},27:function(e,t,n){e.exports={App:"App_App__2rNhO"}},28:function(e,t,n){e.exports={default:"SuperButton_default__2QP2j",red:"SuperButton_red__1JyAI",button:"SuperButton_button__1leMe",blink:"SuperButton_blink__1nuoo"}},36:function(e,t,n){},4:function(e,t,n){e.exports={affair:"Affairs_affair__33ErJ",item:"Affairs_item__32Swz",button:"Affairs_button__ncmke",active:"Affairs_active__28qVh",high:"Affairs_high__2IVK1",middle:"Affairs_middle__9C2Xc",low:"Affairs_low__2bpri"}},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(26),s=n.n(c),i=(n(36),n(27)),o=n.n(i),l=n(12),j=n(9),u=n.n(j),d=n(0);var b=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:u.a.routBox,children:[Object(d.jsx)("img",{className:u.a.avatar,src:e.avatar,alt:"img"}),Object(d.jsxs)("div",{className:u.a.messageBox,children:[Object(d.jsx)("p",{className:u.a.name,children:e.name}),Object(d.jsx)("p",{className:u.a.message,children:e.message}),Object(d.jsx)("p",{className:u.a.time,children:e.time})]})]})})},h=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:u.a.newMessageBox,children:[Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{onChange:function(){console.log("new message")}})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){console.log("click button")},children:"Add post"})})]})})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Alexandr",O="Hi, bro!!!",m="22:00";var f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(b,{avatar:x,name:_,message:O,time:m}),Object(d.jsx)("hr",{}),Object(d.jsx)(h,{})]})},p=n(8),v=n(4),g=n.n(v);var k=function(e){var t=g.a.item+" "+g.a[e.affair.priority];return Object(d.jsxs)("div",{className:g.a.affair,children:[Object(d.jsx)("div",{className:g.a.item,children:e.affair.name}),Object(d.jsxs)("div",{className:t,children:["[",e.affair.priority,"]"]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:g.a.item+" "+g.a.button,children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(d.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=g.a.button+" "+("all"===e.filter?g.a.active:""),r=g.a.button+" "+("high"===e.filter?g.a.active:""),a=g.a.button+" "+("middle"===e.filter?g.a.active:""),c=g.a.button+" "+("low"===e.filter?g.a.active:"");return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:n,children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},className:r,children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},className:a,children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},className:c,children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(r.useState)(C),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(p.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(N,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},S=n(31),y=n(11),A=n.n(y),I=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=(e.onEnter,e.error),c=e.totalUsers,s=A.a.error?A.a.errorInput:A.a.input;return Object(d.jsxs)("div",{className:A.a.greeting,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:s}),Object(d.jsx)("div",{className:A.a.error,children:a})]}),Object(d.jsx)("button",{onClick:r,className:A.a.button,disabled:!t,children:"add"}),Object(d.jsx)("div",{className:A.a.count,children:c})]})},B=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(p.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(p.a)(o,2),j=l[0],u=l[1],b=function(){n(s),alert("Hello ".concat(s," !"))},h=t.length;return Object(d.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),j&&u("")):(s&&i(""),u("name is require!"))},addUser:b,onEnter:function(e){"Enter"===e.key&&s&&b()},error:j,totalUsers:h})},E=n(45);var M=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(B,{users:n,addUserCallback:function(e){var t={_id:Object(E.a)(),name:e};a([].concat(Object(S.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},T=n(14),H=n(15),G=n(18),J=n.n(G),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(J.a.error," ").concat(i||""),j="".concat(J.a.input," ").concat(c?J.a.errorInput:J.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(T.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},o)),c&&Object(d.jsx)("span",{className:l,children:c})]})},W=n(22),F=n.n(W),P=n(28),z=n.n(P),K=function(e){e.red;var t=e.className,n=Object(H.a)(e,["red","className"]),r="".concat(z.a.button," ? {red ? s.red : s.default} ").concat(t);return Object(d.jsx)("button",Object(T.a)({className:r},n))},L=n(23),X=n.n(L),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(T.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(d.jsx)("span",{className:X.a.spanClassName,children:a})]})};var Y=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(p.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:F.a.column,children:[Object(d.jsx)(U,{value:n,onChangeText:a,onEnter:s,error:c}),Object(d.jsx)(U,{className:F.a.blue}),Object(d.jsx)(K,{children:"default"}),Object(d.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(K,{disabled:!0,children:"disabled"}),Object(d.jsx)(q,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(q,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Q=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(w,{}),Object(d.jsx)(M,{}),Object(d.jsx)(Y,{})]})};function R(){return Object(d.jsx)("div",{children:"Junior"})}function V(){return Object(d.jsx)("div",{children:"JuniorPlus"})}var Z=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},$=n(2),D="/pre-junior",ee="/junior",te="/junior-plus";var ne=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)($.d,{children:[Object(d.jsx)($.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)($.a,{to:D})}}),Object(d.jsx)($.b,{path:D,render:function(){return Object(d.jsx)(Q,{})}}),Object(d.jsx)($.b,{path:ee,render:function(){return Object(d.jsx)(R,{})}}),Object(d.jsx)($.b,{path:te,render:function(){return Object(d.jsx)(V,{})}}),"// add routes",Object(d.jsx)($.b,{render:function(){return Object(d.jsx)(Z,{})}})]})})},re=n(10),ae=n.n(re);var ce=function(){return Object(d.jsxs)("div",{className:ae.a.header,children:[Object(d.jsx)(l.b,{to:D,className:ae.a.link,activeClassName:ae.a.active,children:"pre-junior"}),Object(d.jsx)(l.b,{to:ee,className:ae.a.link,activeClassName:ae.a.active,children:"junior"}),Object(d.jsx)(l.b,{to:te,className:ae.a.link,activeClassName:ae.a.active,children:"junior+"}),Object(d.jsx)("div",{className:ae.a.block})]})};var se=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(ce,{}),Object(d.jsx)(ne,{})]})})};var ie=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(se,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports={routBox:"Message_routBox__3Tun_",avatar:"Message_avatar__3GQxY",messageBox:"Message_messageBox__1CEvW",name:"Message_name__z2M66",message:"Message_message__3HzLI",time:"Message_time__1JbpL",newMessageBox:"Message_newMessageBox__2L2wQ"}}},[[43,1,2]]]);
//# sourceMappingURL=main.11e6732a.chunk.js.map