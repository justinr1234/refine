"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(63556);const o={id:"useSimpleList",title:"useSimpleList"},l=void 0,s={unversionedId:"api-reference/antd/hooks/list/useSimpleList",id:"api-reference/antd/hooks/list/useSimpleList",title:"useSimpleList",description:"By using useSimpleList you get props for your records from API in accordance with Ant Design `` component. All features such as pagination, sorting come out of the box.",source:"@site/docs/api-reference/antd/hooks/list/useSimpleList.md",sourceDirName:"api-reference/antd/hooks/list",slug:"/api-reference/antd/hooks/list/useSimpleList",permalink:"/docs/api-reference/antd/hooks/list/useSimpleList",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/hooks/list/useSimpleList.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1665668681,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{id:"useSimpleList",title:"useSimpleList"},sidebar:"someSidebar",previous:{title:"useImport",permalink:"/docs/api-reference/antd/hooks/import/useImport"},next:{title:"useEditableTable",permalink:"/docs/api-reference/antd/hooks/table/useEditableTable"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3}],c=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const u={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"useSimpleList")," you get props for your records from API in accordance with Ant Design ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. All features such as pagination, sorting come out of the box."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/list/#header"},"Refer to Ant Design docs for ",(0,r.kt)("inlineCode",{parentName:"a"},"<List>")," component information ","\u2192")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's assume that the data we will show in the table comes from the endpoint as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'[\n    {\n        "id": 182,\n        "title": "A aspernatur rerum molestiae.",\n        "content": "Natus molestias incidunt voluptatibus. Libero delectus facilis...",\n        "hit": 992123,\n        "category": {\n            "id": 1,\n            "title": "Navigating"\n        }\n    },\n    {\n        "id": 989,\n        "title": "A molestiae vel voluptatem enim.",\n        "content": "Voluptas consequatur quia beatae. Ipsa est qui culpa deleniti...",\n        "hit": 29876,\n        "category": {\n            "id": 2,\n            "title": "Empowering"\n        }\n    }\n]\n')),(0,r.kt)("p",null,"If we want to make a listing page where we show the ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"category.title")," values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    PageHeader,\n    Typography,\n    useMany,\n    AntdList,\n    useSimpleList,\n    NumberField,\n    Space,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { Text } = Typography;\n\n    // highlight-start\n    const { listProps } = useSimpleList<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n        pagination: {\n            pageSize: 6,\n        },\n    });\n    // highlight-end\n\n    const categoryIds =\n        listProps?.dataSource?.map((item) => item.category.id) ?? [];\n\n    const { data } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    // highlight-start\n    const renderItem = (item: IPost) => {\n        const { title, hit, content } = item;\n\n        const categoryTitle = data?.data.find(\n            (category: ICategory) => category.id === item.category.id,\n        )?.title;\n\n        return (\n            <AntdList.Item\n                actions={[\n                    <Space key={item.id} direction="vertical" align="end">\n                        <NumberField\n                            value={hit}\n                            options={{\n                                // @ts-ignore\n                                notation: "compact",\n                            }}\n                        />\n                        <Text>{categoryTitle}</Text>\n                    </Space>,\n                ]}\n            >\n                <AntdList.Item.Meta title={title} description={content} />\n            </AntdList.Item>\n        );\n    };\n    // highlight-end\n\n    return (\n        <PageHeader ghost={false} title="Posts">\n            // highlight-next-line\n            <AntdList {...listProps} renderItem={renderItem} />\n        </PageHeader>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    hit: number;\n    category: { id: number };\n}\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"AntdList.Item")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AntdList.Item.Meta")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component from ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/list/#API"},"Ant Design"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To disable pagination, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"hasPagination")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," which is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," by default. If ",(0,r.kt)("inlineCode",{parentName:"p"},"hasPagination")," has been set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", pagination elements will be hidden in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table/>"),". If you want to handle the pagination on the client-side you can override the ",(0,r.kt)("inlineCode",{parentName:"p"},"pagination")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},"tableProps"),".")),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:i.Z,alt:"use simple list"})),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(c,{module:"@pankod/refine-antd/useSimpleList",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSearchVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Antd form values"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"searchFormProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant design Form props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,r.kt)("inlineCode",{parentName:"a"},"Form")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant design List props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/list/#API"},(0,r.kt)("inlineCode",{parentName:"a"},"List")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters"),(0,r.kt)("td",{parentName:"tr",align:null},"Current filters state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#crudfilters"},(0,r.kt)("inlineCode",{parentName:"a"},"CrudFilters")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setFilters"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that accepts a new filter state"),(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("inlineCode",{parentName:"td"},'(filters: CrudFilters, behavior?: "merge" \\| "replace" = "merge") => void')," ",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"td"},"(setter: (previousFilters: CrudFilters) => CrudFilters) => void"))))))}k.isMDXComponent=!0},63556:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/useSimpleList-de42a2336346aef2e2203189aa080298.png"}}]);