(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{28:function(e,t,a){e.exports=a(48)},39:function(e,t,a){e.exports=a.p+"static/media/logo.7862b019.png"},43:function(e,t,a){e.exports=a.p+"static/media/truck.f440c067.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/ben.582de473.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/minn2.3c1f056f.png"},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),i=a.n(l),o=a(13),s=a(7),c=a(3),m=function(e){var t=e.component,a=e.layout,n=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(o.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},d=a(10),u=a(2),v=a.n(u),p=a(22),h=r.a.forwardRef((function(e,t){var a=Object(n.useState)(window.innerHeight),l=Object(d.a)(a,2),i=l[0],o=l[1],s=Object(n.useState)([]),c=Object(d.a)(s,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),n=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=i-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,n)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(n.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(n.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),h())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){b(),h()}),30),E=Object(p.throttle)((function(){o(window.innerHeight)}),30);return Object(n.useEffect)((function(){b(),h()}),[i]),r.a.createElement(r.a.Fragment,null,e.children())}));h.propTypes={children:v.a.func.isRequired};var b=h,f=(a(38),a(17)),E=a(1),g=a.n(E),N=a(6),y=function(e){var t=e.className,a=e.src,l=e.width,i=e.height,o=e.alt,s=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(n.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],h=Object(n.useRef)(null);Object(n.useEffect)((function(){b(h.current)}),[]);var b=function(e){var t,a,n=document.createElement("img");v||(e.style.display="none",e.before(n),n.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),n.width=e.getAttribute("width"),n.height=e.getAttribute("height"),n.style.opacity="0",e.className&&n.classList.add(e.className),n.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},s,{ref:h,className:t,src:a,width:l,height:i,alt:o,onLoad:function(){p(!0)}}))};y.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=y,w=function(e){var t=e.className,n=Object(c.a)(e,["className"]),l=g()("brand",t);return r.a.createElement("div",Object.assign({},n,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(N.a,{to:"/"},r.a.createElement(O,{src:a(39),alt:"Open",width:85,height:120}))))},D=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,i=e.hideSignin,o=e.bottomOuterDivider,s=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(n.useState)(!1),v=Object(d.a)(u,2),p=v[0],h=v[1],b=Object(n.useRef)(null),f=Object(n.useRef)(null);Object(n.useEffect)((function(){return p&&E(),document.addEventListener("keydown",O),document.addEventListener("click",D),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",D),y()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",h(!0)},y=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),h(!1)},O=function(e){p&&27===e.keyCode&&y()},D=function(e){b.current&&p&&!b.current.contains(e.target)&&e.target!==f.current&&y()},C=g()("site-header",o&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:C}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-header-inner",s&&"has-bottom-divider")},r.a.createElement(w,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?y:E},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:b,className:g()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",onClick:y},"How We Do It")),r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",onClick:y},"Contact Us"))),!i&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:y},"Schedule a Service")))))))))};D.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var C=D,x=function(e){var t=e.className,a=Object(c.a)(e,["className"]),n=g()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:n}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"How it works")),r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"Contact")),r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"About us"))))},j=function(e){var t=e.className,a=e.topOuterDivider,n=e.topDivider,l=Object(c.a)(e,["className","topOuterDivider","topDivider"]),i=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:i}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-footer-inner",n&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(w,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(x,null),r.a.createElement("div",{className:"footer-copyright"},"Made by ",r.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};j.defaultProps={topOuterDivider:!1,topDivider:!1};var k=j,L=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(k,null))},A=a(4),P={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},S={types:Object(A.a)({},P.types),defaults:Object(A.a)({},P.defaults)},B={types:Object(A.a)({},P.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(A.a)({},P.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},T={types:Object(A.a)({},P.types,{pushLeft:v.a.bool}),defaults:Object(A.a)({},P.defaults,{pushLeft:!1})},H=function(e){var t=e.className,a=Object(c.a)(e,["className"]),n=g()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:n}))},F=function(e){var t=e.className,a=e.tag,n=e.color,l=e.size,i=e.loading,o=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",n&&"button-".concat(n),l&&"button-".concat(l),i&&"is-loading",o&&"button-block",s&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};F.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var M=F,W=function(e){var t=e.className,a=e.children,l=e.handleClose,i=e.show,o=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(n.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(n.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},p=function(e){e.stopPropagation()},h=g()("modal",i&&"is-active",s&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("div",Object.assign({},d,{className:h,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:p},s?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:s})):r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};W.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var R=W,q=a(11),z=a(12),I=Object(A.a)({},S.defaults),_=function(e){var t=e.className,l=e.topOuterDivider,i=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(n.useState)(!1),h=Object(d.a)(p,2),b=h[0],f=h[1],E=g()("hero section center-content",l&&"has-top-divider",i&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),y=g()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:E}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:y},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Cedar ",r.a.createElement("span",{className:"text-color-primary"},"Septic and Sewer")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0  reveal-from-bottom","data-reveal-delay":"400"},"Licensed \u2013 Bonded \u2013 Insured",r.a.createElement("br",null),"MPCA License #4150"),r.a.createElement("p",{className:"m-0  reveal-from-bottom","data-reveal-delay":"400",style:{color:"white",fontWeight:"900",margin:"7px 0px 10px 0px"}},"For regular maintenance and pumping, call, text or book online now. We are available 24/7 for septic emergencies."),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(H,null,r.a.createElement(N.a,{to:"/booking"},r.a.createElement(M,{tag:"a",color:"primary",wideMobile:!0},"Book Online")),r.a.createElement(M,{tag:"a",color:"primary",wideMobile:!0,href:"mailto:Cedar.septic@gmail.com"},r.a.createElement(q.a,{style:{marginTop:"5px"},icon:z.a}),"\xa0Cedar.septic@gmail.com"),r.a.createElement(M,{tag:"a",color:"primary",wideMobile:!0,href:"tel:763-218-8722"},r.a.createElement(q.a,{style:{marginTop:"5px",marginLeft:"0px",marginRight:"0px"},icon:z.b}),"\xa0Call/Text"))))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},r.a.createElement(O,{className:"has-shadow",src:a(43),alt:"Hero",width:896,height:504}))),r.a.createElement(R,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};_.defaultProps=I;var Y=_,G=function(e){var t=e.className,a=e.data,n=e.children,l=e.tag,i=Object(c.a)(e,["className","data","children","tag"]),o=g()("section-header",t),s=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},i,{className:o}),r.a.createElement("div",{className:"container-xs"},n,a.title&&r.a.createElement(s,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("div",null,r.a.createElement("p",{className:"m-0"},a.paragraph)))))};G.defaultProps={children:null,tag:"h2"};var K=G,U=Object(A.a)({},T.defaults),J=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("features-tiles section",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("testimonial-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider");g()("tiles-wrap center-content",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{paddingTop:"0px"},className:v},r.a.createElement("div",{className:"center-content"},r.a.createElement("div",{className:"container-xs"},r.a.createElement("h2",null,"Why should you pump your septic system regularly?"),r.a.createElement("p",{className:"m-0",style:{textAlign:"left"}},"Your septic system is not designed to last forever, but regular pumping and maintenance can help to increase the longevity of your drainfield. Keep your septic system healthy, and avoid the cost and headache of replacing it. The average cost of a new septic system is ",r.a.createElement("strong",null,"$10,000"),"."),r.a.createElement("p",{className:"m-1",style:{textAlign:"left"}},"The Minnesota Pollution Control Agency recommends having your system pumped and inspected every 2 \u2013 3 years. For information on septic systems ",r.a.createElement("a",{href:"https://www.pca.state.mn.us/living-green/healthy-septic-systems"},"check this out"),"."))),r.a.createElement("div",{className:"center-content"},r.a.createElement("div",{className:"container-xs"},r.a.createElement("h2",null,"Want to schedule a pumping? It\u2019s Simple!"),r.a.createElement("p",{className:"mb-3",style:{textAlign:"left"}},"Cedar Septic and sewer wants to offer our clients the opportunity to book with us entirely online. You will not need to be home during the scheduled maintenance. We will either leave a receipt at your door or sent to you via email.",r.a.createElement("br",null),"The day prior to your appointment we will contact you to remind you that we will be out the following day. Our technician will pump your septic tanks completely and inspect the system to give a full report on the Current condition of them. Your report will also come with before and after pictures via text or email.",r.a.createElement("br",null),"At Cedar septic and sewer we follow all of the state guidelines very closely when it comes to the cleaning and disposal of your system."),r.a.createElement(M,{tag:"a",color:"primary",wideMobile:!0,href:"#"},"Book Your Appointment"))))))};J.defaultProps=U;var V=J,$=Object(A.a)({},B.defaults),Q=function(e){var t=e.className,n=e.topOuterDivider,l=e.bottomOuterDivider,i=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,h=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=g()("features-split section",n&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),f=g()("features-split-inner section-inner",i&&"has-top-divider",o&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},h,{className:b}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(K,{data:{title:"About Us",paragraph:"Working with sewage might not always be glamorous but we take as much pride in our work as possible. We will respect your property and always leave it in the same condition it was in when we arrived. You have our word to never drive on your lawn, as our truck is equipped with enough hose to reach you tanks from either your driveway or the road."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Professional Service"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Family Owned"),r.a.createElement("p",{className:"m-0"},"Cedar Septic and Sewer is a local, family owned and operated business. We are currently operating out of our home in Oak Grove, Mn. Owner and Technician, Ben Mackedanz, has over 10 years of experience in residential, commercial and municipal septic and sewer systems. With Licensing and training through the MPCA and the U of M you can be assured that all services will be performed legally and up to state codes.")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(O,{src:a(44),alt:"Features split 01",width:528,height:396})))))))};Q.defaultProps=$;var X=Q,Z=Object(A.a)({},T.defaults),ee=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("testimonial-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(K,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Customer"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Customer"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Customer")))))))))};ee.defaultProps=Z;var te=function(e){var t=e.className,a=e.children,n=e.labelHidden,l=e.id,i=Object(c.a)(e,["className","children","labelHidden","id"]),o=g()("form-label",n&&"screen-reader",t);return r.a.createElement("label",Object.assign({},i,{className:o,htmlFor:l}),a)};te.defaultProps={children:null,labelHidden:!1,id:null};var ae=te,ne=function(e){var t=e.children,a=e.className,n=e.status,l=Object(c.a)(e,["children","className","status"]),i=g()("form-hint",n&&"text-color-".concat(n),a);return r.a.createElement("div",Object.assign({},l,{className:i}),t)};ne.defaultProps={children:null,status:!1};var re=ne,le=function(e){var t=e.className,a=e.children,n=e.label,l=e.labelHidden,i=e.type,o=e.name,s=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,h=e.placeholder,b=e.rows,f=e.hint,E=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),y=g()("form-input",p&&"form-input-".concat(p),s&&"form-".concat(s),t),O="textarea"===i?"textarea":"input";return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(ae,{labelHidden:l,id:E.id},n),r.a.createElement("div",{className:N},r.a.createElement(O,Object.assign({},E,{type:"textarea"!==i?i:null,className:y,name:o,disabled:m,value:d,placeholder:h,rows:"textarea"===i?b:null})),a),f&&r.a.createElement(re,{status:s},f))};le.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ie=Object(A.a)({},S.defaults,{split:!1}),oe=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("cta-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"Have a Question?")),r.a.createElement("div",{className:"cta-action",style:{marginBottom:"-20px"}},r.a.createElement("p",{style:{color:"white",marginTop:"5px"}},r.a.createElement(q.a,{icon:z.a})," Cedar.septic@gmail.com",r.a.createElement("br",null),r.a.createElement(q.a,{icon:z.b})," 763-218-8722")))))};oe.defaultProps=ie;var se=oe,ce=Object(A.a)({},T.defaults),me=function(e){var t=e.className,n=e.topOuterDivider,l=e.bottomOuterDivider,i=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("testimonial section",n&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),p=g()("testimonial-inner section-inner",i&&"has-top-divider",o&&"has-bottom-divider");g()("tiles-wrap",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement("div",{"data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement(O,{className:"has-shadow",src:a(45),alt:"Hero",width:896,height:504})),r.a.createElement(K,{data:{title:"Service Area",paragraph:"We offer service to these counties:"},className:"center-content"}),r.a.createElement("div",{style:{marginTop:"0px"},className:"center-content"},r.a.createElement("div",{className:"container-xs",style:{color:"white"}},"Anoka County",r.a.createElement("br",null)," Isanti County",r.a.createElement("br",null),"Ramsey County",r.a.createElement("br",null),"Chisago County",r.a.createElement("br",null),"Washington County",r.a.createElement("br",null),"Hennepin County",r.a.createElement("br",null),"Sherburne County",r.a.createElement("br",null),"Mille Lacs County",r.a.createElement("br",null),"Kannabec County",r.a.createElement("br",null)," Pine County")))))};me.defaultProps=ce;var de=me,ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{className:"illustration-section-01"}),r.a.createElement(V,null),r.a.createElement(de,{topDivider:!0}),r.a.createElement(X,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(se,{split:!0}))},ve=a(19),pe=Object(A.a)({},T.defaults),he=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("features-tiles section",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("testimonial-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider");g()("tiles-wrap center-content",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{paddingTop:"0px"},className:v},r.a.createElement("div",{className:"center-content"},r.a.createElement("div",{className:"container-xs"},r.a.createElement(ve.a,{striped:!0,variant:"success",now:40}),r.a.createElement("h3",null,"Just a few questions!"),r.a.createElement("p",{className:"m-0",style:{textAlign:"left"}},"Do you want to be home for the service?",r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male"}),r.a.createElement("label",{for:"male"},"\xa0Yes"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),r.a.createElement("label",{for:"male"}," \xa0No"))),r.a.createElement("p",{className:"m-0",style:{textAlign:"left"}},"Do you want the servicing to be done in the morning or afternoon?",r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male"}),r.a.createElement("label",{for:"male"},"\xa0Morning"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),r.a.createElement("label",{for:"male"}," \xa0Afternoon"))),r.a.createElement("p",{className:"m-0",style:{textAlign:"left"}},"Do you have pets?",r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male"}),r.a.createElement("label",{for:"male"},"\xa0Yes"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),r.a.createElement("label",{for:"male"}," \xa0No"))),r.a.createElement("p",{className:"m-0",style:{textAlign:"left"}},"What side of the house is your tank(s) located on?",r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male"}),r.a.createElement("label",{for:"male"},"\xa0Right"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),r.a.createElement("label",{for:"male"}," \xa0Left"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),r.a.createElement("label",{for:"male"}," \xa0Front"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),r.a.createElement("label",{for:"male"}," \xa0Back"))),r.a.createElement("p",{className:"m-0",style:{textAlign:"left"}},"Is your tank(s) visible?",r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male"}),r.a.createElement("label",{for:"male"},"\xa0Yes"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),r.a.createElement("label",{for:"male"}," \xa0No"))))))))};he.defaultProps=pe;var be=he,fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(be,null))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Ee=function(){var e=Object(n.useRef)(),t=Object(o.f)();return Object(n.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),r.a.createElement(b,{ref:e,children:function(){return r.a.createElement(o.c,null,r.a.createElement(m,{exact:!0,path:"/",component:ue,layout:L}),r.a.createElement(m,{exact:!0,path:"/booking",component:fe,layout:L}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46),a(47);var ge=Object(s.a)();i.a.render(r.a.createElement(o.b,{history:ge},r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.27127676.chunk.js.map