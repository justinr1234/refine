"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),c=a,f=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"useForm",title:"useForm"},i=void 0,l={unversionedId:"api-reference/mantine/hooks/form/useForm",id:"api-reference/mantine/hooks/form/useForm",title:"useForm",description:"useForm is used to manage forms. It is based on useForm from the @mantine/form package and useForm from the @pankod/refine-core package. It supports all the features of these packages and adds some additional features.",source:"@site/docs/api-reference/mantine/hooks/form/useForm.md",sourceDirName:"api-reference/mantine/hooks/form",slug:"/api-reference/mantine/hooks/form/useForm",permalink:"/docs/api-reference/mantine/hooks/form/useForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mantine/hooks/form/useForm.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1666175240,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"useForm",title:"useForm"},sidebar:"someSidebar",previous:{title:"useDrawerForm",permalink:"/docs/api-reference/mantine/hooks/form/useDrawerForm"},next:{title:"useModalForm",permalink:"/docs/api-reference/mantine/hooks/form/useModalForm"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," is used to manage forms. It is based on ",(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/form/use-form"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@mantine/form")," package and ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package. It supports all the features of these packages and adds some additional features."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We'll show the basic usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," by adding an editing form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, Select, TextInput, useForm } from "@pankod/refine-mantine";\n\nexport const PostEdit: React.FC = () => {\n    const { saveButtonProps, getInputProps } = useForm({\n        initialValues: {\n            title: "",\n            status: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n            status: (value) =>\n                value.length <= 0 ? "Status is required" : null,\n        },\n    });\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <form>\n                <TextInput\n                    mt={8}\n                    label="Title"\n                    placeholder="Title"\n                    {...getInputProps("title")}\n                />\n                <Select\n                    mt={8}\n                    label="Status"\n                    placeholder="Pick one"\n                    data={[\n                        { label: "Published", value: "published" },\n                        { label: "Draft", value: "draft" },\n                        { label: "Rejected", value: "rejected" },\n                    ]}\n                    {...getInputProps("status")}\n                />\n            </form>\n        </Edit>\n    );\n};\n')),(0,a.kt)("p",null,"In the example if you navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts/edit/1234")," it will manage the data of the post with id of ",(0,a.kt)("inlineCode",{parentName:"p"},"1234")," in an editing context. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm/#actions"},"Actions")," on how ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," determines this is an editing context."),(0,a.kt)("p",null,"Since this is an edit form it will fill the form with the data of the post with id of ",(0,a.kt)("inlineCode",{parentName:"p"},"1234")," and then the form will be ready to edit further and submit the changes."),(0,a.kt)("p",null,"Submit functionality is provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," which includes all of the necessary props for a button to submit a form including automatically updating loading states."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"It supports all the features of the ",(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/form/use-form"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," hook provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@mantine/form"),".\nAlso, we added the following return values."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"refineCoreProps"),": You can define all properties provided by ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," here. You can see all of them in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm#properties"},"here"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For example, we can define the ",(0,a.kt)("inlineCode",{parentName:"p"},"refineCoreProps")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook as:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useForm } from "@pankod/refine-mantine";\n\nconst { ... } = useForm({\n    ..., // @mantine/form\'s useForm props\n    refineCoreProps: {\n        resource: "posts",\n        redirect: false,\n        //  @pankod/refine-core\'s useForm props\n    },\n});\n')),(0,a.kt)("h3",{id:"return-values"},"Return values"),(0,a.kt)("p",null,"Returns all the return values of the ",(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/form/use-form"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," hook provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@mantine/form"),". Also, we added the following return values."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"refineCore"),": Returns all values returned by ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm")),". You can see all of them in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm##return-values"},"here"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For example, we can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"refineCore")," return value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook as:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useForm } from \"@pankod/refine-react-hook-form\";\n\nconst {\n    ..., // @mantine/form's useForm return values\n    saveButtonProps,\n    refineCore: {\n        queryResult,\n        ...  // @pankod/refine-core's useForm return values\n    },\n} = useForm({ ... });\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: (e: React.FormEvent<HTMLFormElement>) => void; }"))))),(0,a.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Desription"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TData"),(0,a.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TError"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,a.kt)("td",{parentName:"tr",align:null},"Form values for mutation function"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>"))))),(0,a.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com/github/refinedev/refine/tree/master/examples/form/mantine/useForm?embed=1&view=preview&theme=dark&preset=node&ctl=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"mantine-use-form-example"}))}u.isMDXComponent=!0}}]);