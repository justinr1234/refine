"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var n=r(87462),a=r(67294),i=r(3905),o=r(39960),l=r(44996);const s="card_DfEv",c=e=>{let{iconPath:t,title:r,direction:n}=e;return a.createElement(o.Z,{to:(0,l.Z)(n)},a.createElement("div",{className:s},a.createElement("img",{src:t,alt:"next.js"}),a.createElement("span",null,r)))},u={id:"tutorials",title:"Tutorials",sidebar_label:"Tutorials",slug:"/"},p=void 0,d={unversionedId:"tutorials",id:"tutorials",title:"Tutorials",description:"Introduction",source:"@site/docs/tutorials.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorials.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"tutorials",title:"Tutorials",sidebar_label:"Tutorials",slug:"/"},sidebar:"someSidebar",previous:{title:"Quick Start Guide",permalink:"/docs/getting-started/quickstart"},next:{title:"Your First App using Ant Design",permalink:"/docs/tutorials/ant-design-tutorial"}},m={},f=[{value:"Introduction",id:"introduction",level:2}],g={toc:f};function y(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"refine is a ",(0,i.kt)("strong",{parentName:"p"},"headless")," Framework, so it does not include UI Components by default."),(0,i.kt)("p",null,"There are two ways to add UI elements to refine;"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Using a ",(0,i.kt)("strong",{parentName:"li"},"UI Library")," such as ",(0,i.kt)("a",{parentName:"li",href:"https://tailwindcss.com/"},"Tailwind"),", ",(0,i.kt)("a",{parentName:"li",href:"https://chakra-ui.com/"},"Chakra UI"),", etc."),(0,i.kt)("li",{parentName:"ol"},"Using a complete ",(0,i.kt)("strong",{parentName:"li"},"UI Framework")," such as ",(0,i.kt)("a",{parentName:"li",href:"https://ant.design/"},"Ant Design"),", ",(0,i.kt)("a",{parentName:"li",href:"https://mui.com/"},"Material UI"),", etc.")),(0,i.kt)("p",null,"These tutorials will go through process of building a simple ",(0,i.kt)("em",{parentName:"p"},"admin panel")," for a ",(0,i.kt)("em",{parentName:"p"},"CMS-like")," application."),(0,i.kt)("p",null,"Step by step, you're going to learn how to consume a ",(0,i.kt)("em",{parentName:"p"},"REST API")," and add basic CRUD functionality to your panel leveraging the unique capabilities of ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("div",{className:"tutorial-cards"},(0,i.kt)(c,{iconPath:"/img/cra-tailwind.png",title:"Refine Core - Tailwind - CRA",direction:"/docs/tutorials/headless-tutorial",mdxType:"Card"}),(0,i.kt)(c,{iconPath:"/img/cra-antd.png",title:"Refine Core & Ant Design - CRA",direction:"/docs/tutorials/ant-design-tutorial",mdxType:"Card"})),(0,i.kt)("div",{className:"tutorial-cards-center"},(0,i.kt)(c,{iconPath:"/img/cra-mui.png",title:"Refine Core & Material UI - CRA",direction:"/docs/tutorials/material-ui-tutorial",mdxType:"Card"})))}y.isMDXComponent=!0}}]);