import k from"./B60j1DTR.js";import y from"./Ba0n-oPZ.js";import{_ as w,e as C,c as t,a as U,F as p,I as $,L as i,K as d,O as B,P as m,V as L,U as A,R as f,o as s,b as I,r as o,D as n,w as P,g,t as b}from"./Msc8AAhh.js";import{u as S}from"./C804qsnc.js";import{a as V}from"./Cl2SVslI.js";import"./CqDpwaV1.js";import"./BP_Oqj5H.js";import"./CfIzpCDP.js";const M={wrapper:"relative min-w-0",ol:"flex items-center gap-x-1.5",li:"flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",base:"flex items-center gap-x-1.5 group font-semibold min-w-0",label:"block truncate",icon:{base:"flex-shrink-0 w-5 h-5",active:"",inactive:""},divider:{base:"flex-shrink-0 w-5 h-5 rtl:rotate-180"},active:"text-primary-500 dark:text-primary-400",inactive:" hover:text-gray-700 dark:hover:text-gray-200",default:{divider:"i-heroicons-chevron-right-20-solid"}},v=B(f.ui.strategy,f.ui.breadcrumb,M),N=C({components:{UIcon:k,ULink:y},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},divider:{type:String,default:()=>v.default.divider},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:l,attrs:u}=S("breadcrumb",m(e,"ui"),v,m(e,"class"));return{ui:l,attrs:u,getULinkProps:V,twMerge:A,twJoin:L}}}),O={key:1,role:"presentation"};function j(e,l,u,D,F,J){const c=k,h=y;return s(),t("nav",d({"aria-label":"Breadcrumb",class:e.ui.wrapper},e.attrs),[U("ol",{class:i(e.ui.ol)},[(s(!0),t(p,null,$(e.links,(a,r)=>(s(),t("li",{key:r,class:i(e.ui.li)},[I(h,d({as:"span",class:[e.ui.base,r===e.links.length-1?e.ui.active:a.to?e.ui.inactive:""],"aria-current":r===e.links.length-1?"page":void 0,ref_for:!0},e.getULinkProps(a),{onClick:a.click}),{default:P(()=>[o(e.$slots,"icon",{link:a,index:r,isActive:r===e.links.length-1},()=>[a.icon?(s(),g(c,{key:0,name:a.icon,class:i(e.twMerge(e.twJoin(e.ui.icon.base,r===e.links.length-1?e.ui.icon.active:a.to?e.ui.icon.inactive:""),a.iconClass))},null,8,["name","class"])):n("",!0)]),o(e.$slots,"default",{link:a,index:r,isActive:r===e.links.length-1},()=>[a.label?(s(),t("span",{key:0,class:i(e.twMerge(e.ui.label,a.labelClass))},b(a.label),3)):n("",!0)])]),_:2},1040,["class","aria-current","onClick"]),r<e.links.length-1?o(e.$slots,"divider",{key:0},()=>[e.divider?(s(),t(p,{key:0},[e.divider.startsWith("i-")?(s(),g(c,{key:0,name:e.divider,class:i(e.ui.divider.base),role:"presentation"},null,8,["name","class"])):(s(),t("span",O,b(e.divider),1))],64)):n("",!0)]):n("",!0)],2))),128))],2)],16)}const Q=w(N,[["render",j]]);export{Q as default};
