"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[880],{7458:function(e,t,n){n.d(t,{t:function(){return A},CR:function(){return b},wn:function(){return L},U0:function(){return Y},B2:function(){return T}});n(4320),n(6689);var a=n(9434),s=n(3634),r=n(2946),c="ContactForm_wrapper__-Umw-",o="ContactForm_form__dhl+T",l="ContactForm_form__name__0MHHc",i="ContactForm_form__number__uRpmt",m="ContactForm_form__input__VGD4-",u="ContactForm_form__button__MT1Jk",d=n(184),A=function(){var e=(0,a.I0)(),t=(0,a.v9)(r.Af).map((function(e){return e.name}));return(0,d.jsx)("div",{className:c,children:(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a={name:n.target.elements.name.value,number:n.target.elements.number.value};if(t.includes(a.name))return n.target.reset(),alert("".concat(a.name," is alredy in contacts"));e((0,s.uK)(a)),n.target.reset()},className:o,children:[(0,d.jsx)("label",{className:l,children:(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[A-Za-z.'\\- ]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:m,placeholder:"Contact name"})}),(0,d.jsx)("label",{className:i,children:(0,d.jsx)("input",{type:"tel",name:"number",pattern:"^\\+?\\d{1,4}?\\s?\\(?\\d{1,4}?\\)?\\s?\\d{1,4}\\s?\\d{1,4}\\s?\\d{1,9}$",title:"number number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Contact number",className:m})}),(0,d.jsx)("button",{type:"submit",className:u,children:"Add contact"})]})})},p=n(9439),h=n(2791),x=n.p+"static/media/icon-save.9b6cd31cfdc0c6dd3f6b.gif",f="ContactList_contacts__jDmyV",j="ContactList_contacts__item__9ozWV",_="ContactList_contacts__name__ItpdU",w="ContactList_contacts__number__+j+yn",N="ContactList_contact__icon__PsMFg",g="ContactList_contacts__btn__I3XUZ",v="ContactList_contacts__button__uwkrO",G="ContactList_contacts__wrapperName__+QL-w",C="ContactList_contacts__wrapperNumber__DjRso",M="ContactList_contacts__wrapperBtn__k0POK",b=function(){var e=(0,a.v9)(r.hF),t=(0,h.useState)(null),n=(0,p.Z)(t,2),c=n[0],o=n[1],l=(0,h.useState)(""),i=(0,p.Z)(l,2),m=i[0],u=i[1],A=(0,h.useState)(""),b=(0,p.Z)(A,2),y=b[0],R=b[1],E=(0,a.I0)();return(0,d.jsx)("ul",{className:f,children:e.map((function(e){return(0,d.jsx)("li",{className:j,children:c===e.id?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("input",{type:"text",value:m,className:G,onChange:function(e){return u(e.target.value)}}),(0,d.jsx)("input",{type:"text",value:y,className:C,onChange:function(e){return R(e.target.value)}}),(0,d.jsx)("button",{className:M,type:"button",onClick:function(){return function(e){var t={id:e,name:m,number:y};E((0,s.mP)(t)),o(null),u(""),R("")}(e.id)},children:(0,d.jsx)("img",{className:N,src:x,alt:"save icon"})})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:_,children:e.name}),(0,d.jsx)("p",{className:w,children:e.number}),(0,d.jsxs)("div",{className:g,children:[(0,d.jsx)("button",{type:"button",onClick:function(){return t=e.id,n=e.name,a=e.number,o(t),u(n),void R(a);var t,n,a},className:v,children:(0,d.jsx)("img",{className:N,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nO2du08UQRzHv0ZRC01ssLCxMBZqgxgtrXzAoSeyGKUx8R/wUZkYC/0DFElIjLWvTmiMhfbaCTEatRQDYsRS4E45M8lg1slv92Yfsze3+/0k29zNzs3OJ795LcwAhBBCCCFEZAeAfQB2A9giJyGu2Q7gBoB3AFqhaxnACwBDzktA/nEUwDdDhHQ919FDHHIeQMNCxvo1q6OJ5Mh+AJcAXAbwW6j0VQAfAMxFSHmSZ2GqzqiucKmimwBuAtgWSq8691dGujUARzr4DKWS0YyQoSLlQsR9PQBeG+nvF1z2SsloAbjd5v5jRvrPBZW7kjJaAJYA9MfksVU3VevpfxVY/tLLWAbwKKEUCnEkYwVATX9/K4GU40a6T3kUsOoyVgGcMtLZSNkM4A079fxl1CPSx0nZCOCpMOw9nKF8qLqMBoCzbe6LkjIlfP64oGcppYw1AIHl/ZIU81KLj1w6sSCIWZMaB7DBJhMA12NkfASwyzKfSjNqMc9QUpAxUg44fIbSzzN+ZpTyULj/nMPnKLWMAT1CWkoppabzMecvewp4plL1GavGPKMPwI+EfcqgIEMtPI4V9FylknFaSJtESk1HAmU4kpFEinpnThkFyLCRMirky2Yq5UKhavNtierow8vqLf076veIg8iwjRRGRoGRIUWKNE9hZBQYGWFOcGjrj4yTlJEcyvCIgJHhv4x6xnzZTKWAMjwiYGT4Q0AZ5ZcxwKEtZXQ1ASPDHwLK8IeAMvyXcSZjvuzAKaO7CRgZ/hBQRvllDHLSRxldTcDI8F/GcMZ82Ux5JmOFf6qTXUaDMjoDZXgEZXgEZXgEZVRARo2jKcooZWS02yGhHYyMFFCGR1CGR1BGBWQMcTSVj4y4XTspwyGU4RGU4RGU4RGU0QUysu5+M8TRlD8yRrh3CGV0NXuF5qSRw4YrI0JkcLsKC+4K+3zco4zOsAnAQsQuOOrUmTSwz8hAPWZrIvOas9h1RxoYNLnflD3PEghR1xfKcEevcP7SHQB/2kiRYGTkwBWjomf052reMZ9ACGXkxFujoq9GpIsT4moyWTn6hHmHasJshFzUn0u7d7IDT8m4UZHqXIwo5oUImKCM/FDn8H03KjnuX8vGLDp6RkYGho3KXNSS4lCjL8pwxLRRuZMR6Xp1R68O4KUMR+wU2v7wKWQ9uvmasjg1WS1IcsfnjFyLqNwlHSmLFrP1Rb0gqVaJSUZmEi6VhEdWL/WpMu36G2JJfwoR7/XBWKqpIzkzYSlB7YP+AMChvAtA/kd67xGeqU/rITGbpIL4KoiY1UNbNkkdoKbfZyzo5utgJwpBCCGEEEIIMvMXMuNOHsCWdsgAAAAASUVORK5CYII=",alt:"edit icon pencil"})}),(0,d.jsx)("button",{type:"button",onClick:function(){return t=e.id,void E((0,s.GK)(t));var t},className:v,children:(0,d.jsx)("img",{className:N,src:"data:image/png;base64,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",alt:"delete icon garbage"})})]})]})},e.id)}))})},y=n(3165),R="Filter_filter__vxThR",E="Filter_filter__input__toa89",L=function(){var e=(0,a.I0)();return(0,d.jsx)("div",{className:R,children:(0,d.jsx)("input",{className:E,onChange:function(t){return e((0,y.W)(t.target.value))},placeholder:"Find contact by name"})})},K=(n(9589),n(9273)),k="LoginForm_form__wrapper__wolm3",U="LoginForm_form__gPEx5",B="LoginForm_form__label__fqunJ",O="LoginForm_form__input__09r8K",F="LoginForm_form__btn__jFr2r",Y=function(){var e=(0,a.I0)();return(0,d.jsx)("div",{className:k,children:(0,d.jsxs)("form",{className:U,onSubmit:function(t){t.preventDefault();var n=t.currentTarget;e((0,K.Ib)({email:n.elements.email.value,password:n.elements.password.value})),n.reset()},children:[(0,d.jsxs)("label",{className:B,children:["Email",(0,d.jsx)("input",{className:O,type:"email",name:"email",placeholder:"john.nick@gmail.com"})]}),(0,d.jsxs)("label",{className:B,children:["Password",(0,d.jsx)("input",{className:O,type:"password",name:"password",placeholder:"xxxxxxx"})]}),(0,d.jsx)("button",{className:F,type:"submit",children:"Log in"})]})})},D=(n(3010),n(6605),"RegisterForm_form__wrapper__XogRl"),I="RegisterForm_form__Tv43W",S="RegisterForm_form__label__drWoo",Q="RegisterForm_form__input__9aHOm",Z="RegisterForm_form__btn__TW+4G",T=function(){var e=(0,a.I0)();return(0,d.jsx)("div",{className:D,children:(0,d.jsxs)("form",{className:I,onSubmit:function(t){t.preventDefault();var n=t.currentTarget;e((0,K.z2)({name:n.elements.name.value,email:n.elements.email.value,password:n.elements.password.value})),n.reset()},children:[(0,d.jsxs)("label",{className:S,children:["Username",(0,d.jsx)("input",{className:Q,type:"text",name:"name",placeholder:"John Nick"})]}),(0,d.jsxs)("label",{className:S,children:["Email",(0,d.jsx)("input",{className:Q,type:"email",name:"email",placeholder:"john.nick@gmail.com"})]}),(0,d.jsxs)("label",{className:S,children:["Password",(0,d.jsx)("input",{className:Q,type:"password",name:"password",placeholder:"xxxxxxx"})]}),(0,d.jsx)("button",{className:Z,type:"submit",children:"Register"})]})})};n(6512),n(9650)},7427:function(e,t,n){n.r(t);var a=n(7458),s=n(4270),r=n(184);t.default=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.q,{children:(0,r.jsx)("title",{children:"Login"})}),(0,r.jsx)(a.U0,{})]})}},2946:function(e,t,n){n.d(t,{Af:function(){return s},hF:function(){return o},xU:function(){return r},zh:function(){return c}});var a=n(6916),s=function(e){return e.contacts.contacts},r=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.error},o=(0,a.P1)([s,function(e){return e.filters}],(function(e,t){return""===t?e:e.filter((function(e){return e.name.toLowerCase().includes(t.filter)}))}))}}]);
//# sourceMappingURL=880.e0b9eac2.chunk.js.map