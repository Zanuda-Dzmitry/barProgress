import w from"./BZu6uv92.js";import C from"./B1p0J9CZ.js";import{_ as k,p as z,c as _,o,a as g,h as p,f as l,s as b,t as R,r as f,w as a,b as c,d}from"./CvKjYvnM.js";import V from"./DkGUJBp4.js";import"./BpJBcgWm.js";import"./fw8Foj7s.js";import"./CfIzpCDP.js";import"./Cl2SVslI.js";import"./C_jEdgfE.js";import"./d1rW2KLm.js";import"./CHOj1P8S.js";import"./BAL46taT.js";const N={class:"progress-circle"},P={width:"100",height:"100"},T=["stroke","stroke-dashoffset","transform"],D={class:"icon"},S={key:2,class:"progress-value"},U={__name:"ProgressBar",props:{status:{type:String,default:"in-progress"},progress:{type:Number,default:0},transformRotate:{type:String,default:"rotate(90 50 50)"}},setup(s){const e=s,t=z(()=>e.progress<25?"red":e.progress<50?"orange":e.progress<75?"blue":"green");return(i,u)=>{const n=C;return o(),_("div",N,[(o(),_("svg",P,[u[0]||(u[0]=g("circle",{cx:"50",cy:"50",r:"45",stroke:"#e6e6e6","stroke-width":"10",fill:"none"},null,-1)),g("circle",{cx:"50",cy:"50",r:"45",stroke:p(t),"stroke-width":"10",fill:"none","stroke-dasharray":"283","stroke-dashoffset":283-283*s.progress/100,"stroke-linecap":"round",transform:s.transformRotate,class:"progress-bar"},null,8,T)])),g("div",D,[s.status==="error"?(o(),l(n,{key:0,name:"i-lucide-x",class:"size-5 text-red-500"})):s.status==="warning"?(o(),l(n,{key:1,name:"i-lucide-circle",class:"size-5 text-orange-500"})):s.status==="in-progress"?(o(),_("span",S,R(s.progress)+"%",1)):s.status==="success"?(o(),l(n,{key:3,name:"i-lucide-check",class:"size-5 text-green-500"})):b("",!0)])])}}},$=k(U,[["__scopeId","data-v-c3542de6"]]),E={__name:"ProgressBarDashboard",setup(s){const e=f(0),t=f("in-progress"),i=f("rotate(-90 50 50)"),u=()=>{i.value=i.value==="rotate(-90 50 50)"?"rotate(90 50 50)":"rotate(-90 50 50)"},n=()=>{e.value<100&&t.value==="in-progress"?(e.value+=1,setTimeout(n,100)):e.value===100&&(t.value="success")},v=()=>{e.value=0,t.value="in-progress",n()},x=()=>{e.value=23,t.value="error"},y=()=>{e.value=45,t.value="warning"};return(j,r)=>{const m=w,h=$,B=V;return o(),l(B,null,{header:a(()=>[c(m,{class:"m-5",size:"sm",onClick:v},{default:a(()=>r[0]||(r[0]=[d("Reloading")])),_:1}),c(m,{class:"m-5",color:"red",size:"sm",onClick:x},{default:a(()=>r[1]||(r[1]=[d("Error")])),_:1}),c(m,{class:"m-5",color:"orange",size:"sm",onClick:y},{default:a(()=>r[2]||(r[2]=[d("Warning")])),_:1}),c(m,{class:"m-5",size:"sm",onClick:u},{default:a(()=>r[3]||(r[3]=[d("Type")])),_:1})]),default:a(()=>[c(h,{progress:p(e),status:p(t),transformRotate:p(i)},null,8,["progress","status","transformRotate"])]),_:1})}}},I={};function W(s,e){const t=E;return o(),l(t)}const Y=k(I,[["render",W]]);export{Y as default};
