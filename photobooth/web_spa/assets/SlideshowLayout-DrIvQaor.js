import{_ as p,j as i,k as u,c,m as l,f,n as _,p as a,q as o,Q as d,H as m,B as h,D as w}from"./index-BTmksj4Y.js";import{Q as v}from"./QPageSticky-BTUmY_vj.js";import{Q as g,a as y}from"./QLayout-D_GpIpqM.js";const B=i({name:"SlideshowLayout",components:{},setup(){const s=u(),e=c();s.$subscribe((n,t)=>{t.state=="counting"&&e.path!="/"&&(console.log("counting state received, pushing to index page to countdown"),e.push("/")),t.state=="present_capture"&&e.push({path:"/itempresenter"}),t.state=="approve_capture"&&t.ask_user_for_approval&&e.push({path:"/itemapproval"})})},computed:{}});function Q(s,e,n,t,S,k){const r=l("router-view");return f(),_(y,{id:"slideshow-layout",view:"hHh lpR fFf"},{default:a(()=>[o(g,{class:"fullscreen"},{default:a(()=>[o(r),o(v,{position:"top-left",offset:[25,25],style:{}},{default:a(()=>[o(d,{id:"slideshow-button-to-frontpage",color:"primary",rounded:"","no-caps":"",to:"/",class:"action-button"},{default:a(()=>[o(m,{left:"",name:"arrow_back_ios_new"}),h("div",null,w(s.$t("BTN_LABEL_BACK")),1)]),_:1})]),_:1})]),_:1})]),_:1})}const C=p(B,[["render",Q],["__file","SlideshowLayout.vue"]]);export{C as default};
