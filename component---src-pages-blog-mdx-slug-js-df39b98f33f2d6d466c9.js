(self.webpackChunkyoon_s_blog=self.webpackChunkyoon_s_blog||[]).push([[853],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function i(t,r,l){return o()?(e.exports=i=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),i=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||i(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),o=r(319),i=r(9713),l=r(7316),c=["scope","children"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),s=r(4983).mdx,d=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=l(e,c),a=d(t),m=p.useMemo((function(){if(!r)return null;var e=u({React:p,mdx:s},a),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,t]);return p.createElement(m,u({},i))}},9845:function(e,t,r){"use strict";r.d(t,{Ir:function(){return n},Zt:function(){return o},Y5:function(){return i}});var n="rgb(0, 0, 0)",o="#1c7ed6",i="#d0ebff"},3911:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),o=r(5444),i={display:"flex",flexDirection:"column",padding:"50px 0"},l={display:"flex",justifyContent:"center"},c={marginRight:"1rem",position:"relative"},a={fontSize:".8rem",color:"grey",textAlign:"center"};function u(e){e.preventDefault(),window.location="mailto:yoontopia94@gmail.com"}var p=function(){return n.createElement("footer",{style:i},n.createElement("section",{style:l},n.createElement(o.Link,{to:"https://github.com/YoonHan",style:c},n.createElement("img",{alt:"GitHub",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="})),n.createElement(o.Link,{to:"#",style:c,onClick:u},n.createElement("img",{alt:"Gmail",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMaSURBVFiF7ZZNTFxVFMd/584MA1JKpaYMbWja2BAghobyUV2gTUjdtImhMZUFYmJrNBJDCgtpIJE0NgIxFZs2KqmJNi7oqsSEDTEhuNBYpYE2FdOEhQtDaYx8iM4w8947LibYeTwGZ5ChG/67+86953fu/9x334NtPWaJdmOWxmrKTONrwdgrTbIV0MCNr9QZ/HJ5xws/TslCfe0Q8BLCX3Km5QEnGp7OJFyHh37l8ytPoeQq3JSF+loL8K1MkKqjD2jvDJHzxOaSw3/DpQ8e6k/f70l4aptEOICO/xDi7eYwv9zbPPj0fZx3Xg+vggP4ZLqmQgvystUI7v4bo3K6STjdBGI2BlaF4SH0i08dbNu4Q8off0aRuxXl6jeG3TuDBAM+Tw6pOAKt70LB7vTgi/Po5T4Yv+UJRS2b3xeXsWwHE3oyh525WUSiNrE9exVxG6F3bqPtb8HEeOrwiXG09Q0vXIRIqJjZ+TCW7QBgsvw+dmT7yc/NIlAUEt7rgV0F6lo4P4de6ECvXQUrlhxs23DjOnrhPMzPuTeSl490vs9idh6akN3TXDlchfQPCEdq3QFVGL6JdrTCzG9e+MNZtKsNHbwO6rhzVlRi+geg6qhn2dqnK38X0nUROdMC/oA7Nn0/3pKxbx7V9t23aNubeN4cnw9pbIbu3qRnyL/mUwARONmAlJShly7C7MyjWDiM9vfA5O34eHTEu76wCGnrhJLSpAhI5kCiSkqRjwbg+XpvbHRkTbg8V4d8+Ml/wmE9BxKVk4OcOw+V1ehnH0Mksva8YBBpOgsnG1JKC6k4kKhjx+M7O3jIG9t/AOm7khY8/QIA9hUjvZeRU43xG1IEefEE0ncV9h9MO11qLVitQBa8ehYpeyY+rn52Q2k8BQg4pOPK/wCvyA2z7XWuuczI/YWyrGjGiY7j2uSWO6Cx2HLSAsSxM+7AapdXt+DxOoAVy/wZsLwF2CsDsbegBdHEAsQ2Cl//O45tgQOuFuiQP7/u1stLYzVlNibbKSxyxHE2+Aeamvx7C53Y7IzxGRMpn/x5KpOsbaWkfwBJqxkgXYqJRgAAAABJRU5ErkJggg=="}))),n.createElement("p",{style:a},"© 2022 Yoon Han."))}},8691:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r(7294),o=r(1274),i=r(4983),l=r(5444),c=r(9845),a=r(3911),u={marginTop:"2rem",position:"relative",borderBottom:"1px solid lightgrey",paddingBottom:".5rem"},p={marginTop:"2rem",position:"relative",borderBottom:"1px solid lightgrey",paddingBottom:".5rem"},s={lineHeight:"1.7rem"},d={margin:"1rem 0"},m={textDecoration:"none"},f={backgroundColor:"#e7f5ff",color:"#339af0",fontSize:"1rem",borderRadius:"6px",padding:"2px 4px"},g={color:"black",backgroundColor:"rgba(0, 0, 0, 0.04)",display:"block",borderRadius:"12px",margin:0,paddingBlockStart:"1em",paddingBlockEnd:"1em",paddingInlineStart:"40px",paddingInlineEnd:"40px"},b={width:"10px",height:"1.5rem",backgroundColor:c.Zt,display:"inline-block",marginRight:".5rem"},A={width:"10px",height:"1.5rem",backgroundColor:"black",display:"inline-block",marginRight:".5rem"},x={border:"1px solid lightgrey",borderRadius:".5rem",borderCollapse:"collapse"},y={border:"1px solid lightgrey",padding:".4rem .8rem",backgroundColor:"#EEEEEE"},h={border:"1px solid lightgrey",padding:".4rem .8rem"};var E={h2:function(e){return n.createElement("h2",{style:u},n.createElement("div",{style:b}),e.children)},h3:function(e){return n.createElement("h3",{style:p},n.createElement("div",{style:A}),e.children)},p:function(e){return n.createElement("p",Object.assign({},e,{style:s}),e.children)},li:function(e){return n.createElement("li",Object.assign({},e,{style:d}))},blockquote:function(e){return n.createElement("blockquote",Object.assign({},e,{style:g}))},a:function(e){return n.createElement("a",Object.assign({},e,{style:m}),e.children)},strong:function(e){return n.createElement("strong",{style:f},e.children)},table:function(e){return n.createElement("table",{style:x},e.children)},th:function(e){return n.createElement("th",{style:y},e.children)},td:function(e){return n.createElement("td",{style:h},e.children)}},v={paddingTop:"48px",maxWidth:"68em",margin:"0px auto",position:"relative"},M=function(e){var t=e.backButtonHover;return{border:t?"1px solid lightgrey":"",borderRadius:"6px",padding:"8px 16px",backgroundColor:t?"#ffffff":c.Zt,color:t?"#000000":"#ffffff",fontWeight:"bold",textDecoration:"none",transition:"background-color .2s, color .2s"}},B=function(e){var t=e.moveToTopButtonHover;return{position:"fixed",bottom:"48px",width:"50px",height:"50px",cursor:"pointer",marginLeft:"920px",transition:"background-color .2s, color .2s",border:t?"1px solid lightgrey":"none",borderRadius:"15px",boxShadow:"1px 1px 2px 1px lightgrey",color:"#000000",backgroundColor:t?"#ffffff":"#f1f3f5",zIndex:"10"}},O={marginBottom:"0px"},k={color:"grey",marginTop:"8px",marginBottom:"30px"},w={fontSize:"1.1rem"},R=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},I=function(e){var t=e.data,r=n.useState(!1),c=r[0],u=r[1],p=n.useState(!1),s=p[0],d=p[1];return n.createElement("div",{className:"blog-post",style:v},n.createElement(l.Link,{to:"/",className:"back-button",role:"button",style:M({backButtonHover:c}),onPointerOver:function(){return u(!0)},onPointerOut:function(){return u(!1)}},"< 뒤로가기"),n.createElement("button",{style:B({moveToTopButtonHover:s}),onPointerOver:function(){return d(!0)},onPointerOut:function(){return d(!1)},onClick:R},"Top"),n.createElement("h1",{style:O},t.mdx.frontmatter.title),n.createElement("p",{style:k},t.mdx.frontmatter.publishedDate),n.createElement("div",{style:w},n.createElement(i.MDXProvider,{components:E},n.createElement(o.MDXRenderer,null,t.mdx.body))),n.createElement(a.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-js-df39b98f33f2d6d466c9.js.map