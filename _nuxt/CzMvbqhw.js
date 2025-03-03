import V from"./B1p0J9CZ.js";import q from"./BZu6uv92.js";import{e as E,n as G,q as J,v as Q,p as b,r as g,x as Z,y as _,_ as x,z as C,c as $,o as D,F as ee,A as te,f as z,w as y,b as I,B as K,C as H,D as T,E as S,T as oe,G as ne,d as U,t as j,H as se,I as W,J as M,k as le,K as ae,L as w,M as re}from"./CvKjYvnM.js";import{A as L,N,o as h,a as B,i as R,u as F,s as ue}from"./DfSiwv7G.js";import{s as ie}from"./DFgBmb75.js";import{l as ce,i as k,t as pe}from"./BVNqnx93.js";import{u as de}from"./C_jEdgfE.js";import{b as fe}from"./CHOj1P8S.js";import"./BAL46taT.js";import"./BpJBcgWm.js";import"./fw8Foj7s.js";import"./CfIzpCDP.js";import"./Cl2SVslI.js";import"./d1rW2KLm.js";const me={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200 flex-shrink-0"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft",truncate:!0}};var ve=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ve||{});let X=Symbol("DisclosureContext");function A(e){let i=_(X,null);if(i===null){let d=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,A),d}return i}let Y=Symbol("DisclosurePanelContext");function ge(){return _(Y,null)}let ye=E({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:i,attrs:d}){let u=g(e.defaultOpen?0:1),o=g(null),p=g(null),a={buttonId:g(`headlessui-disclosure-button-${R()}`),panelId:g(`headlessui-disclosure-panel-${R()}`),disclosureState:u,panel:o,button:p,toggleDisclosure(){u.value=F(u.value,{0:1,1:0})},closeDisclosure(){u.value!==1&&(u.value=1)},close(l){a.closeDisclosure();let c=l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?h(l):h(a.button):h(a.button);c==null||c.focus()}};return Q(X,a),pe(b(()=>F(u.value,{0:k.Open,1:k.Closed}))),()=>{let{defaultOpen:l,...c}=e,f={open:u.value===0,close:a.close};return L({theirProps:c,ourProps:{},slot:f,slots:i,attrs:d,name:"Disclosure"})}}}),he=E({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:i,slots:d,expose:u}){let o=A("DisclosureButton"),p=ge(),a=b(()=>p===null?!1:p.value===o.panelId.value);G(()=>{a.value||e.id!==null&&(o.buttonId.value=e.id)}),J(()=>{a.value||(o.buttonId.value=null)});let l=g(null);u({el:l,$el:l}),a.value||Z(()=>{o.button.value=l.value});let c=ie(b(()=>({as:e.as,type:i.type})),l);function f(){var t;e.disabled||(a.value?(o.toggleDisclosure(),(t=h(o.button))==null||t.focus()):o.toggleDisclosure())}function v(t){var n;if(!e.disabled)if(a.value)switch(t.key){case B.Space:case B.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure(),(n=h(o.button))==null||n.focus();break}else switch(t.key){case B.Space:case B.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure();break}}function r(t){switch(t.key){case B.Space:t.preventDefault();break}}return()=>{var t;let n={open:o.disclosureState.value===0},{id:s,...m}=e,O=a.value?{ref:l,type:c.value,onClick:f,onKeydown:v}:{id:(t=o.buttonId.value)!=null?t:s,ref:l,type:c.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||h(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:f,onKeydown:v,onKeyup:r};return L({ourProps:O,theirProps:m,slot:n,attrs:i,slots:d,name:"DisclosureButton"})}}}),be=E({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:i,slots:d,expose:u}){let o=A("DisclosurePanel");G(()=>{e.id!==null&&(o.panelId.value=e.id)}),J(()=>{o.panelId.value=null}),u({el:o.panel,$el:o.panel}),Q(Y,o.panelId);let p=ce(),a=b(()=>p!==null?(p.value&k.Open)===k.Open:o.disclosureState.value===0);return()=>{var l;let c={open:o.disclosureState.value===0,close:o.close},{id:f,...v}=e,r={id:(l=o.panelId.value)!=null?l:f,ref:o.panel};return L({ourProps:r,theirProps:v,slot:c,attrs:i,slots:d,features:N.RenderStrategy|N.Static,visible:a.value,name:"DisclosurePanel"})}}});const P=W(w.ui.strategy,w.ui.accordion,me),De=W(w.ui.strategy,w.ui.button,fe),Ie=E({components:{HDisclosure:ye,HDisclosureButton:he,HDisclosurePanel:be,UIcon:V,UButton:q},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>P.default.openIcon},unmount:{type:Boolean,default:!1},closeIcon:{type:String,default:()=>P.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["open","close"],setup(e,{emit:i}){const{ui:d,attrs:u}=de("accordion",M(e,"ui"),P,M(e,"class")),o=b(()=>De),p=g([]),a=b(()=>p.value.map(({open:t})=>t));le(a,(t,n)=>{for(const s in t){const m=n[s],O=t[s];!m&&O?i("open",s):m&&!O&&i("close",s)}},{immediate:!0});function l(t,n){!e.items[t].closeOthers&&e.multiple||p.value.forEach(s=>{s.open&&s.close(n.target)})}function c(t,n){const s=t;s.style.height="0",s.offsetHeight,s.style.height=s.scrollHeight+"px",s.addEventListener("transitionend",n,{once:!0})}function f(t){const n=t;n.style.height=n.scrollHeight+"px",n.offsetHeight}function v(t){const n=t;n.style.height="auto"}function r(t,n){const s=t;s.style.height="0",s.addEventListener("transitionend",n,{once:!0})}return ue(()=>re()),{ui:d,uiButton:o,attrs:u,buttonRefs:p,closeOthers:l,omit:ae,onEnter:c,onBeforeLeave:f,onAfterEnter:v,onLeave:r}}}),Se={key:1};function Be(e,i,d,u,o,p){const a=V,l=q,c=C("HDisclosureButton"),f=C("HDisclosurePanel"),v=C("HDisclosure");return D(),$("div",{class:S(e.ui.wrapper)},[(D(!0),$(ee,null,te(e.items,(r,t)=>(D(),z(v,{key:t,as:"div",class:S(e.ui.container),"default-open":e.defaultOpen||r.defaultOpen},{default:y(({open:n,close:s})=>[I(c,{ref_for:!0,ref:()=>e.buttonRefs[t]={open:n,close:s},as:"template",disabled:r.disabled,onClick:m=>e.closeOthers(t,m),onKeydown:[K(m=>e.closeOthers(t,m),["enter"]),K(m=>e.closeOthers(t,m),["space"])]},{default:y(()=>[H(e.$slots,"default",{item:r,index:t,open:n,close:s},()=>[I(l,T({ref_for:!0},{...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(r,["slot","disabled","content","defaultOpen"])}),{trailing:y(()=>[I(a,{name:n&&e.closeIcon?e.closeIcon:e.openIcon,class:S([n&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[r.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),I(oe,T({ref_for:!0},e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:y(()=>[e.unmount?(D(),z(f,{key:0,class:S([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),unmount:""},{default:y(()=>[H(e.$slots,r.slot||"item",{item:r,index:t,open:n,close:s},()=>[U(j(r.content),1)])]),_:2},1032,["class"])):ne((D(),$("div",Se,[I(f,{class:S([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:y(()=>[H(e.$slots,r.slot||"item",{item:r,index:t,open:n,close:s},()=>[U(j(r.content),1)])]),_:2},1032,["class"])],512)),[[se,n]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const je=x(Ie,[["render",Be]]);export{je as default};
