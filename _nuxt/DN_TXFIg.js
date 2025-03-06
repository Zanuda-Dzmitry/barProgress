import{_ as oe}from"./BP_Oqj5H.js";import ue from"./B60j1DTR.js";import{_ as le}from"./vqsxyBEz.js";import re from"./CMKMsGs2.js";import{e as N,f as w,s as P,q as se,E as fe,x as me,v as ge,B as E,G as be,_ as Me,g as A,w as R,b as $,c as D,D as L,r as Y,L as T,a as _,H,F as z,I as J,K as F,T as ye,n as Ie,O as he,P as X,l as x,V as Se,U as ke,R as ee,Y as we,o as S,Z as Pe,t as te,d as Te,S as Re}from"./Msc8AAhh.js";import{i as q,A as j,o as y,N as ae,u as De,a as b,s as Ce}from"./D9s-OobF.js";import{w as Oe}from"./Bg1Tp2sL.js";import{s as Ae}from"./qwe20Z_U.js";import{p as Ee}from"./BSYPxJ_c.js";import{u as Ne,i as Be,f as $e,c as k}from"./Bo3XB5De.js";import{l as Le,i as U,t as He}from"./B-C6jKSB.js";import{w as Fe,h as Ue,O as je,v as Ke,N as ne,_ as ie}from"./CenVxah9.js";import{u as _e,d as ze}from"./C804qsnc.js";import{u as Je}from"./DSAHFBWf.js";import{g as Ve}from"./Cl2SVslI.js";import"./CqDpwaV1.js";import"./DIBlg8VK.js";var qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qe||{}),Qe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Qe||{});function Ze(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let de=Symbol("MenuContext");function K(e){let m=ge(de,null);if(m===null){let g=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(g,K),g}return m}let Ge=N({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:m,attrs:g}){let M=w(1),v=w(null),f=w(null),t=w([]),o=w(""),s=w(null),p=w(1);function I(a=r=>r){let r=s.value!==null?t.value[s.value]:null,u=je(a(t.value.slice()),l=>y(l.dataRef.domRef)),i=r?u.indexOf(r):null;return i===-1&&(i=null),{items:u,activeItemIndex:i}}let d={menuState:M,buttonRef:v,itemsRef:f,items:t,searchQuery:o,activeItemIndex:s,activationTrigger:p,closeMenu:()=>{M.value=1,s.value=null},openMenu:()=>M.value=0,goToItem(a,r,u){let i=I(),l=$e(a===k.Specific?{focus:k.Specific,id:r}:{focus:a},{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.disabled});o.value="",s.value=l,p.value=u??1,t.value=i.items},search(a){let r=o.value!==""?0:1;o.value+=a.toLowerCase();let u=(s.value!==null?t.value.slice(s.value+r).concat(t.value.slice(0,s.value+r)):t.value).find(l=>l.dataRef.textValue.startsWith(o.value)&&!l.dataRef.disabled),i=u?t.value.indexOf(u):-1;i===-1||i===s.value||(s.value=i,p.value=1)},clearSearch(){o.value=""},registerItem(a,r){let u=I(i=>[...i,{id:a,dataRef:r}]);t.value=u.items,s.value=u.activeItemIndex,p.value=1},unregisterItem(a){let r=I(u=>{let i=u.findIndex(l=>l.id===a);return i!==-1&&u.splice(i,1),u});t.value=r.items,s.value=r.activeItemIndex,p.value=1}};return Oe([v,f],(a,r)=>{var u;d.closeMenu(),Fe(r,Ue.Loose)||(a.preventDefault(),(u=y(v))==null||u.focus())},P(()=>M.value===0)),be(de,d),He(P(()=>De(M.value,{0:U.Open,1:U.Closed}))),()=>{let a={open:M.value===0,close:d.closeMenu};return j({ourProps:{},theirProps:e,slot:a,slots:m,attrs:g,name:"Menu"})}}}),We=N({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:m,slots:g,expose:M}){var v;let f=(v=e.id)!=null?v:`headlessui-menu-button-${q()}`,t=K("MenuButton");M({el:t.buttonRef,$el:t.buttonRef});function o(d){switch(d.key){case b.Space:case b.Enter:case b.ArrowDown:d.preventDefault(),d.stopPropagation(),t.openMenu(),E(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.First)});break;case b.ArrowUp:d.preventDefault(),d.stopPropagation(),t.openMenu(),E(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.Last)});break}}function s(d){switch(d.key){case b.Space:d.preventDefault();break}}function p(d){e.disabled||(t.menuState.value===0?(t.closeMenu(),E(()=>{var a;return(a=y(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),t.openMenu(),Ze(()=>{var a;return(a=y(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let I=Ae(P(()=>({as:e.as,type:m.type})),t.buttonRef);return()=>{var d;let a={open:t.menuState.value===0},{...r}=e,u={ref:t.buttonRef,id:f,type:I.value,"aria-haspopup":"menu","aria-controls":(d=y(t.itemsRef))==null?void 0:d.id,"aria-expanded":t.menuState.value===0,onKeydown:o,onKeyup:s,onClick:p};return j({ourProps:u,theirProps:r,slot:a,attrs:m,slots:g,name:"MenuButton"})}}}),Ye=N({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:m,slots:g,expose:M}){var v;let f=(v=e.id)!=null?v:`headlessui-menu-items-${q()}`,t=K("MenuItems"),o=w(null);M({el:t.itemsRef,$el:t.itemsRef}),Be({container:P(()=>y(t.itemsRef)),enabled:P(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function s(a){var r;switch(o.value&&clearTimeout(o.value),a.key){case b.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case b.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let u=t.items.value[t.activeItemIndex.value];(r=y(u.dataRef.domRef))==null||r.click()}t.closeMenu(),ie(y(t.buttonRef));break;case b.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Next);case b.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Previous);case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.First);case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Last);case b.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),E(()=>{var u;return(u=y(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),E(()=>Ke(y(t.buttonRef),a.shiftKey?ne.Previous:ne.Next));break;default:a.key.length===1&&(t.search(a.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case b.Space:a.preventDefault();break}}let I=Le(),d=P(()=>I!==null?(I.value&U.Open)===U.Open:t.menuState.value===0);return()=>{var a,r;let u={open:t.menuState.value===0},{...i}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(r=y(t.buttonRef))==null?void 0:r.id,id:f,onKeydown:s,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return j({ourProps:l,theirProps:i,slot:u,attrs:m,slots:g,features:ae.RenderStrategy|ae.Static,visible:d.value,name:"MenuItems"})}}}),Xe=N({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:m,attrs:g,expose:M}){var v;let f=(v=e.id)!=null?v:`headlessui-menu-item-${q()}`,t=K("MenuItem"),o=w(null);M({el:o,$el:o});let s=P(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===f:!1),p=Ee(o),I=P(()=>({disabled:e.disabled,get textValue(){return p()},domRef:o}));se(()=>t.registerItem(f,I)),fe(()=>t.unregisterItem(f)),me(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&E(()=>{var n,c;return(c=(n=y(o))==null?void 0:n.scrollIntoView)==null?void 0:c.call(n,{block:"nearest"})})});function d(n){if(e.disabled)return n.preventDefault();t.closeMenu(),ie(y(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(k.Nothing);t.goToItem(k.Specific,f)}let r=Ne();function u(n){r.update(n)}function i(n){r.wasMoved(n)&&(e.disabled||s.value||t.goToItem(k.Specific,f,0))}function l(n){r.wasMoved(n)&&(e.disabled||s.value&&t.goToItem(k.Nothing))}return()=>{let{disabled:n,...c}=e,h={active:s.value,disabled:n,close:t.closeMenu};return j({ourProps:{id:f,ref:o,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,onClick:d,onFocus:a,onPointerenter:u,onMouseenter:u,onPointermove:i,onMousemove:i,onPointerleave:l,onMouseleave:l},theirProps:{...g,...c},slot:h,attrs:g,slots:m,name:"MenuItem"})}}});const V=he(ee.ui.strategy,ee.ui.dropdown,ze),xe=N({components:{HMenu:Ge,HMenuButton:We,HMenuItems:Ye,HMenuItem:Xe,UIcon:ue,UAvatar:le,UKbd:re},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>V.default.openDelay},closeDelay:{type:Number,default:()=>V.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:m}){const{ui:g,attrs:M}=_e("dropdown",X(e,"ui"),V,X(e,"class")),v=P(()=>we(e.mode==="hover"?{offsetDistance:0}:{},e.popper,g.value.popper)),[f,t]=Je(v.value),o=w(null);let s=null,p=null;se(()=>{var c,h;const l=(c=f.value)==null?void 0:c.$.provides;if(!l)return;const n=Object.getOwnPropertySymbols(l);o.value=n.length&&l[n[0]],e.open&&((h=o.value)==null||h.openMenu())});const I=P(()=>{var h,C,O;if(e.mode!=="hover")return{};const l=((h=e.popper)==null?void 0:h.offsetDistance)||((C=g.value.popper)==null?void 0:C.offsetDistance)||8,n=(O=v.value.placement)==null?void 0:O.split("-")[0],c=`${l}px`;return n==="top"||n==="bottom"?{paddingTop:c,paddingBottom:c}:n==="left"||n==="right"?{paddingLeft:c,paddingRight:c}:{paddingTop:c,paddingBottom:c,paddingLeft:c,paddingRight:c}});function d(l){!l.cancelable||!o.value||e.mode==="click"||(o.value.menuState===0?o.value.closeMenu():o.value.openMenu())}function a(){e.mode!=="hover"||!o.value||(p&&(clearTimeout(p),p=null),o.value.menuState!==0&&(s=s||setTimeout(()=>{o.value.openMenu&&o.value.openMenu(),s=null},e.openDelay)))}function r(){e.mode!=="hover"||!o.value||(s&&(clearTimeout(s),s=null),o.value.menuState!==1&&(p=p||setTimeout(()=>{o.value.closeMenu&&o.value.closeMenu(),p=null},e.closeDelay)))}function u(l,n,{href:c,navigate:h,close:C,isExternal:O}){n.click&&n.click(l),c&&!O&&(h(l),C())}x(()=>e.open,(l,n)=>{o.value&&(n===void 0||l===n||(l?o.value.openMenu():o.value.closeMenu()))}),x(()=>{var l;return(l=o.value)==null?void 0:l.menuState},(l,n)=>{n===void 0||l===n||m("update:open",l===0)});const i=oe;return Ce(()=>Re()),{ui:g,attrs:M,popper:v,trigger:f,container:t,containerStyle:I,onTouchStart:d,onMouseEnter:a,onMouseLeave:r,onClick:u,getNuxtLinkProps:Ve,twMerge:ke,twJoin:Se,NuxtLink:i}}}),et=["disabled"];function tt(e,m,g,M,v,f){const t=H("HMenuButton"),o=ue,s=le,p=re,I=H("HMenuItem"),d=oe,a=H("HMenuItems"),r=H("HMenu");return S(),A(r,F({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:R(({open:u})=>[$(t,{ref:"trigger",as:"div",disabled:e.disabled,class:T(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:R(()=>[Y(e.$slots,"default",{open:u,disabled:e.disabled},()=>[_("button",{disabled:e.disabled}," Open ",8,et)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),u&&e.items.length?(S(),D("div",{key:0,ref:"container",class:T([e.ui.container,e.ui.width]),style:Ie(e.containerStyle),onMouseenter:m[0]||(m[0]=(...i)=>e.onMouseEnter&&e.onMouseEnter(...i))},[$(ye,F({appear:""},e.ui.transition),{default:R(()=>[_("div",null,[e.popper.arrow?(S(),D("div",{key:0,"data-popper-arrow":"",class:T(Object.values(e.ui.arrow))},null,2)):L("",!0),$(a,{class:T([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:R(()=>[(S(!0),D(z,null,J(e.items,(i,l)=>(S(),D("div",{key:l,class:T(e.ui.padding)},[(S(!0),D(z,null,J(i,(n,c)=>(S(),A(d,F({key:c,ref_for:!0},e.getNuxtLinkProps(n),{custom:""}),{default:R(({href:h,target:C,rel:O,navigate:pe,isExternal:ce,isActive:Q})=>[$(I,{disabled:n.disabled},{default:R(({active:Z,disabled:G,close:ve})=>[(S(),A(Pe(h?"a":"button"),{href:G?void 0:h,rel:O,target:C,class:T(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,Z||Q?e.ui.item.active:e.ui.item.inactive,G&&e.ui.item.disabled),n.class)),onClick:B=>e.onClick(B,n,{href:h,navigate:pe,close:ve,isExternal:ce})},{default:R(()=>[Y(e.$slots,n.slot||"item",{item:n},()=>{var B;return[n.icon?(S(),A(o,{key:0,name:n.icon,class:T(e.twMerge(e.twJoin(e.ui.item.icon.base,Z||Q?e.ui.item.icon.active:e.ui.item.icon.inactive),n.iconClass))},null,8,["name","class"])):n.avatar?(S(),A(s,F({key:1,ref_for:!0},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):L("",!0),_("span",{class:T(e.twMerge(e.ui.item.label,n.labelClass))},te(n.label),3),(B=n.shortcuts)!=null&&B.length?(S(),D("span",{key:2,class:T(e.ui.item.shortcuts)},[(S(!0),D(z,null,J(n.shortcuts,W=>(S(),A(p,{key:W},{default:R(()=>[Te(te(W),1)]),_:2},1024))),128))],2)):L("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):L("",!0)]),_:3},16,["class","onMouseleave"])}const yt=Me(xe,[["render",tt]]);export{yt as default};
