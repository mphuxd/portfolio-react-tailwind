(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{296:function(e){function t(e,t,n){var r,o,i,s,c;function l(){var a=Date.now()-s;a<t&&a>=0?r=setTimeout(l,t-a):(r=null,n||(c=e.apply(i,o),i=o=null))}null==t&&(t=100);var a=function(){i=this,o=arguments,s=Date.now();var a=n&&!r;return r||(r=setTimeout(l,t)),a&&(c=e.apply(i,o),i=o=null),c};return a.clear=function(){r&&(clearTimeout(r),r=null)},a.flush=function(){r&&(c=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},a}t.debounce=t,e.exports=t},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8781)}])},8781:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),o=n(9008),i=n(417),s=n(6525);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var l=n(7294),a=n(9477);var u=function(e){return function(t){e.forEach((function(e){"function"===typeof e?e(t):null!=e&&(e.current=t)}))}},d=n(296),f=n.n(d);function m(e){let{debounce:t,scroll:n,polyfill:r,offsetSize:o}=void 0===e?{debounce:0,scroll:!1,offsetSize:!1}:e;const i=r||("undefined"===typeof window?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,c]=(0,l.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),a=(0,l.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s}),u=t?"number"===typeof t?t:t.scroll:null,d=t?"number"===typeof t?t:t.resize:null,m=(0,l.useRef)(!1);(0,l.useEffect)((()=>(m.current=!0,()=>{m.current=!1})));const[h,g,w]=(0,l.useMemo)((()=>{const e=()=>{if(!a.current.element)return;const{left:e,top:t,width:n,height:r,bottom:i,right:s,x:l,y:u}=a.current.element.getBoundingClientRect(),d={left:e,top:t,width:n,height:r,bottom:i,right:s,x:l,y:u};a.current.element instanceof HTMLElement&&o&&(d.height=a.current.element.offsetHeight,d.width=a.current.element.offsetWidth),Object.freeze(d),m.current&&!v(a.current.lastBounds,d)&&c(a.current.lastBounds=d)};return[e,d?f()(e,d):e,u?f()(e,u):e]}),[c,o,u,d]);function b(){a.current.scrollContainers&&(a.current.scrollContainers.forEach((e=>e.removeEventListener("scroll",w,!0))),a.current.scrollContainers=null),a.current.resizeObserver&&(a.current.resizeObserver.disconnect(),a.current.resizeObserver=null)}function y(){a.current.element&&(a.current.resizeObserver=new i(w),a.current.resizeObserver.observe(a.current.element),n&&a.current.scrollContainers&&a.current.scrollContainers.forEach((e=>e.addEventListener("scroll",w,{capture:!0,passive:!0}))))}var E,C,k;return E=w,C=Boolean(n),(0,l.useEffect)((()=>{if(C){const e=E;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}}),[E,C]),k=g,(0,l.useEffect)((()=>{const e=k;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[k]),(0,l.useEffect)((()=>{b(),y()}),[n,w,g]),(0,l.useEffect)((()=>b),[]),[e=>{e&&e!==a.current.element&&(b(),a.current.element=e,a.current.scrollContainers=p(e),y())},s,h]}function p(e){const t=[];if(!e||e===document.body)return t;const{overflow:n,overflowX:r,overflowY:o}=window.getComputedStyle(e);return[n,r,o].some((e=>"auto"===e||"scroll"===e))&&t.push(e),[...t,...p(e.parentElement)]}const h=["x","y","top","bottom","left","right","width","height"],v=(e,t)=>h.every((n=>e[n]===t[n]));n(2576),n(8448),n(3840);const g={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function w(e){const{handlePointer:t}=(0,s.c)(e);return{priority:1,enabled:!0,compute(e,t,n){t.pointer.set(e.offsetX/t.size.width*2-1,-e.offsetY/t.size.height*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)},connected:void 0,handlers:Object.keys(g).reduce(((e,n)=>({...e,[n]:t(n)})),{}),connect:t=>{var n;const{set:r,events:o}=e.getState();null==o.disconnect||o.disconnect(),r((e=>({events:{...e.events,connected:t}}))),Object.entries(null!=(n=null==o?void 0:o.handlers)?n:[]).forEach((([e,n])=>{const[r,o]=g[e];t.addEventListener(r,n,{passive:o})}))},disconnect:()=>{const{set:t,events:n}=e.getState();var r;n.connected&&(Object.entries(null!=(r=n.handlers)?r:[]).forEach((([e,t])=>{if(n&&n.connected instanceof HTMLElement){const[r]=g[e];n.connected.removeEventListener(r,t)}})),t((e=>({events:{...e.events,connected:void 0}}))))}}}const b=l.forwardRef((function({children:e,fallback:t,resize:n,style:r,gl:o,events:i=w,shadows:d,linear:f,flat:p,legacy:h,orthographic:v,frameloop:g,dpr:b,performance:y,raycaster:E,camera:C,onPointerMissed:k,onCreated:x,...j},z){l.useMemo((()=>(0,s.e)(a)),[]);const[M,{width:O,height:P}]=m({scroll:!0,debounce:{scroll:50,resize:0},...n}),L=l.useRef(null),S=l.useRef(null),[_,A]=l.useState(null),T=(0,s.u)(k),[R,H]=l.useState(!1),[N,B]=l.useState(!1);if(R)throw R;if(N)throw N;const D=l.useRef(null);return O>0&&P>0&&_&&(D.current||(D.current=(0,s.a)(_)),D.current.configure({gl:o,events:i,shadows:d,linear:f,flat:p,legacy:h,orthographic:v,frameloop:g,dpr:b,performance:y,raycaster:E,camera:C,size:{width:O,height:P},onPointerMissed:(...e)=>null==T.current?void 0:T.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(S.current),null==x||x(e)}}),D.current.render(l.createElement(s.E,{set:B},l.createElement(l.Suspense,{fallback:l.createElement(s.B,{set:H})},e)))),(0,s.b)((()=>{A(L.current)}),[]),l.useEffect((()=>{if(_)return()=>(0,s.d)(_)}),[_]),l.createElement("div",c({ref:u([S,M]),style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",...r}},j),l.createElement("canvas",{ref:u([L,z]),style:{display:"block"}},t))}));function y(){return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)(i.h_,{}),(0,r.jsx)("title",{children:"Matthew Pham Portfolio"})]}),(0,r.jsxs)(i.Ar,{children:[(0,r.jsx)(i.cY,{name:"Matthew Pham",title:"UX/UI Designer & Developer",src:"/videos/fluid_latest.mp4"}),(0,r.jsxs)("article",{id:"work",className:"article-section",children:[(0,r.jsx)(i.hS,{title:"Psi Chi Omega Fraternity Website",copy:"Corporate style website for an Asian-American interest fraternity to help member recruitment. Involves validation, user research, UX strategy, and branding with custom design system & UI designed in Figma. Developed with JAMstack, deployed on Heroku & Vercel. Independent project from start to finish.",imageSrc:"/images/pxo-website-image-nobg.png",imageAlt:"Mockup of Psi Chi Omega fraternity website on macbook laptop",imageWidth:2577,imageHeight:1611,imageBgColor:"bg-[#111111]",linkHref:"/case-study/psi-chi-omega",linkAlt:""}),(0,r.jsx)(i.FJ,{title:"Clear View Escapes Travel Website",copy:"Travel company website developed as part of an online web development course. Redesigned the website homepage for UX practice.",imageSrc:"/images/cs-travel-website/travel-website.png",imageAlt:"Clear View Escapes Homepage",imageTagID:"featured-image-blue",imageWidth:2577,imageHeight:1611,imageBGColor:"bg-[#2f5572]",linkHref:"/case-study/travel-website",linkAlt:"Read More",linkLabel:"View Case Study"}),(0,r.jsx)(i.n,{title:"About Me",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam in consequat, at adipiscing tristique amet sed vel. Molestie semper viverra et vulputate sit eu, varius. Massa magna enim enim gravida convallis turpis porta. Eget non gravida a mauris ultrices consectetur.",linkHref:"/about",linkAlt:"Go to About Me",linkLabel:"More About Me",geometry:(0,r.jsxs)(b,{className:"aspect-video",children:[(0,r.jsx)(i.cE,{}),(0,r.jsx)("spotLight",{color:"white",position:[1e3,1e3,1e3],castShadow:!0}),(0,r.jsx)(i.ZX,{})]})})]})]})]})}}},function(e){e.O(0,[737,239,417,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);