"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(87511);const i={id:"url",title:"Url"},l=void 0,s={unversionedId:"api-reference/antd/components/fields/url",id:"api-reference/antd/components/fields/url",title:"Url",description:"This field lets you embed a link. It uses Ant Design's  component. You can pass a URL in its value prop and you can show a text in its place by passing any children.",source:"@site/docs/api-reference/antd/components/fields/url.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/url",permalink:"/docs/api-reference/antd/components/fields/url",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/fields/url.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1666001046,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{id:"url",title:"Url"},sidebar:"someSidebar",previous:{title:"Text",permalink:"/docs/api-reference/antd/components/fields/text"},next:{title:"<FilterDropdown>",permalink:"/docs/api-reference/antd/components/filter-dropdown"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const f={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This field lets you embed a link. It uses Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/"},"<Typography.Link",">")," component. You can pass a URL in its ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop and you can show a text in its place by passing any ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<UrlField>")," with an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import {\n    List,\n    Table,\n    useTable,\n    // highlight-next-line\n    UrlField \n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column\n                    dataIndex="title"\n                    title="Title"\n                    key="title"\n                />\n                <Table.Column\n                    dataIndex={["image", "0", "url"]}\n                    title={"Image"}\n                    key="image"\n                    // highlight-next-line\n                    render={(value: string) => <UrlField value={value} />}\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    title: string;\n    image: IImage[];\n}\n\ninterface IImage {\n    url: string;\n}\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o.Z,alt:"UrlField"})),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(d,{module:"@pankod/refine-antd/UrlField","value-description":"URL for link to reference to",mdxType:"PropsTable"}),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/#How-to-use-Typography.Link-in-react-router"},"Link"),".")))}m.isMDXComponent=!0},87511:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/urlField-d72eb5e634bf1dfbb33cd34b4fd5ab9f.png"}}]);