"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={id:"import-button",title:"Import",swizzle:!0},i=void 0,p={unversionedId:"api-reference/antd/components/buttons/import-button",id:"api-reference/antd/components/buttons/import-button",title:"Import",description:"` is compatible with the useImport` hook and is meant to be used as it's upload button.",source:"@site/docs/api-reference/antd/components/buttons/import.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/import-button",permalink:"/docs/api-reference/antd/components/buttons/import-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/buttons/import.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681107826,formattedLastUpdatedAt:"Apr 10, 2023",frontMatter:{id:"import-button",title:"Import",swizzle:!0},sidebar:"someSidebar",previous:{title:"Export",permalink:"/docs/api-reference/antd/components/buttons/export-button"},next:{title:"List",permalink:"/docs/api-reference/antd/components/buttons/list-button"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ImportButton>")," is compatible with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/import/useImport"},(0,r.kt)("inlineCode",{parentName:"a"},"useImport"))," hook and is meant to be used as it's upload button.\nIt uses Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Upload>"))," components. It wraps a ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component with an ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Upload>"))," component and accepts properties for ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Upload>"))," components separately."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'import {\n    List,\n    useTable,\n    // highlight-start\n    useImport,\n    ImportButton,\n    // highlight-end\n} from "@refinedev/antd";\nimport { Table } from "antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    // highlight-next-line\n    const importProps = useImport<IPostFile>();\n\n    return (\n        <List\n            headerButtons={\n                // highlight-next-line\n                <ImportButton {...importProps} />\n            }\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n\ninterface IPostFile {\n    title: string;\n    categoryId: number;\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ImportButton, useImport } from "@refinedev/antd";\n\nconst MyImportComponent = () => {\n    const importProps = useImport();\n\n    return (\n        <ImportButton\n            {...importProps}\n            // highlight-next-line\n            hideText\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: MyImportComponent,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(c,{module:"@refinedev/antd/ImportButton",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);