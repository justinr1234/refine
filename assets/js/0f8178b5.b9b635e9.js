"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),u=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(m,".").concat(d)]||p[d]||s[d]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react","mui","mui-button"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/mui-button-in-react",source:"@site/blog/2022-09-05-mui-button.md",title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"mui",permalink:"/blog/tags/mui"},{label:"mui-button",permalink:"/blog/tags/mui-button"}],readingTime:9.04,hasTruncateMarker:!0,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react","mui","mui-button"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},prevItem:{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills"},nextItem:{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component"},relatedPosts:[{title:"How to use Conditional Rendering in React",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.285,date:"2022-12-14T00:00:00.000Z"},{title:"Let's Build an App to Manage Your Hackathons with Refine",permalink:"/blog/manage-hackathons-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],readingTime:3.205,date:"2021-10-04T00:00:00.000Z"},{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering",formattedDate:"August 26, 2022",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:14.51,date:"2022-08-26T00:00:00.000Z"}],authorPosts:[{title:"How to use Material UI Select in React",permalink:"/blog/material-ui-select-component",formattedDate:"October 30, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.15,date:"2022-10-30T00:00:00.000Z"},{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"October 19, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.075,date:"2022-10-19T00:00:00.000Z"},{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.9,date:"2022-08-24T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Material UI is a dynamic React library because it provides numerous component infrastructures for responsive web design. One such essential component is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button"),". "),(0,r.kt)("p",null,"In this article, we will deeply explore the MUI ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," component, its variants, and the different ways it can be used in a React application."))}s.isMDXComponent=!0}}]);