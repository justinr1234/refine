"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51933],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(i),u=a,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return i?n.createElement(h,l(l({ref:t},m),{},{components:i})):n.createElement(h,l({ref:t},m))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},46793:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const r={title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",slug:"web3-with-refine",authors:"melih",tags:["refine","web3","dapps","metamask","login-ethereum"],image:"/img/placeholder.png",hide_table_of_contents:!1},l=void 0,o={permalink:"/blog/web3-with-refine",source:"@site/blog/2021-12-13-web3-refine.md",title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"web3",permalink:"/blog/tags/web-3"},{label:"dapps",permalink:"/blog/tags/dapps"},{label:"metamask",permalink:"/blog/tags/metamask"},{label:"login-ethereum",permalink:"/blog/tags/login-ethereum"}],readingTime:1.68,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",slug:"web3-with-refine",authors:"melih",tags:["refine","web3","dapps","metamask","login-ethereum"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload"},nextItem:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro"},relatedPosts:[{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.64,date:"2022-07-21T00:00:00.000Z"},{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.555,date:"2021-10-25T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.745,date:"2022-03-01T00:00:00.000Z"}],authorPosts:[{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:10.915,date:"2022-02-14T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.68,date:"2022-02-21T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.73,date:"2021-12-27T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},s=[{value:"What is Web3?",id:"what-is-web3",level:2},{value:"What is dApps(Dapps)?",id:"what-is-dappsdapps",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],m={toc:s};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this article, we will talk about what is web3 and a simple ethereum wallet login application with ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("h2",{id:"what-is-web3"},"What is Web3?"),(0,a.kt)("p",null,"Web 3.0 eliminates intermediates. There\u2019s no centralized database that stores the application state."),(0,a.kt)("p",null,"In web3, developers don't usually build and deploy applications that run on a single server or that store their data in a single database.\nInstead of, Web3 applications run on blockchains, decentralized networks of many peer to peer nodes"),(0,a.kt)("p",null,"Features provided by Web3:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verifiable"),(0,a.kt)("li",{parentName:"ul"},"Self-governing"),(0,a.kt)("li",{parentName:"ul"},"Permissionless"),(0,a.kt)("li",{parentName:"ul"},"Stateful"),(0,a.kt)("li",{parentName:"ul"},"Trustless"),(0,a.kt)("li",{parentName:"ul"},"Native built-in payments"),(0,a.kt)("li",{parentName:"ul"},"Anonymity")),(0,a.kt)("h2",{id:"what-is-dappsdapps"},"What is dApps(Dapps)?"),(0,a.kt)("p",null,'Dapps is short for "Decentralized Applications" and refers to any application that is decentralized in nature, built on a blockchain, and may use tokens for transactions.'),(0,a.kt)("p",null,"Dapps is just like any other software application you use. It could be a website or an app on your phone. What makes a Dapp different than a traditional app is that it's built on a decentralized network, like Ethereum."),(0,a.kt)("p",null,"Many applications on the logic of dApp have been developed and continue to be developed."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/dapps/"},"Here you can browse some dapps")),(0,a.kt)("p",null,"We have developed a simple app where you can login with ethereum and send ethereum over the network using Metamask Wallet and ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("p",null,"This application allows you to login with your web3 wallet and you can also send ethereum over the ethereum network."),(0,a.kt)("p",null,"This example is simple intro to dApps development  built with web3 and ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-12-13-web3-refine/login.gif",alt:"login"})),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-12-13-web3-refine/overview.gif",alt:"overview"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"You can develop many fast and functional dApps using web3 and ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/with-web3"},"View Source")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/web3/ethereum-signin/"},"View Guide")),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/signin-with-ethereum-umho3?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"signin-with-ethereum",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0}}]);