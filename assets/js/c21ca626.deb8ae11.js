"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"useResourceWithRoute",title:"useResourceWithRoute"},i=void 0,s={unversionedId:"api-references/hooks/resource/useResourceWithRoute",id:"version-2.xx.xx/api-references/hooks/resource/useResourceWithRoute",title:"useResourceWithRoute",description:"useResourceWithRoute is used to get the properties of a resource defined as a element of the resources. It returns a function and this function allows us to access the resource with the route option we gave to the resource.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/resource/useResourceWithRoute.md",sourceDirName:"api-references/hooks/resource",slug:"/api-references/hooks/resource/useResourceWithRoute",permalink:"/docs/2.xx.xx/api-references/hooks/resource/useResourceWithRoute",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/resource/useResourceWithRoute.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"Nov 9, 2021",frontMatter:{id:"useResourceWithRoute",title:"useResourceWithRoute"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useResource",permalink:"/docs/2.xx.xx/api-references/hooks/resource/useResource"},next:{title:"useNavigation",permalink:"/docs/2.xx.xx/api-references/hooks/navigation/useNavigation"}},u={},c=[{value:"API Reference",id:"api-reference",level:2},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useResourceWithRoute")," is used to get the properties of a resource defined as a element of the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),". It returns a function and this function allows us to access the resource with the ",(0,o.kt)("inlineCode",{parentName:"p"},"route")," option we gave to the resource."),(0,o.kt)("p",null,"The hook is used internal in ",(0,o.kt)("strong",{parentName:"p"},"refine"),". Normally you don't need this hook, but we export it as it may be useful for some use-cases."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResourceWithRoute } from "@pankod/refine";\n\nconst resourceWithRoute = useResourceWithRoute();\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"return-value"},"Return value"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resourceWithRoute"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(route: string) => IResourceItem"))))),(0,o.kt)("h4",{id:"interfaces"},"Interfaces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceItem {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"canShow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," property in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")))}p.isMDXComponent=!0}}]);