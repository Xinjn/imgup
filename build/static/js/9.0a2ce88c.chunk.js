(this["webpackJsonpreact-epic-teach"]=this["webpackJsonpreact-epic-teach"]||[]).push([[9],{191:function(e,n,s){},262:function(e,n,s){"use strict";s.r(n);var c,t,i,r,a,o,l=s(144),d=s(143),j=s(22),b=s(0),x=s(265),p=s(266),h=s(122),u=s(23),O=s(80),f=s(12),g=s(37),m=(s(191),s(124)),v=s(4),k=u.a.div(c||(c=Object(j.a)(["\n\n    width:350px;\n    box-shadow: 2px 2px 4px 0 rgba(0,0,0,.2);\n    border-radius:4px;\n    padding:20px;\n    margin:30px auto;\n    background-color:#fff;\n    font-family: Roboto;\n    font-size: 12px;\n\n"]))),w=u.a.div(t||(t=Object(j.a)(["\n// border:1px solid red;\nposition: fixed;\nleft:0;\ntop:0;\n// background:#fff;\nwidth:25px;\nheight:25px;\nmargin:10px;\n"]))),y=u.a.div(i||(i=Object(j.a)(["\nposition: fixed;\nmargin:10px;\nleft:0;\ntop:35px;\nwidth:180px;\nlist-style:none;\nbackground:#fff;\nborder-radius:3px;\npadding:0;\n.icon {\n  width:15px;\n  height: 15px;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n"]))),N=Object(u.a)(g.b)(r||(r=Object(j.a)(["\n    font-size:15px;\n    // border:1px solid red;\n    display:block;\n    padding:10px;\n    color:#333;\n    span{\n            \n            margin-left:5px;\n    }\n    &:hover{\n        background:#c4c4c4;\n        border-radius:3px;\n            color:#fff;\n    }\n"]))),H=u.a.h1(a||(a=Object(j.a)(["\n// border:1px solid red;\n    text-align:center;\n   margin:5px 0 0 0 ;\n"]))),C=u.a.div(o||(o=Object(j.a)(["\n    text-align:center;\n    margin:15px;\n    font-size: 14px;\n// border:1px solid red;\n"]))),P={labelCol:{span:6},wrapperCol:{span:18}},z={wrapperCol:{offset:6,span:18}},I=function(e,n){return/\W/.test(n)?Promise.reject("\u53ea\u80fd\u65f6\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):n.length<4||n.length>10?Promise.reject("\u957f\u5ea6\u4e3a4~10\u4e2a\u5b57\u7b26"):Promise.resolve()};n.default=function(){var e=Object(O.a)().AuthStore,n=Object(f.f)(),s=Object(b.useState)(!1),c=Object(d.a)(s,2),t=c[0],i=c[1],r=Object(m.a)().t;return Object(v.jsxs)(k,{children:[Object(v.jsx)(w,{onClick:function(){console.log(t),i(!t)},children:Object(v.jsx)("svg",{className:"icon","aria-hidden":"true",children:Object(v.jsx)("use",{xlinkHref:"#icon-cebianlan2"})})}),t?Object(v.jsxs)(y,{children:[Object(v.jsxs)(N,{to:"/",children:[Object(v.jsx)("svg",{className:"icon","aria-hidden":"true",children:Object(v.jsx)("use",{xlinkHref:"#icon-index"})}),Object(v.jsx)("span",{children:r("\u9996\u9875")})]}),Object(v.jsxs)(N,{to:"/history",children:[Object(v.jsx)("svg",{className:"icon","aria-hidden":"true",children:Object(v.jsx)("use",{xlinkHref:"#icon-upload2"})}),Object(v.jsx)("span",{children:r("\u5386\u53f2")})]}),Object(v.jsxs)(N,{to:"/about",children:[Object(v.jsx)("svg",{className:"icon","aria-hidden":"true",children:Object(v.jsx)("use",{xlinkHref:"#icon-guanyu4"})}),Object(v.jsx)("span",{children:r("\u5173\u4e8e")})]}),Object(v.jsxs)(N,{to:"/login",children:[Object(v.jsx)("svg",{className:"icon","aria-hidden":"true",children:Object(v.jsx)("use",{xlinkHref:"#icon-denglu2"})}),Object(v.jsx)("span",{children:r("\u767b\u5f55")})]}),Object(v.jsxs)(N,{to:"/register",children:[Object(v.jsx)("svg",{className:"icon","aria-hidden":"true",children:Object(v.jsx)("use",{xlinkHref:"#icon-zhuce1"})}),Object(v.jsx)("span",{children:r("\u6ce8\u518c")})]})]}):null,Object(v.jsx)(H,{children:r("\u4f7f\u7528\u4f60\u7684\u8d26\u6237\u767b\u5f55")}),Object(v.jsxs)(C,{children:[r("\u6ca1\u6709\u8d26\u53f7\uff1f")," ",Object(v.jsx)(g.b,{to:"/register",children:r("\u9a6c\u4e0a\u6ce8\u518c\uff01")})]}),Object(v.jsxs)(x.a,Object(l.a)(Object(l.a)({},P),{},{name:"basic",onFinish:function(s){console.log("Success:",s),e.setUsername(s.username),e.setPassword(s.password),e.login().then((function(){console.log("\u767b\u5f55\u6210\u529f,\u8df3\u8f6c\u5230\u9996\u9875"),n.push("/")})).catch((function(e){console.log(e),console.log("\u767b\u5f55\u5931\u8d25\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u505a")}))},children:[Object(v.jsx)(x.a.Item,{label:r("\u7528\u6237\u540d"),name:"username",rules:[{required:!0,message:"\u8f93\u5165\u7528\u6237\u540d"},{validator:I}],children:Object(v.jsx)(p.a,{})}),Object(v.jsx)(x.a.Item,{label:r("\u5bc6\u7801"),name:"password",rules:[{required:!0,message:"\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}],children:Object(v.jsx)(p.a.Password,{})}),Object(v.jsx)(x.a.Item,Object(l.a)(Object(l.a)({},z),{},{className:"button",children:Object(v.jsx)(h.a,{type:"primary",htmlType:"submit",children:r("\u63d0\u4ea4")})}))]}))]})}}}]);
//# sourceMappingURL=9.0a2ce88c.chunk.js.map