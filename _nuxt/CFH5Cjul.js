import O from"./BZu6uv92.js";import{u as A,a as D,b as z}from"./Bhy5G53H.js";import{r as h,n as I,q as W,_ as X,e as V,c as u,a as M,s as m,F as $,A as N,E as v,C as y,D as w,I as q,J as S,p,N as J,L as j,o as n,f as F}from"./CvKjYvnM.js";import{u as T}from"./C_jEdgfE.js";import"./B1p0J9CZ.js";import"./BAL46taT.js";import"./BpJBcgWm.js";import"./fw8Foj7s.js";import"./CfIzpCDP.js";import"./Cl2SVslI.js";import"./d1rW2KLm.js";import"./CHOj1P8S.js";const G={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute start-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute end-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid"}}},H=e=>{const l=h(0);function d(t){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",l.value=t.pageX,window.addEventListener("mousemove",r),window.addEventListener("mouseup",c)}function c(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),e.value.style.removeProperty("pointer-events"),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",c)}function r(t){t.preventDefault(),e.value.style.pointerEvents="none";const o=t.pageX-l.value;l.value=t.pageX,e.value.scrollBy(-o,0)}I(()=>{e.value&&e.value.addEventListener("mousedown",d)}),W(()=>{e.value&&e.value.removeEventListener("mousedown",d)})},g=q(j.ui.strategy,j.ui.carousel,G),K=V({components:{UButton:O},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},dir:{type:String,default:"ltr"},prevButton:{type:Object,default:()=>g.default.prevButton},nextButton:{type:Object,default:()=>g.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:l}){const{ui:d,attrs:c}=T("carousel",S(e,"ui"),g,S(e,"class")),r=h(),t=h(0),{x:o}=A(r,{behavior:"smooth"}),{width:a}=D(r);H(r),z(r,i=>{var E,L;const[k]=i;t.value=((L=(E=k==null?void 0:k.target)==null?void 0:E.firstElementChild)==null?void 0:L.clientWidth)||0});const s=p(()=>e.dir==="rtl"),f=p(()=>t.value?s.value?Math.round(-o.value/t.value)+1:Math.round(o.value/t.value)+1:0),b=p(()=>{if(!t.value)return 0;const i=Math.round(a.value/t.value);return e.items.length<=i?0:e.items.length-i+1}),R=p(()=>f.value<=1),U=p(()=>f.value===b.value);function C(){o.value+=s.value?-t.value:t.value}function B(){o.value-=s.value?-t.value:t.value}function P(i){o.value=(i-1)*t.value*(s.value?-1:1)}return l({pages:b,page:f,prev:B,next:C,select:P}),{ui:d,attrs:c,isFirst:R,isLast:U,carouselRef:r,pages:b,currentPage:f,onClickNext:C,onClickPrev:B,onClick:P,twMerge:J}}}),Q=["dir"],Y=["role"],Z=["aria-selected","aria-label","onClick"];function x(e,l,d,c,r,t){const o=O;return n(),u("div",w({class:e.ui.wrapper},e.attrs,{dir:e.dir}),[M("div",{ref:"carouselRef",class:v([e.ui.container,"no-scrollbar"])},[(n(!0),u($,null,N(e.items,(a,s)=>(n(),u("div",{key:s,class:v(e.ui.item),role:e.indicators?"tabpanel":null},[y(e.$slots,"default",{item:a,index:s},void 0,!0)],10,Y))),128))],2),e.arrows?(n(),u("div",{key:0,class:v(e.ui.arrows.wrapper)},[y(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var a;return[e.prevButton?(n(),F(o,w({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(a=e.prevButton)==null?void 0:a.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):m("",!0)]},!0),y(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var a;return[e.nextButton?(n(),F(o,w({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(a=e.nextButton)==null?void 0:a.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):m("",!0)]},!0)],2)):m("",!0),e.indicators?(n(),u("div",{key:1,role:"tablist",class:v(e.ui.indicators.wrapper)},[(n(!0),u($,null,N(e.pages,a=>y(e.$slots,"indicator",{key:a,onClick:e.onClick,active:a===e.currentPage,page:a},()=>[M("button",{type:"button",role:"tab","aria-selected":a===e.currentPage,class:v([e.ui.indicators.base,a===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${a}`,onClick:s=>e.onClick(a)},null,10,Z)],!0)),128))],2)):m("",!0)],16,Q)}const ce=X(K,[["render",x],["__scopeId","data-v-a3da86ff"]]);export{ce as default};
