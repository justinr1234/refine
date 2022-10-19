"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,h=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"useNavigation",title:"useNavigation"},i=void 0,l={unversionedId:"api-references/hooks/navigation/useNavigation",id:"version-2.xx.xx/api-references/hooks/navigation/useNavigation",title:"useNavigation",description:"refine uses routerProvider and comes with all redirects out of the box. It allows you to manage your routing operations in refine. Using this hook, you can manage all the routing operations of your application very easily.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/navigation/useNavigation.md",sourceDirName:"api-references/hooks/navigation",slug:"/api-references/hooks/navigation/useNavigation",permalink:"/docs/2.xx.xx/api-references/hooks/navigation/useNavigation",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/navigation/useNavigation.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"Nov 9, 2021",frontMatter:{id:"useNavigation",title:"useNavigation"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useResourceWithRoute",permalink:"/docs/2.xx.xx/api-references/hooks/resource/useResourceWithRoute"},next:{title:"useImport",permalink:"/docs/2.xx.xx/api-references/hooks/import-export/useImport"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"List",id:"list",level:2},{value:"Create",id:"create",level:3},{value:"Edit",id:"edit",level:3},{value:"Show",id:"show",level:3},{value:"Clone",id:"clone",level:3},{value:"Push, Replace and GoBack",id:"push-replace-and-goback",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Interface",id:"interface",level:4}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider"))," and comes with all redirects out of the box. It allows you to manage your routing operations in refine. Using this hook, you can manage all the routing operations of your application very easily."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine";\n\nconst { create, edit, clone, show, list, push, replace, goBack } = useNavigation();\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),".")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We will make a button for each method to use."),(0,r.kt)("h2",{id:"list"},"List"),(0,r.kt)("p",null,"Let's imagine that we have a post list and we want to be redirected to this page. To do this we will use the list hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyListButton = () => {\n// highlight-next-line\n    const { list } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                list("posts")\n            }\n        >\n            Navigate to Post List Page\n        </Button>\n    );\n};\n')),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"If we want to go to the post creation page to create a new post, we can use the create hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyCreateButton = () => {\n// highlight-next-line\n    const { create } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                create("posts")\n            }\n        >\n            Navigate to Create Page\n        </Button>\n    );\n};\n')),(0,r.kt)("h3",{id:"edit"},"Edit"),(0,r.kt)("p",null,"Let's see what we should do if we want to go to the editing page of one of our posts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyEditButton = () => {\n// highlight-next-line\n    const { edit } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                edit("posts", "1")\n            }\n        >\n            Navigate to Edit Page\n        </Button>\n    );\n};\n')),(0,r.kt)("p",null,"We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," to navigate to the post edit page, but you can see the differences in using it. ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," requires the id property from us and clicking the button will trigger the edit method of useNavigation and then redirect the app to ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/edit/1")),(0,r.kt)("admonition",{title:"Attention",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There is something we should pay attention to here. We need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of which post we want to edit.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property to the methods. You can look here to see the ",(0,r.kt)("a",{parentName:"p",href:"#properties"},"properties."))),(0,r.kt)("h3",{id:"show"},"Show"),(0,r.kt)("p",null,"If you want to show the detail of your posts you can use show and you need ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for show."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyShowButton = () => {\n// highlight-next-line\n    const { show } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                show("posts", "1")\n            }\n        >\n            Navigate to Show Page\n        </Button>\n    );\n};\n')),(0,r.kt)("admonition",{title:"Attention",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There is something we should pay attention to here. We need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of which post we want to show.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to return to previous page. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," hook.")),(0,r.kt)("h3",{id:"clone"},"Clone"),(0,r.kt)("p",null,"If we have the resources to clone a post and we want to go to this page, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," with a record id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyCloneButton = () => {\n// highlight-next-line\n    const { clone } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                clone("posts", "1")\n            }\n        >\n            Navigate to Clone Page\n        </Button>\n    );\n};\n')),(0,r.kt)("admonition",{title:"Attention",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There is something we should pay attention to here. We need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of which post we want to clone.")),(0,r.kt)("h3",{id:"push-replace-and-goback"},"Push, Replace and GoBack"),(0,r.kt)("p",null,"If we do not want to use the above methods and want to redirect ourselves, we should use ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," methods and also we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," to return to previous page. You can check out the differences between them ",(0,r.kt)("a",{parentName:"p",href:"#return-values"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyHistoryButtons = () => {\n// highlight-next-line\n    const { push, replace, goBack } = useNavigation();\n\n    return (\n        <>\n            <Button\n                onClick={(): void =>\n// highlight-next-line\n                    push("posts")\n                }\n            >\n                Push to posts Page\n            </Button>\n            <Button\n                onClick={(): void =>\n// highlight-next-line\n                    replace("posts")\n                }\n            >\n                Replaces to posts Page\n            </Button>\n            <Button\n                onClick={(): void =>\n// highlight-next-line\n                    goBack()\n                }\n            >\n                Go back to previous Page\n            </Button>\n        </>\n    );\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource ",(0,r.kt)("div",{className:"required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"Redirect the app to the given resource name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"It is ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider"))," history types"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"push"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"It is used to append to the end of the path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"create page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},") => void "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"list page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},") => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edit"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"edit page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},", id: string) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clone"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"clone page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},", id: string) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"show page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},", id: string) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"push"),(0,r.kt)("td",{parentName:"tr",align:null},"Pushes a new entry onto the history stack"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(path: string, state?: unknown ) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace"),(0,r.kt)("td",{parentName:"tr",align:null},"Replaces the current entry on the history stack"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(path: string, state?: unknown ) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"goBack"),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to go previous stack"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,r.kt)("h4",{id:"interface"},"Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="History Type"',title:'"History','Type"':!0},'export type HistoryType = "push" | "replace";\n')))}d.isMDXComponent=!0}}]);