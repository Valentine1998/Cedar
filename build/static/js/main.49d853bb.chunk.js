(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{27:function(e,t,a){e.exports=a(45)},37:function(e,t,a){e.exports=a.p+"static/media/logo.7862b019.png"},38:function(e,t,a){e.exports=a.p+"static/media/sewer-truck.97be32d2.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/happy-fam.435c9da8.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/service-area.1feca288.PNG"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(24),n=a.n(l),o=a(11),s=a(6),c=a(3),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(o.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},d=a(10),u=a(1),v=a.n(u),p=a(21),b=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(d.a)(a,2),n=l[0],o=l[1],s=Object(i.useState)([]),c=Object(d.a)(s,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",h),window.addEventListener("resize",E)),b())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",h),window.removeEventListener("resize",E))},h=Object(p.throttle)((function(){f(),b()}),30),E=Object(p.throttle)((function(){o(window.innerHeight)}),30);return Object(i.useEffect)((function(){f(),b()}),[n]),r.a.createElement(r.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var f=b,h=a(17),E=a(2),g=a.n(E),N=a(7),O=function(e){var t=e.className,a=e.src,l=e.width,n=e.height,o=e.alt,s=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){f(b.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},s,{ref:b,className:t,src:a,width:l,height:n,alt:o,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var D=O,x=function(e){var t=e.className,i=Object(c.a)(e,["className"]),l=g()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(N.a,{to:"/"},r.a.createElement(D,{src:a(37),alt:"Open",width:85,height:120}))))},w=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,n=e.hideSignin,o=e.bottomOuterDivider,s=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],b=v[1],f=Object(i.useRef)(null),h=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",D),document.addEventListener("click",w),function(){document.removeEventListener("keydown",D),document.removeEventListener("click",w),O()}}));var E=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",b(!0)},O=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),b(!1)},D=function(e){p&&27===e.keyCode&&O()},w=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==h.current&&O()},j=g()("site-header",o&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:j}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-header-inner",s&&"has-bottom-divider")},r.a.createElement(x,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:h,className:"header-nav-toggle",onClick:p?O:E},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:f,className:g()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",onClick:O},"How We Do It")),r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",onClick:O},"Contact Us"))),!n&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:O},"Schedule a Service")))))))))};w.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var j=w,y=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"How it works")),r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"Contact")),r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"About us"))))},C=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(c.a)(e,["className","topOuterDivider","topDivider"]),n=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:n}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(x,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(y,null),r.a.createElement("div",{className:"footer-copyright"},"Made by ",r.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};C.defaultProps={topOuterDivider:!1,topDivider:!1};var k=C,L=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(k,null))},S=a(4),P={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},B={types:Object(S.a)({},P.types),defaults:Object(S.a)({},P.defaults)},H={types:Object(S.a)({},P.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(S.a)({},P.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},A={types:Object(S.a)({},P.types,{pushLeft:v.a.bool}),defaults:Object(S.a)({},P.defaults,{pushLeft:!1})},q=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},F=function(e){var t=e.className,a=e.tag,i=e.color,l=e.size,n=e.loading,o=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),l&&"button-".concat(l),n&&"is-loading",o&&"button-block",s&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};F.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var T=F,R=function(e){var t=e.className,a=e.children,l=e.handleClose,n=e.show,o=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},p=function(e){e.stopPropagation()},b=g()("modal",n&&"is-active",s&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",Object.assign({},d,{className:b,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:p},s?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:s})):r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};R.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var z=R,W=Object(S.a)({},B.defaults),M=function(e){var t=e.className,l=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(d.a)(p,2),f=b[0],h=b[1],E=g()("hero section center-content",l&&"has-top-divider",n&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),N=g()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:E}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:N},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Cedar ",r.a.createElement("span",{className:"text-color-primary"},"Septic and Sewer")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0  reveal-from-bottom","data-reveal-delay":"400"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."),r.a.createElement("p",{className:"m-0  reveal-from-bottom","data-reveal-delay":"400",style:{color:"white",fontWeight:"900",margin:"10px"}},"763-221-8722"),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(q,null,r.a.createElement(T,{tag:"a",color:"primary",wideMobile:!0,href:"#"},"Schedule a Service"))))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),h(!0)}},r.a.createElement(D,{className:"has-shadow",src:a(38),alt:"Hero",width:896,height:504}))),r.a.createElement(z,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),h(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};M.defaultProps=W;var _=M,I=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,n=Object(c.a)(e,["className","data","children","tag"]),o=g()("section-header",t),s=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},n,{className:o}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(s,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};I.defaultProps={children:null,tag:"h2"};var G=I,U=a(13),K=a(14),V=Object(S.a)({},A.defaults),J=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("features-tiles section",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",n&&"has-bottom-divider"),p=g()("tiles-wrap center-content",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(G,{data:{title:"Get It Done Fast",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{style:{fontWeight:"900",color:"white",padding:"20px 25px",borderRadius:"10px"},className:"features-tiles-item-image mb-16"},r.a.createElement(U.a,{icon:K.a,style:{fontSize:"50px"}}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Step 1"),r.a.createElement("h4",{className:"mt-0 pt-0 mb-8"},"Book Your Appointment"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{style:{fontWeight:"900",color:"white",padding:"20px 25px",borderRadius:"10px"},className:"features-tiles-item-image mb-16"},r.a.createElement(U.a,{icon:K.d,style:{fontSize:"50px"}}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Step 2"),r.a.createElement("h4",{className:"mt-0 mb-8"},"We Pump Your Septic"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{style:{fontWeight:"900",color:"white",padding:"20px 25px",borderRadius:"10px"},className:"features-tiles-item-image mb-16"},r.a.createElement(U.a,{icon:K.b,style:{fontSize:"50px"}}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Step 3"),r.a.createElement("h4",{className:"mt-0 mb-8"},"Completion Email"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."))))))))};J.defaultProps=V;var Y=J,Q=Object(S.a)({},H.defaults),$=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),f=g()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),h=g()("features-split-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},b,{className:f}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:h},r.a.createElement(G,{data:{title:"About Us",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Professional Service"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Family Owned"),r.a.createElement("p",{className:"m-0"},"What a happy family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(D,{src:a(42),alt:"Features split 01",width:528,height:396})))))))};$.defaultProps=Q;var X=$,Z=Object(S.a)({},A.defaults),ee=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("testimonial-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(G,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Customer"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Customer"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Customer")))))))))};ee.defaultProps=Z;var te=ee,ae=function(e){var t=e.className,a=e.children,i=e.labelHidden,l=e.id,n=Object(c.a)(e,["className","children","labelHidden","id"]),o=g()("form-label",i&&"screen-reader",t);return r.a.createElement("label",Object.assign({},n,{className:o,htmlFor:l}),a)};ae.defaultProps={children:null,labelHidden:!1,id:null};var ie=ae,re=function(e){var t=e.children,a=e.className,i=e.status,l=Object(c.a)(e,["children","className","status"]),n=g()("form-hint",i&&"text-color-".concat(i),a);return r.a.createElement("div",Object.assign({},l,{className:n}),t)};re.defaultProps={children:null,status:!1};var le=re,ne=function(e){var t=e.className,a=e.children,i=e.label,l=e.labelHidden,n=e.type,o=e.name,s=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,f=e.rows,h=e.hint,E=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=g()("form-input",p&&"form-input-".concat(p),s&&"form-".concat(s),t),D="textarea"===n?"textarea":"input";return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(ie,{labelHidden:l,id:E.id},i),r.a.createElement("div",{className:N},r.a.createElement(D,Object.assign({},E,{type:"textarea"!==n?n:null,className:O,name:o,disabled:m,value:d,placeholder:b,rows:"textarea"===n?f:null})),a),h&&r.a.createElement(le,{status:s},h))};ne.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var oe=Object(S.a)({},B.defaults,{split:!1}),se=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("cta-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"Have a Question?")),r.a.createElement("div",{className:"cta-action",style:{marginBottom:"-20px"}},r.a.createElement("p",{style:{color:"white",marginTop:"5px"}},r.a.createElement(U.a,{icon:K.b})," blanketyblank@gmail.com",r.a.createElement("br",null),r.a.createElement(U.a,{icon:K.c})," 763-221-8722")))))};se.defaultProps=oe;var ce=se,me=Object(S.a)({},A.defaults),de=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("testimonial section",i&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),p=g()("testimonial-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider");g()("tiles-wrap",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(G,{data:{title:"Service Area",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01 center-content","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal"},r.a.createElement(D,{className:"has-shadow",src:a(43),alt:"Hero",width:896,height:504}))))))};de.defaultProps=me;var ue=de,ve=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{className:"illustration-section-01"}),r.a.createElement(Y,null),r.a.createElement(ue,{topDivider:!0}),r.a.createElement(te,{topDivider:!0}),r.a.createElement(X,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(ce,{split:!0}))};h.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var pe=function(){var e=Object(i.useRef)(),t=Object(o.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){h.a.set({page:e}),h.a.pageview(e)}(a)}),[t]),r.a.createElement(f,{ref:e,children:function(){return r.a.createElement(o.c,null,r.a.createElement(m,{exact:!0,path:"/",component:ve,layout:L}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var be=Object(s.a)();n.a.render(r.a.createElement(o.b,{history:be},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.49d853bb.chunk.js.map