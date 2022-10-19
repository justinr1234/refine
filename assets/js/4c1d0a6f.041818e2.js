"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(29403);const l={id:"image",title:"Image"},o=void 0,s={unversionedId:"api-references/components/fields/image",id:"version-2.xx.xx/api-references/components/fields/image",title:"Image",description:"This field is used to display images and uses `` from Ant Design.",source:"@site/versioned_docs/version-2.xx.xx/api-references/components/fields/image.md",sourceDirName:"api-references/components/fields",slug:"/api-references/components/fields/image",permalink:"/docs/2.xx.xx/api-references/components/fields/image",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/fields/image.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"Nov 9, 2021",frontMatter:{id:"image",title:"Image"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Url",permalink:"/docs/2.xx.xx/api-references/components/fields/url"},next:{title:"File",permalink:"/docs/2.xx.xx/api-references/components/fields/file"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This field is used to display images and uses ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/image/#header"},(0,a.kt)("inlineCode",{parentName:"a"},"<Image>"))," from Ant Design."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImageField>")," with the example in the edit page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { \n    List,\n    Table,\n    // highlight-next-line\n    ImageField,\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List>\n            <Table<IPost> rowKey="id">\n                <Table.Column<IPost>\n                    title="Image"\n                    dataIndex="image"\n                    render={(_, record) => (\n                        // highlight-start\n                        <ImageField\n                            value={record.image[0].url}\n                            title={record.image[0].name}\n                            width={200}\n                        />\n                        // highlight-end\n                    )}\n                />\n                <Table.Column\n                    dataIndex="title"\n                    title="Title"\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    image: [\n        {\n            url: string;\n            name: string;\n        },\n    ];\n}\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"ImageField"})),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},"Image path"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"imageTitle"),(0,a.kt)("td",{parentName:"tr",align:null},"Image title value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ImageProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,a.kt)("inlineCode",{parentName:"td"},"<Image>")," properties"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/image/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"ImageProps"))),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0},29403:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/imageField-1065b6dc66dba6244394c79cc4164a6c.png"}}]);