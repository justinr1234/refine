"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,f=u["".concat(s,".").concat(g)]||u[g]||p[g]||o;return n?i.createElement(f,a(a({ref:t},m),{},{components:n})):i.createElement(f,a({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));n(45500),n(89103),n(12131),n(11945),n(85633),n(50065),n(30687);const o={title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-invoice-generator",authors:"melih",tags:["refine","invoice-generator","react","admin-panel","business-tool","internal-tool","strapi"],image:"/img/placeholder.png",hide_table_of_contents:!1},a=void 0,l={permalink:"/blog/refine-invoice-generator",source:"@site/blog/2022-03-01-refine-invoice-genarator-p2.md",title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"invoice-generator",permalink:"/blog/tags/invoice-generator"},{label:"react",permalink:"/blog/tags/react"},{label:"admin-panel",permalink:"/blog/tags/admin-panel"},{label:"business-tool",permalink:"/blog/tags/business-tool"},{label:"internal-tool",permalink:"/blog/tags/internal-tool"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:13.925,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-invoice-generator",authors:"melih",tags:["refine","invoice-generator","react","admin-panel","business-tool","internal-tool","strapi"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks"},nextItem:{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator"},relatedPosts:[{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro",formattedDate:"November 29, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.13,date:"2021-11-29T00:00:00.000Z"},{title:"How to use Material UI Tooltip",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.54,date:"2022-11-29T00:00:00.000Z"},{title:"refine swag store is now open!",permalink:"/blog/refine-swag-store",formattedDate:"September 8, 2022",authors:[{name:"Eren Erkalkan",title:"Co-Founder, refine",url:"https://github.com/piyerro",imageURL:"https://github.com/piyerro.png",key:"eren_erkalkan"}],readingTime:3.105,date:"2022-09-08T00:00:00.000Z"}],authorPosts:[{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.485,date:"2022-04-29T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.61,date:"2022-03-16T00:00:00.000Z"},{title:"Web3 with Refine",permalink:"/blog/web3-with-refine",formattedDate:"December 13, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:1.72,date:"2021-12-13T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Looking for an invoice generator that is easy to use and lets you customize your invoices? With ",(0,r.kt)("strong",{parentName:"p"},"refine")," simple and intuitive interface, you can create your own invoices in few hours. Plus, we offer a wide range of templates and customization options so you can get the exact look you want. Learn more about our invoice generator here!"))}p.isMDXComponent=!0},50065:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create_invoice-1fea3319376b91c87df02155a41daa61.gif"},89103:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/invoice-8cc31443f1fda1f551fa0fd98e5b7808.png"},85633:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/invoice_list-c6e5dd83da8ecaaf615a26e41430ec71.png"},30687:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/invoice_pdf-b7e71f80ad5b428f96c50e5ab0bf1786.gif"},11945:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mission_create-80142ab013515bdef2dca9750f34c38d.gif"},12131:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mission_page-df94d088af1d9b3739d87c6f5a8a006f.png"},45500:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/missions-388352122ef6884947aeca071894bf9e.png"}}]);