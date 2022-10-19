"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(38047),i=n(80133),s=n(55206);const l={id:"auth-provider",title:"Auth Provider",sidebar_label:"Auth Provider"},p=void 0,d={unversionedId:"api-references/providers/auth-provider",id:"version-2.xx.xx/api-references/providers/auth-provider",title:"Auth Provider",description:"refine let's you set authentication logic by providing the authProvider property to the `` component.",source:"@site/versioned_docs/version-2.xx.xx/api-references/providers/auth-provider.md",sourceDirName:"api-references/providers",slug:"/api-references/providers/auth-provider",permalink:"/docs/2.xx.xx/api-references/providers/auth-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/providers/auth-provider.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1666175240,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"auth-provider",title:"Auth Provider",sidebar_label:"Auth Provider"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Tutorial",permalink:"/docs/2.xx.xx/"},next:{title:"Data Provider",permalink:"/docs/2.xx.xx/api-references/providers/data-provider"}},u={},m=[{value:"Usage",id:"usage",level:2},{value:"Creating an <code>authProvider</code>",id:"creating-an-authprovider",level:2},{value:"<code>login</code>",id:"login",level:3},{value:"Default login page",id:"default-login-page",level:4},{value:"<code>logout</code>",id:"logout",level:3},{value:"Default logout button",id:"default-logout-button",level:4},{value:"Redirection after logout",id:"redirection-after-logout",level:4},{value:"<code>checkError</code>",id:"checkerror",level:3},{value:"Redirection after error",id:"redirection-after-error",level:4},{value:"<code>checkAuth</code>",id:"checkauth",level:3},{value:"<code>getPermissions</code>",id:"getpermissions",level:3},{value:"<code>getUserIdentity</code>",id:"getuseridentity",level:3},{value:"Setting Authorization Credentials",id:"setting-authorization-credentials",level:2},{value:"Hooks and Components",id:"hooks-and-components",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],c={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," let's you set authentication logic by providing the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is an object with methods that ",(0,a.kt)("strong",{parentName:"p"},"refine")," uses when necessary. These methods are needed to return a Promise. They also can be accessed with specialized hooks."),(0,a.kt)("p",null,"An auth provider must include following methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider = {\n    login: () => Promise.resolve(),\n    logout: () => Promise.resolve(),\n    checkAuth: () => Promise.resolve(),\n    checkError: () => Promise.resolve(),\n    getPermissions: () => Promise.resolve(),\n    getUserIdentity: () => Promise.resolve(),\n};\n")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," consumes these methods using ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/useLogin"},"authorization hooks"),".\nAuthorization hooks are used to manage authentication and authorization operations like login, logout and catching ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," errors etc.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can find auth provider examples made with ",(0,a.kt)("strong",{parentName:"p"},"refine")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Auth0")," ","\u2192"," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/authProvider/auth0/"},"Source Code")," - ",(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/examples/auth-provider/auth0"},"Demo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Google")," ","\u2192"," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/authProvider/googleLogin"},"Source Code")," - ",(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/examples/auth-provider/google-auth"},"Demo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OTP Login")," ","\u2192"," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/authProvider/otpLogin"},"Source Code")," - ",(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/examples/auth-provider/otpLogin"},"Demo")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," in ",(0,a.kt)("strong",{parentName:"p"},"refine"),", we have to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport authProvider from "./auth-provider";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App = () => {\n    return (\n        <Refine\n            // highlight-next-line\n            authProvider={authProvider}\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n        />\n    );\n};\n')),(0,a.kt)("p",null,"By default, ",(0,a.kt)("strong",{parentName:"p"},"refine")," doesn't require authentication configuration."),(0,a.kt)("p",null,"If an ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," property is not provided, ",(0,a.kt)("strong",{parentName:"p"},"refine")," will use the default ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),". This default ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," lets the app work without an authentication requirement.",(0,a.kt)("br",{parentName:"p"}),"\n","If your app doesn't require authentication, no further setup is necessary for the app to work."),(0,a.kt)("h2",{id:"creating-an-authprovider"},"Creating an ",(0,a.kt)("inlineCode",{parentName:"h2"},"authProvider")),(0,a.kt)("p",null,"We will build a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," from scratch to show the logic of how ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," methods interact with the app."),(0,a.kt)("h3",{id:"login"},(0,a.kt)("inlineCode",{parentName:"h3"},"login")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," expects this method to return a resolved Promise if the login is successful, and a rejected Promise if it is not."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the login is successful, pages that require authentication becomes accessible.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the login fails, ",(0,a.kt)("strong",{parentName:"p"},"refine")," displays an error notification to the user."))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here we show an example ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method that stores auth data in ",(0,a.kt)("inlineCode",{parentName:"p"},"localStorage"),".\nFor the sake of simplicity, we'll use mock data and check the user credentials from local storage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="auth-provider.ts"',title:'"auth-provider.ts"'},'// highlight-next-line\nconst mockUsers = [{ username: "admin" }, { username: "editor" }];\n\nconst authProvider = {\n    // highlight-start\n    login: ({ username, password, remember }) => {\n        // Suppose we actually send a request to the back end here.\n        const user = mockUsers.find((item) => item.username === username);\n\n        if (user) {\n            localStorage.setItem("auth", JSON.stringify(user));\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    // highlight-end\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"login")," method will be accessible via ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogin")," auth hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@pankod/refine";\n\nconst { mutate: login } = useLogin();\n\nlogin(values);\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogin")," can accept any kind of object for values since ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," does not have a restriction on its parameters.",(0,a.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogin"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: login } =\n    useLogin<{ username: string; password: string; remember: boolean }>();\n"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/useLogin"},"Refer to useLogin documentation for more information. ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"default-login-page"},"Default login page"),(0,a.kt)("p",null,"If an ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is given, refine shows a default login page on ",(0,a.kt)("inlineCode",{parentName:"p"},'"/"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"/login"')," routes and a login form if a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginPage")," is not provided.\nRest of the app won't be accessible until successful authentication.",(0,a.kt)("br",{parentName:"p"}),"\n","After submission, login form calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o.Z,alt:"Default Login Page"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"If an ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is given, ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," as propery are only accessible if the login is successful. if no ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," was provided, they are accessible without authentication.  ")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/examples/customization/customLogin"},"Refer to example on how to customize the default login page.","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"logout"},(0,a.kt)("inlineCode",{parentName:"h3"},"logout")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," expects this method to return a resolved Promise if the logout is successful, and a rejected Promise if it is not."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the logout is successful, pages that requires authentication becomes unaccessible.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the logout fails, ",(0,a.kt)("strong",{parentName:"p"},"refine")," displays an error notification to the user."))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here we show an example ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," that removes auth data from local storage and returns a resolved promise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="auth-provider.ts"',title:'"auth-provider.ts"'},'const authProvider = {\n    ...\n// highlight-start\n    logout: () => {\n        localStorage.removeItem("auth");\n        return Promise.resolve();\n    }\n// highlight-end\n    ...\n}\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"logout")," method will be accessible via the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," auth hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogout } from "@pankod/refine";\n\nconst { mutate: logout } = useLogout();\n\nlogout();\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," can accept any kind of object for values since ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.  ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/useLogout"},"Refer to useLogout documentation for more information. ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"default-logout-button"},"Default logout button"),(0,a.kt)("p",null,"If authentication is enabled, a logout button appears at the bottom of the side bar menu. When the button is clicked, ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is called."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," redirects the app to ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," route by default."),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"Logout Action"})),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"redirection-after-logout"},"Redirection after logout"),(0,a.kt)("p",null,"Redirection url can be customized by returning a route string, or false to disable redirection after logout."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider = {\n    ...\n    logout: () => {\n        localStorage.removeItem("auth");\n// highlight-next-line\n        return Promise.resolve("custom-url");\n    }\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Current authentication data needs to be cleaned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," method. For example, if a token is stored in local storage, ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," must remove it as shown above.")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"checkerror"},(0,a.kt)("inlineCode",{parentName:"h3"},"checkError")),(0,a.kt)("p",null,"When a ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider"))," method returns an error, ",(0,a.kt)("inlineCode",{parentName:"p"},"checkError")," is called with the error object.",(0,a.kt)("br",{parentName:"p"}),"\n","If ",(0,a.kt)("inlineCode",{parentName:"p"},"checkError")," returns a rejected promise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," method is called and user becomes unauthorized and gets redirected to ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," page by default."),(0,a.kt)("p",null,"In this example, we log the user out when ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," error status code is ",(0,a.kt)("inlineCode",{parentName:"p"},"401"),".",(0,a.kt)("br",{parentName:"p"}),"\n","You can decide, depending on any error status code you want to check, if the users continue to process by returning a resolved promise or if they are logged out for rejecting the promise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="auth-provider.ts"',title:'"auth-provider.ts"'},'const authProvider = {\n    ...\n    logout: () => {\n        localStorage.removeItem("auth");\n        return Promise.resolve();\n    },\n// highlight-start\n    checkError: (error) => {\n        if (error.status === 401) {\n            return Promise.reject();\n        }\n        return Promise.resolve();\n    },\n// highlight-end\n   ...\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"checkError")," method will be accessible via the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCheckError")," auth hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCheckError } from "@pankod/refine";\n\nconst { mutate: checkError } = useCheckError();\n\ncheckError(error);\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," can accept any kind of object for values since ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.  ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/useCheckError"},"Refer to useCheckError documentation for more information. ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"redirection-after-error"},"Redirection after error"),(0,a.kt)("p",null,"You can override the default redirection by giving a path to the rejected promise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{1-3}","{1-3}":!0},'checkError: (error) => {\n    if (error.status === 401) {\n        return Promise.reject("custom-url");\n    }\n    ...\n}\n')),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Redirection path given to ",(0,a.kt)("inlineCode",{parentName:"p"},"checkError")," overrides the one on ",(0,a.kt)("inlineCode",{parentName:"p"},"logout"),".")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"checkauth"},(0,a.kt)("inlineCode",{parentName:"h3"},"checkAuth")),(0,a.kt)("p",null,"Whenever route changes, ",(0,a.kt)("inlineCode",{parentName:"p"},"checkAuth")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is called.",(0,a.kt)("br",{parentName:"p"}),"\n","When ",(0,a.kt)("inlineCode",{parentName:"p"},"checkAuth")," returns a rejected promise, authentication is cancelled and the app is redirected to an error page that allows the user to navigate to the root path which shows a login page by default."),(0,a.kt)("p",null,"Checking the authentication data can be easily done here. For example if the authentication data is stored in the local storage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="auth-provider.ts"',title:'"auth-provider.ts"'},'const authProvider = {\n   ...\n// highlight-start\n    checkAuth: () => {\n        localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();\n    },\n// highlight-end\n   ...\n};\n')),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A custom ",(0,a.kt)("inlineCode",{parentName:"li"},"redirectPath")," can be given to ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise")," reject from the ",(0,a.kt)("inlineCode",{parentName:"li"},"checkAuth"),". If you want to redirect yourself to a certain URL.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider = {\n   ...\n// highlight-next-line\n    checkAuth: () => {\n        localStorage.getItem("auth")\n            ? Promise.resolve()\n            : Promise.reject({ redirectPath: "/custom-url" });\n    },\n   ...\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"checkAuth")," method will be accessible via ",(0,a.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," auth hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useAuthenticated } from "@pankod/refine";\n\nconst {\n    isSuccess,\n    isLoading,\n    isError,\n    refetch: checkAuth,\n} = useAuthenticated();\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/useAuthenticated"},"Refer to useAuthenticated documentation for more information. ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"getpermissions"},(0,a.kt)("inlineCode",{parentName:"h3"},"getPermissions")),(0,a.kt)("p",null,"You may want to require authorization for certain parts of the app based on the permissions that current user have. Permission logic can be defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"getPermission")," method."),(0,a.kt)("p",null,"We will show you how to give authorization based on roles determined in ",(0,a.kt)("inlineCode",{parentName:"p"},"getPermissions"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="auth-provider.ts"',title:'"auth-provider.ts"'},'const mockUsers = [\n    {\n        username: "admin",\n// highlight-next-line\n        roles: ["admin"],\n    },\n    {\n        username: "editor",\n// highlight-next-line\n        roles: ["editor"],\n    }\n];\n\nconst authProvider = {\n...\n// highlight-start\n    getPermissions: () => {\n        const auth = localStorage.getItem("auth");\n        if (auth) {\n            const parsedUser = JSON.parse(auth);\n            return Promise.resolve(parsedUser.roles);\n        }\n        return Promise.reject();\n    },\n// highlight-end\n...\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"Data that ",(0,a.kt)("inlineCode",{parentName:"p"},"getPermissions")," resolves with is accesible by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/usePermissions"},(0,a.kt)("inlineCode",{parentName:"a"},"usePermissions"))," hook."),(0,a.kt)("p",null,"For example let's say that only the admins must be able to create new posts from the list page.\n",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," can show a button for creating new posts. If it's required that only admins can create new posts, this button must be only accessible to users who has the ",(0,a.kt)("inlineCode",{parentName:"p"},'"admin"')," role."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/post/list"',title:'"pages/post/list"'},'import { List, usePermissions } from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const { data: permissionsData } = usePermissions();\n\n    return <List canCreate={permissionsData?.includes("admin")}>...</List>;\n};\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/usePermissions"},"Refer to usePermissions documentation for more information. ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"getuseridentity"},(0,a.kt)("inlineCode",{parentName:"h3"},"getUserIdentity")),(0,a.kt)("p",null,"User data can be accessed within the app by returning a resolved Promise in the ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="auth-provider.ts"',title:'"auth-provider.ts"'},'const authProvider = {\n...\n// highlight-start\n    getUserIdentity: () => {\n        const auth = localStorage.getItem("auth");\n        if (auth) {\n            const parsedUser = JSON.parse(auth);\n            return Promise.resolve(parsedUser.username);\n        }\n        return Promise.reject();\n    }\n// highlight-end\n...\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"The resolved data can be acquired using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/useGetIdentity"},(0,a.kt)("inlineCode",{parentName:"a"},"useGetIdentity"))," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useGetIdentity } from "@pankod/refine";\n\nconst { data: userIdentity } = useGetIdentity<string>();\n// userIdentity: "admin"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/useGetIdentity"},"Refer to useGetIdentity documentation for more information. ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="auth-provider.ts"',title:'"auth-provider.ts"'},'const authProvider = {\n    ...\n// highlight-start\n    getUserIdentity: () => {\n        const user = {\n            name: "Jane Doe",\n            avatar: "https://i.pravatar.cc/150?u=refine",\n        };\n        return Promise.resolve(user);\n    },\n// highlight-end\n    ...\n};\n')),(0,a.kt)("p",null,"If the resolved data has a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"avatar")," property, ",(0,a.kt)("strong",{parentName:"p"},"refine")," renders a suitable header for that data:"),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:s.Z,alt:"Header View"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the resolved data has a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," property, a name text appears; if it has an ",(0,a.kt)("inlineCode",{parentName:"p"},"avatar")," property, an avatar image appears; if it has a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"avatar")," property, they both appear together.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"setting-authorization-credentials"},"Setting Authorization Credentials"),(0,a.kt)("p",null,"After user logs in, their credentials can be sent along with the API request by configuring the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")),". A custom ",(0,a.kt)("inlineCode",{parentName:"p"},"httpClient")," can be passed to ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider"))," to include configurations like cookies and request headers."),(0,a.kt)("p",null,"We'll show how to add a token acquired from the ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method to the ",(0,a.kt)("strong",{parentName:"p"},"Authorization")," header of the ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'...\n// highlight-start\nimport axios from "axios";\n\nconst axiosInstance = axios.create();\n\nconst mockUsers = [\n    { username: "admin", token: "123" },\n    { username: "editor", token: "321" }\n];\n// highlight-end\n\nconst App = () => {\n    const authProvider: AuthProvider = {\n// highlight-next-line\n        login: ({ username, password }) => {\n                // Suppose we actually send a request to the back end here.\n                const user = mockUsers.find((item) => item.username === username);\n\n                if (user) {\n                    localStorage.setItem("auth", JSON.stringify(user));\n\n                    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;\n                    return Promise.resolve();\n                }\n                return Promise.reject();\n            },\n// highlight-end\n            ...\n        };\n\n    return (\n        <Refine\n// highlight-next-line\n            authProvider={authProvider}\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL, axiosInstance)}\n        />\n    );\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We recommend using ",(0,a.kt)("strong",{parentName:"p"},"axios")," as the ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," client with the ",(0,a.kt)("strong",{parentName:"p"},"@pankod/refine-simple-rest")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")),". Other ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," clients can also be preferred.")),(0,a.kt)("h2",{id:"hooks-and-components"},"Hooks and Components"),(0,a.kt)("p",null,"These hooks can be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," authentication and authorization operations."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/auth/useAuthenticated"},"useAuthenticated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/auth/useCheckError"},"useCheckError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/auth/useGetIdentity"},"useGetIdentity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/auth/useLogin"},"useLogin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/auth/useLogout"},"useLogout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/auth/usePermissions"},"usePermissions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/components/auth/authenticated"},(0,a.kt)("inlineCode",{parentName:"a"},"<Authenticated />")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Resolve condition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"login ",(0,a.kt)("div",{className:" required"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"Logs user in"),(0,a.kt)("td",{parentName:"tr",align:null},"Auth confirms login")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logout ",(0,a.kt)("div",{className:" required"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"Logs user out"),(0,a.kt)("td",{parentName:"tr",align:null},"Auth confirms logout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"checkAuth ",(0,a.kt)("div",{className:" required"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"Checks credentials on each route changes"),(0,a.kt)("td",{parentName:"tr",align:null},"Authentication still persist")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"checkError ",(0,a.kt)("div",{className:" required"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"Checks if a dataProvider returns an error"),(0,a.kt)("td",{parentName:"tr",align:null},"Data provider doesn't return an error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"required-block"},(0,a.kt)("div",null,"getPermissions")," ",(0,a.kt)("div",{className:"required"},"Required"))),(0,a.kt)("td",{parentName:"tr",align:null},"Can be use to get user credentials"),(0,a.kt)("td",{parentName:"tr",align:null},"Authorization roles accepted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getUserIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"Can be use to get user identity"),(0,a.kt)("td",{parentName:"tr",align:null},"User identity avaliable to return")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/refine-authentication-example-rz7l8?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-authorization-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}h.isMDXComponent=!0},55206:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/header-98aa18d109192c9c5b2ff7cc426288f6.png"},38047:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/login-db520afa32e5b9d49734bccd3d8f23c3.png"},80133:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/logout-0692996f93663e8311d7aa37a7627641.gif"}}]);