import{e as q,p as C,n as _,q as ge,v as be,x as ee,r as $,P as O,F as te,y as oe,_ as ke,f as ue,w as H,b as J,s as K,c as V,C as se,E as L,T as ie,D as W,a as pe,z as Q,U as $e,I as Ce,J as ve,k as ce,L as de,V as Ee,o as j,M as Te}from"./CvKjYvnM.js";import{n as me,q as Fe,N as Be,E as Ie,d as I}from"./Q6gYWuj4.js";import{i as G,o as l,A as ae,u as A,a as M,N as fe,s as De}from"./DfSiwv7G.js";import{w as Oe}from"./cf4zp4Su.js";import{s as Me}from"./DFgBmb75.js";import{f as Y,u as Z}from"./DZAV4_pD.js";import{l as Ne,i as U,t as Ae}from"./BVNqnx93.js";import{i as le,P as N,N as D,E as ne,w as He,T as x,h as Le}from"./YUQJl5ri.js";import{c as je,u as Ge}from"./C_jEdgfE.js";import{u as Re}from"./Dt78DHQm.js";import"./Bhy5G53H.js";const ze={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:je};var Ke=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ke||{});let ye=Symbol("PopoverContext");function re(e){let P=oe(ye,null);if(P===null){let S=new Error(`<${e} /> is missing a parent <${he.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(S,re),S}return P}let Ue=Symbol("PopoverGroupContext");function Pe(){return oe(Ue,null)}let Se=Symbol("PopoverPanelContext");function qe(){return oe(Se,null)}let he=q({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:P,attrs:S,expose:T}){var h;let w=$(null);T({el:w,$el:w});let a=$(1),o=$(null),u=$(null),d=$(null),v=$(null),g=C(()=>le(w)),k=C(()=>{var t,r;if(!l(o)||!l(v))return!1;for(let z of document.querySelectorAll("body > *"))if(Number(z==null?void 0:z.contains(l(o)))^Number(z==null?void 0:z.contains(l(v))))return!0;let n=ne(),y=n.indexOf(l(o)),E=(y+n.length-1)%n.length,B=(y+1)%n.length,R=n[E],we=n[B];return!((t=l(v))!=null&&t.contains(R))&&!((r=l(v))!=null&&r.contains(we))}),b={popoverState:a,buttonId:$(null),panelId:$(null),panel:v,button:o,isPortalled:k,beforePanelSentinel:u,afterPanelSentinel:d,togglePopover(){a.value=A(a.value,{0:1,1:0})},closePopover(){a.value!==1&&(a.value=1)},close(t){b.closePopover();let r=t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?l(t):l(b.button):l(b.button);r==null||r.focus()}};be(ye,b),Ae(C(()=>A(a.value,{0:U.Open,1:U.Closed})));let F={buttonId:b.buttonId,panelId:b.panelId,close(){b.closePopover()}},s=Pe(),f=s==null?void 0:s.registerPopover,[m,p]=Fe(),c=Be({mainTreeNodeRef:s==null?void 0:s.mainTreeNodeRef,portals:m,defaultContainers:[o,v]});function i(){var t,r,n,y;return(y=s==null?void 0:s.isFocusWithinPopoverGroup())!=null?y:((t=g.value)==null?void 0:t.activeElement)&&(((r=l(o))==null?void 0:r.contains(g.value.activeElement))||((n=l(v))==null?void 0:n.contains(g.value.activeElement)))}return ee(()=>f==null?void 0:f(F)),Ie((h=g.value)==null?void 0:h.defaultView,"focus",t=>{var r,n;t.target!==window&&t.target instanceof HTMLElement&&a.value===0&&(i()||o&&v&&(c.contains(t.target)||(r=l(b.beforePanelSentinel))!=null&&r.contains(t.target)||(n=l(b.afterPanelSentinel))!=null&&n.contains(t.target)||b.closePopover()))},!0),Oe(c.resolveContainers,(t,r)=>{var n;b.closePopover(),He(r,Le.Loose)||(t.preventDefault(),(n=l(o))==null||n.focus())},C(()=>a.value===0)),()=>{let t={open:a.value===0,close:b.close};return O(te,[O(p,{},()=>ae({theirProps:{...e,...S},ourProps:{ref:w},slot:t,slots:P,attrs:S,name:"Popover"})),O(c.MainTreeNode)])}}}),Je=q({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-button-${G()}`,a=re("PopoverButton"),o=C(()=>le(a.button));T({el:a.button,$el:a.button}),_(()=>{a.buttonId.value=w}),ge(()=>{a.buttonId.value=null});let u=Pe(),d=u==null?void 0:u.closeOthers,v=qe(),g=C(()=>v===null?!1:v.value===a.panelId.value),k=$(null),b=`headlessui-focus-sentinel-${G()}`;g.value||ee(()=>{a.button.value=l(k)});let F=Me(C(()=>({as:e.as,type:P.type})),k);function s(t){var r,n,y,E,B;if(g.value){if(a.popoverState.value===1)return;switch(t.key){case M.Space:case M.Enter:t.preventDefault(),(n=(r=t.target).click)==null||n.call(r),a.closePopover(),(y=l(a.button))==null||y.focus();break}}else switch(t.key){case M.Space:case M.Enter:t.preventDefault(),t.stopPropagation(),a.popoverState.value===1&&(d==null||d(a.buttonId.value)),a.togglePopover();break;case M.Escape:if(a.popoverState.value!==0)return d==null?void 0:d(a.buttonId.value);if(!l(a.button)||(E=o.value)!=null&&E.activeElement&&!((B=l(a.button))!=null&&B.contains(o.value.activeElement)))return;t.preventDefault(),t.stopPropagation(),a.closePopover();break}}function f(t){g.value||t.key===M.Space&&t.preventDefault()}function m(t){var r,n;e.disabled||(g.value?(a.closePopover(),(r=l(a.button))==null||r.focus()):(t.preventDefault(),t.stopPropagation(),a.popoverState.value===1&&(d==null||d(a.buttonId.value)),a.togglePopover(),(n=l(a.button))==null||n.focus()))}function p(t){t.preventDefault(),t.stopPropagation()}let c=me();function i(){let t=l(a.panel);if(!t)return;function r(){A(c.value,{[I.Forwards]:()=>N(t,D.First),[I.Backwards]:()=>N(t,D.Last)})===x.Error&&N(ne().filter(n=>n.dataset.headlessuiFocusGuard!=="true"),A(c.value,{[I.Forwards]:D.Next,[I.Backwards]:D.Previous}),{relativeTo:l(a.button)})}r()}return()=>{let t=a.popoverState.value===0,r={open:t},{...n}=e,y=g.value?{ref:k,type:F.value,onKeydown:s,onClick:m}:{ref:k,id:w,type:F.value,"aria-expanded":a.popoverState.value===0,"aria-controls":l(a.panel)?a.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:s,onKeyup:f,onClick:m,onMousedown:p};return O(te,[ae({ourProps:y,theirProps:{...P,...n},slot:r,attrs:P,slots:S,name:"PopoverButton"}),t&&!g.value&&a.isPortalled.value&&O(Y,{id:b,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:i})])}}}),Ve=q({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-panel-${G()}`,{focus:a}=e,o=re("PopoverPanel"),u=C(()=>le(o.panel)),d=`headlessui-focus-sentinel-before-${G()}`,v=`headlessui-focus-sentinel-after-${G()}`;T({el:o.panel,$el:o.panel}),_(()=>{o.panelId.value=w}),ge(()=>{o.panelId.value=null}),be(Se,o.panelId),ee(()=>{var p,c;if(!a||o.popoverState.value!==0||!o.panel)return;let i=(p=u.value)==null?void 0:p.activeElement;(c=l(o.panel))!=null&&c.contains(i)||N(l(o.panel),D.First)});let g=Ne(),k=C(()=>g!==null?(g.value&U.Open)===U.Open:o.popoverState.value===0);function b(p){var c,i;switch(p.key){case M.Escape:if(o.popoverState.value!==0||!l(o.panel)||u.value&&!((c=l(o.panel))!=null&&c.contains(u.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),o.closePopover(),(i=l(o.button))==null||i.focus();break}}function F(p){var c,i,t,r,n;let y=p.relatedTarget;y&&l(o.panel)&&((c=l(o.panel))!=null&&c.contains(y)||(o.closePopover(),((t=(i=l(o.beforePanelSentinel))==null?void 0:i.contains)!=null&&t.call(i,y)||(n=(r=l(o.afterPanelSentinel))==null?void 0:r.contains)!=null&&n.call(r,y))&&y.focus({preventScroll:!0})))}let s=me();function f(){let p=l(o.panel);if(!p)return;function c(){A(s.value,{[I.Forwards]:()=>{var i;N(p,D.First)===x.Error&&((i=l(o.afterPanelSentinel))==null||i.focus())},[I.Backwards]:()=>{var i;(i=l(o.button))==null||i.focus({preventScroll:!0})}})}c()}function m(){let p=l(o.panel);if(!p)return;function c(){A(s.value,{[I.Forwards]:()=>{let i=l(o.button),t=l(o.panel);if(!i)return;let r=ne(),n=r.indexOf(i),y=r.slice(0,n+1),E=[...r.slice(n+1),...y];for(let B of E.slice())if(B.dataset.headlessuiFocusGuard==="true"||t!=null&&t.contains(B)){let R=E.indexOf(B);R!==-1&&E.splice(R,1)}N(E,D.First,{sorted:!1})},[I.Backwards]:()=>{var i;N(p,D.Previous)===x.Error&&((i=l(o.button))==null||i.focus())}})}c()}return()=>{let p={open:o.popoverState.value===0,close:o.close},{focus:c,...i}=e,t={ref:o.panel,id:w,onKeydown:b,onFocusout:a&&o.popoverState.value===0?F:void 0,tabIndex:-1};return ae({ourProps:t,theirProps:{...P,...i},attrs:P,slot:p,slots:{...S,default:(...r)=>{var n;return[O(te,[k.value&&o.isPortalled.value&&O(Y,{id:d,ref:o.beforePanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:f}),(n=S.default)==null?void 0:n.call(S,...r),k.value&&o.isPortalled.value&&O(Y,{id:v,ref:o.afterPanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:m})])]}},features:fe.RenderStrategy|fe.Static,visible:k.value,name:"PopoverPanel"})}}});const X=Ce(de.ui.strategy,de.ui.popover,ze),We=q({components:{HPopover:he,HPopoverButton:Je,HPopoverPanel:Ve},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:()=>X.default.openDelay},closeDelay:{type:Number,default:()=>X.default.closeDelay},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:P}){const{ui:S,attrs:T}=Ge("popover",ve(e,"ui"),X,ve(e,"class")),h=C(()=>Ee(e.mode==="hover"?{offsetDistance:0}:{},e.popper,S.value.popper)),[w,a]=Re(h.value),o=$(null),u=$(null);let d=null,v=null;_(()=>{var m,p;const s=(m=o.value)==null?void 0:m.$.provides;if(!s)return;const f=Object.getOwnPropertySymbols(s);u.value=f.length&&s[f[0]],e.open&&((p=u.value)==null||p.togglePopover())});const g=C(()=>{var p,c,i;if(e.mode!=="hover")return{};const s=((p=e.popper)==null?void 0:p.offsetDistance)||((c=S.value.popper)==null?void 0:c.offsetDistance)||8,f=(i=h.value.placement)==null?void 0:i.split("-")[0],m=`${s}px`;return f==="top"||f==="bottom"?{paddingTop:m,paddingBottom:m}:f==="left"||f==="right"?{paddingLeft:m,paddingRight:m}:{paddingTop:m,paddingBottom:m,paddingLeft:m,paddingRight:m}});function k(s){!s.cancelable||!u.value||e.mode==="click"||(u.value.popoverState===0?u.value.closePopover():u.value.togglePopover())}function b(){e.mode!=="hover"||!u.value||(v&&(clearTimeout(v),v=null),u.value.popoverState!==0&&(d=d||setTimeout(()=>{u.value.togglePopover&&u.value.togglePopover(),d=null},e.openDelay)))}function F(){e.mode!=="hover"||!u.value||(d&&(clearTimeout(d),d=null),u.value.popoverState!==1&&(v=v||setTimeout(()=>{u.value.closePopover&&u.value.closePopover(),v=null},e.closeDelay)))}return ce(()=>e.open,(s,f)=>{u.value&&(f===void 0||s===f||(s?u.value.popoverState=0:u.value.closePopover()))}),ce(()=>{var s;return(s=u.value)==null?void 0:s.popoverState},(s,f)=>{f===void 0||s===f||P("update:open",s===0)}),De(()=>Te()),{ui:S,attrs:T,popover:o,popper:h,trigger:w,container:a,containerStyle:g,onTouchStart:k,onMouseEnter:b,onMouseLeave:F}}}),Qe=["disabled"];function Xe(e,P,S,T,h,w){const a=Q("HPopoverButton"),o=Q("HPopoverPanel"),u=Q("HPopover");return j(),ue(u,W({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:H(({open:d,close:v})=>[J(a,{ref:"trigger",as:"div",disabled:e.disabled,class:L(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:H(()=>[se(e.$slots,"default",{open:d,close:v},()=>[pe("button",{disabled:e.disabled}," Open ",8,Qe)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),e.overlay?(j(),ue(ie,W({key:0,appear:""},e.ui.overlay.transition),{default:H(()=>[d?(j(),V("div",{key:0,class:L([e.ui.overlay.base,e.ui.overlay.background])},null,2)):K("",!0)]),_:2},1040)):K("",!0),d?(j(),V("div",{key:1,ref:"container",class:L([e.ui.container,e.ui.width]),style:$e(e.containerStyle),onMouseenter:P[0]||(P[0]=(...g)=>e.onMouseEnter&&e.onMouseEnter(...g))},[J(ie,W({appear:""},e.ui.transition),{default:H(()=>[pe("div",null,[e.popper.arrow?(j(),V("div",{key:0,"data-popper-arrow":"",class:L(Object.values(e.ui.arrow))},null,2)):K("",!0),J(o,{class:L([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:H(()=>[se(e.$slots,"panel",{open:d,close:v})]),_:2},1032,["class"])])]),_:2},1040)],38)):K("",!0)]),_:3},16,["class","onMouseleave"])}const ut=ke(We,[["render",Xe]]);export{ut as default};
