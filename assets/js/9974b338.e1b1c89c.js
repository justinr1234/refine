"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return r?a.createElement(f,p(p({ref:t},d),{},{components:r})):a.createElement(f,p({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={id:"appwrite",title:"Appwrite","example-tags":["antd","data-provider","appwrite"]},p=void 0,i={unversionedId:"examples/data-provider/appwrite",id:"examples/data-provider/appwrite",title:"Appwrite",description:"Connect your Appwrite database with refine Appwrite Data Provider and take advantage of the features that allow you to list, filter or create data in it. refine also supports Realt-time updates from Appwrite Database! This example will show you how the refine Appwrite Data Provider works and is used.",source:"@site/docs/examples/data-provider/appwrite.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/appwrite",permalink:"/docs/examples/data-provider/appwrite",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/data-provider/appwrite.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1666175240,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"appwrite",title:"Appwrite","example-tags":["antd","data-provider","appwrite"]},sidebar:"someSidebar",previous:{title:"Altogic",permalink:"/docs/examples/data-provider/altogic"},next:{title:"Directus",permalink:"/docs/examples/data-provider/directus"}},l={},s=[],d={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Connect your ",(0,n.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite")," database with ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/data-provider/appwrite/"},(0,n.kt)("strong",{parentName:"a"},"refine")," Appwrite Data Provider")," and take advantage of the features that allow you to list, filter or create data in it. ",(0,n.kt)("strong",{parentName:"p"},"refine")," also supports Realt-time updates from Appwrite Database! This example will show you how the ",(0,n.kt)("strong",{parentName:"p"},"refine")," Appwrite Data Provider works and is used."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/dataProvider/appwrite"},"View Appwrite Example Source")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Username"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"demo@refine.dev"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Password"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"demodemo")),(0,n.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com/github/refinedev/refine/tree/master/examples/dataProvider/appwrite?embed=1&view=preview&theme=dark&preset=node&ctl=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-appwrite-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0}}]);