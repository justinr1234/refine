"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"quickstart",title:"Quick Start Guide"},i=void 0,s={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start Guide",description:"The fastest way to get started with refine is using the superplate project starter tool.",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/getting-started/quickstart.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1666175240,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"quickstart",title:"Quick Start Guide"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/getting-started/overview"},next:{title:"Tutorials",permalink:"/docs/"}},p={},l=[{value:"Next Steps",id:"next-steps",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The fastest way to get started with ",(0,a.kt)("strong",{parentName:"p"},"refine")," is using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," project starter tool.\nRun the following command to create a new ",(0,a.kt)("strong",{parentName:"p"},"refine")," project configured with  ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design System")," as the default UI framework:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx superplate-cli --preset refine-antd my-project\n")),(0,a.kt)("p",null,"Once the setup is complete, navigate to the project folder and start your project with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,a.kt)("p",null,"Your ",(0,a.kt)("strong",{parentName:"p"},"refine")," application will be accessible at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),":\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/refinedev/refine/blob/master/documentation/static/img/welcome-on-board.png?raw=true",alt:"Welcome on board"}),"\nLet's consume a public ",(0,a.kt)("inlineCode",{parentName:"p"},"fake REST API")," and add two resources (",(0,a.kt)("em",{parentName:"p"},"posts"),", ",(0,a.kt)("em",{parentName:"p"},"categories"),") to our project. Replace the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'\nimport { Refine, useMany } from "@pankod/refine-core";\nimport {\n    useTable,\n    List,\n    Table,\n    DateField,\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts", list: PostList }]}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n        />\n    );\n};\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List>\n            <Table<IPost> {...tableProps} rowKey="id">\n                <Table.Column dataIndex="title" title="title" />\n                <Table.Column\n                    dataIndex={["category", "id"]}\n                    title="category"\n                    render={(value: number) => {\n                        if (isLoading) {\n                            return "loading...";\n                        }\n\n                        return data?.data.find(\n                            (item: ICategory) => item.id === value,\n                        )?.title;\n                    }}\n                />\n                <Table.Column\n                    dataIndex="createdAt"\n                    title="createdAt"\n                    render={(value) => <DateField format="LLL" value={value} />}\n                />\n            </Table>\n        </List>\n    );\n};\n\nexport default App;\n\ninterface IPost {\n  title: string;\n  createdAt: string;\n  category: { id: number };\n}\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\n')),(0,a.kt)("p",null,"Now, you should see the output as a table populated with ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," data:\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/refinedev/refine/blob/master/documentation/static/img/first-example-result.png?raw=true",alt:"First example result"})),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"\ud83d\udc49 Jump to ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/tutorial/"},"Refine - Ant Design Tutorial")," to continue your work and turn the example into a full-blown CRUD application."),(0,a.kt)("p",null,"\ud83d\udc49 Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/tutorial/"},"Refine - Tailwind Tutorial")," to learn how to use ",(0,a.kt)("strong",{parentName:"p"},"refine")," in a pure ",(0,a.kt)("em",{parentName:"p"},"headless")," way."),(0,a.kt)("p",null,"\ud83d\udc49 Read more on ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/advanced-tutorials/"},"Advanced Tutorials\n")," for different usage scenarios."),(0,a.kt)("p",null,"\ud83d\udc49 See the real-life ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/demo/"},"Finefoods Demo")," project."),(0,a.kt)("p",null,"\ud83d\udc49 Play with interactive ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/examples/"},"Examples")))}d.isMDXComponent=!0}}]);