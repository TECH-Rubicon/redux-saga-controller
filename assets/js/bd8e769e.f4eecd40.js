"use strict";(self.webpackChunkredux_saga_controller=self.webpackChunkredux_saga_controller||[]).push([[865],{7178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(4848),l=n(8453),a=n(1470),s=n(9365);const i={sidebar_position:1},o="Output controller values",c={id:"api-reference/controller-data/controller-values",title:"Output controller values",description:"|Name   | Type            | Description                                                                | Default value |",source:"@site/../docs/api-reference/controller-data/controller-values.md",sourceDirName:"api-reference/controller-data",slug:"/api-reference/controller-data/controller-values",permalink:"/docs/api-reference/controller-data/controller-values",draft:!1,unlisted:!1,editUrl:"https://github.com/TECH-Rubicone/redux-saga-controller/edit/master/docs/intro.md/../docs/api-reference/controller-data/controller-values.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Controller data",permalink:"/docs/api-reference/controller-data/data"},next:{title:"useController",permalink:"/docs/hooks/use-controller"}},u={},d=[{value:"How select works",id:"how-select-works",level:3},{value:"Action types",id:"action-types",level:3}];function f(e){const t={code:"code",h1:"h1",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"output-controller-values",children:"Output controller values"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"id"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The id value will be equal to the prefix. Readonly."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"'c-state'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"actions"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"object"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Return the ",(0,r.jsx)(t.code,{children:"object"})," with default action creators and your action creators."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"select"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"function"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Method to get state of a particular controller."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"how-select-works",children:"How select works"}),"\n",(0,r.jsxs)(a.A,{defaultValue:"ts",children:[(0,r.jsx)(s.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"controller.select(state: ReduxState): Partial<ReduxState>\n"})})}),(0,r.jsx)(s.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"controller.select(store.getState())\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"action-types",children:"Action types"}),"\n",(0,r.jsxs)(a.A,{defaultValue:"ts",children:[(0,r.jsxs)(s.A,{value:"ts",label:"TypeScript",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="ts" {11}',children:"import { Controller, create } from 'redux-saga-controller';\n\ninterface IInitial {\n  initialized: boolean;\n  disabled: boolean;\n  data: UserData | null\n}\n\nexport const controller:Controller<IInitial> = create({\n  prefix: 'testController',\n  actions: ['initialize', 'getSelf'], // TYPE: \"@testController-state/initialize\" TYPE: \"@testController-state/getSelf\"\n  initial: {\n    initialized: false,\n    disabled: true,\n    data: {\n      name: 'John',\n      age: 30,\n    }\n  },\n  subscriber: function * () {\n    // ...\n  },\n});\n"})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="ts" {11,12,13,14}',children:"import { Controller, create } from 'redux-saga-controller';\n\ninterface IInitial {\n  initialized: boolean;\n  disabled: boolean;\n  data: UserData | null\n}\n\nexport const controller:Controller<IInitial> = create({\n  prefix: 'defaultPrefix',\n  actions: {\n    initialize: 'INITIALIZE', // TYPE: \"@defaultPrefix-state/INITIALIZE\"\n    getSelf: 'GET_SELF', // TYPE: \"@defaultPrefix-state/GET_SELF\"\n  },\n  initial: {\n    initialized: false,\n    disabled: true,\n    data: {\n      name: 'John',\n      age: 30,\n    }\n  },\n  subscriber: function * () {\n    // ...\n  },\n}); \n"})})]}),(0,r.jsxs)(s.A,{value:"js",label:"JavaScript",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="js" {12,13,14,15,16}',children:"import { create } from 'redux-saga-controller';\n\nexport const controller = create(\n  {\n    // initial state controller\n    initial: {\n      initialized: false,\n      disabled: true,\n      data: {\n        name: 'John',\n        age: 30,\n      }\n    }, \n    prefix: 'defaultPrefix',\n    actions: {\n      data: 'DATA', // TYPE: \"@defaultPrefix-state/DATA\"\n      initialize: 'INITIALIZE', // TYPE: \"@defaultPrefix-state/INITIALIZE\"\n      updateData: 'UPDATE_DATA', // TYPE: \"@defaultPrefix-state/UPDATE_DATA\"\n    },\n    subscriber: function * () {\n      // ...\n    }\n  },\n);\n"})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="js" {12}',children:"import { create } from 'redux-saga-controller';\n\nexport const controller = create(\n  {\n    // initial state controller\n    initial: {\n      initialized: false,\n      disabled: true,\n      data: {\n        name: 'John',\n        age: 30,\n      }\n    }, \n    prefix: 'defaultPrefix',\n    actions: ['initialize', 'updateData'], // TYPE: \"@defaultPrefix-state/initialize\", TYPE: \"@defaultPrefix-state/updateData\"\n    subscriber: function * () {\n      // ...\n    }\n  },\n);\n"})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const l={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),l=n(4164),a=n(3104),s=n(6347),i=n(205),o=n(7485),c=n(1682),u=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=f(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=p({queryString:n,groupId:l}),[x,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,u.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),m=(()=>{const e=c??x;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),l=i[n].value;l!==r&&(c(t),s(l))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,l.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function A(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);