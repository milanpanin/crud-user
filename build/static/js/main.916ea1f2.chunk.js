(this["webpackJsonpcrud-user"]=this["webpackJsonpcrud-user"]||[]).push([[0],[,,,,,,,,,function(e,a,n){},,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var i=n(1),s=n.n(i),t=n(3),c=n.n(t),r=n(4),m=(n(9),n(0)),l=function(){return Object(m.jsxs)("nav",{className:"navigation",children:[Object(m.jsx)("h1",{className:"navigation-logo",children:"CRUD-User"}),Object(m.jsx)("button",{className:"navigation-newUser",children:"Dodaj novog korisnika"})]})},o=n.p+"static/media/avatar-m.61e3f67f.png",u=n.p+"static/media/avatar-f.ac2fec9f.png",d=(n(11),function(e){return Object(m.jsxs)("section",{className:"item",children:[Object(m.jsxs)("div",{className:"item-userContent",children:[Object(m.jsx)("img",{className:"item-avatar",src:"m"===e.user.gender?o:u,alt:"User"}),Object(m.jsx)("p",{className:"item-username",children:e.user.username}),Object(m.jsx)("p",{className:"item-mail",children:e.user.email})]}),Object(m.jsxs)("div",{className:"item-options",children:[Object(m.jsx)("i",{className:"fa fa-pencil item-option-icon"}),Object(m.jsx)("i",{className:"fa fa-trash item-option-icon",onClick:function(){return e.deleteUser(e.user.id)}})]})]})}),j=(n(12),function(e){return Object(m.jsxs)("section",{className:"list",children:[Object(m.jsx)("h3",{children:"Lista svih korisnika"}),e.user.map((function(a){return Object(m.jsx)(d,{user:a,deleteUser:e.deleteUser},a.id)}))]})}),f=(n(13),[{id:"01",gender:"m",username:"Milan",email:"milanpanin@gmail.com"},{id:"02",gender:"f",username:"Sara",email:"sarastefanovic@gmail.com"},{id:"03",gender:"m",username:"Neven",email:"nevenvujuc@gmail.com"},{id:"04",gender:"m",username:"Marko",email:"markojelic@gmail.com"},{id:"05",gender:"f",username:"Danica",email:"danicamarkovic@gmail.com"}]);var b=function(){var e=Object(i.useState)(f),a=Object(r.a)(e,2),n=a[0],s=a[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(l,{}),Object(m.jsx)(j,{user:n,deleteUser:function(e){var a=n.filter((function(a){return a.id!==e}));s(a)}})]})};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.916ea1f2.chunk.js.map