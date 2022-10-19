"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58361],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),u=c,m=f["".concat(i,".").concat(u)]||f[u]||d[u]||a;return t?n.createElement(m,o(o({ref:r},l),{},{components:t})):n.createElement(m,o({ref:r},l))}));function u(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:c,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},17460:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),c=(t(67294),t(3905));const a={id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>"},o=void 0,s={unversionedId:"api-reference/core/components/accessControl/can-access",id:"api-reference/core/components/accessControl/can-access",title:"<CanAccess>",description:"` is a wrapper component that uses useCan to check for access control. It takes the parameters that can method takes and also a fallback. It renders its children if the access control returns true and if access control returns false renders fallback` if provided.",source:"@site/docs/api-reference/core/components/accessControl/canAccess.md",sourceDirName:"api-reference/core/components/accessControl",slug:"/api-reference/core/components/accessControl/can-access",permalink:"/docs/api-reference/core/components/accessControl/can-access",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/components/accessControl/canAccess.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1665636583,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>"},sidebar:"someSidebar",previous:{title:"<Authenticated>",permalink:"/docs/api-reference/core/components/auth/authenticated"},next:{title:"Interface References",permalink:"/docs/api-reference/core/interfaceReferences"}},i={},p=[{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],l=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)});var d;const f={toc:p};function u(e){let{components:r,...t}=e;return(0,c.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," is a wrapper component that uses ",(0,c.kt)("inlineCode",{parentName:"p"},"useCan")," to check for access control. It takes the parameters that ",(0,c.kt)("inlineCode",{parentName:"p"},"can")," method takes and also a ",(0,c.kt)("inlineCode",{parentName:"p"},"fallback"),". It renders its children if the access control returns true and if access control returns false renders ",(0,c.kt)("inlineCode",{parentName:"p"},"fallback")," if provided."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@pankod/refine-core";\n<CanAccess\n    resource="posts"\n    action="edit"\n    params={{ id: 1 }}\n    fallback={<CustomFallback />}\n>\n    <YourComponent />\n</CanAccess>\n')),(0,c.kt)("h2",{id:"api-reference"},"API Reference"),(0,c.kt)("h3",{id:"properties"},"Properties"),(0,c.kt)(l,{module:"@pankod/refine-core/CanAccess",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);