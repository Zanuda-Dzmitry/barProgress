import{_ as P}from"./DPla-bfr.js";import{_ as S,e as q,f,w as c,I as y,$ as v,a0 as p,J as l,Z as L,a as Q,an as w,o as C}from"./D2-eU81V.js";import{i as m,d as H}from"./CfIzpCDP.js";import{n as K}from"./Cl2SVslI.js";const N=q({inheritAttrs:!1,props:{...K,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:[Boolean,String],default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function d(s,t){const i=H(s,t).reduce((a,n)=>(n.type==="added"&&a.push(n.key),a),[]);return m(s,t,{excludeKeys:a=>i.includes(a)})}function r(s,t,{isActive:i,isExactActive:a}){if(e.exactQuery==="partial"){if(!d(s.query,t.query))return e.inactiveClass}else if(e.exactQuery===!0&&!m(s.query,t.query))return e.inactiveClass;return e.exactHash&&s.hash!==t.hash?e.inactiveClass:e.exact&&a||!e.exact&&i?e.activeClass:e.inactiveClass}return{resolveLinkClass:r}}}),R=["href","aria-disabled","role","rel","target","tabindex","onClick"];function z(e,d,r,s,t,i){const a=P;return e.to?(C(),f(a,l({key:1},e.$props,{custom:""}),{default:c(({route:n,href:b,target:h,rel:k,navigate:$,isActive:o,isExactActive:u,isExternal:g})=>[Q("a",l(e.$attrs,{href:e.disabled?void 0:b,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:k,target:h,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(n,e._.provides[w]||e.$route,{isActive:o,isExactActive:u}),tabindex:e.disabled?-1:void 0,onClick:B=>!g&&!e.disabled&&$(B)}),[y(e.$slots,"default",v(p({isActive:e.active!==void 0?e.active:e.exact?u:o})))],16,R)]),_:3},16)):(C(),f(L(e.as),l({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:c(()=>[y(e.$slots,"default",v(p({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const J=S(N,[["render",z]]);export{J as default};
