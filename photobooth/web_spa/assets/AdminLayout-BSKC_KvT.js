import{v as A,ac as x,ad as M,d as f,w as p,t as c,P as T,ae as C,af as N,N as O,r as q,a3 as j,Q as d,I as g,ag as F,ah as G,_ as z,ai as U,m as W,f as K,n as J,p as t,q as a,C as _,D as m,B as w}from"./index-EiYPTeVj.js";import{u as X,a as Y,b as Z,Q as ee,c as ae}from"./QToolbarTitle-D3e7OOW1.js";import{Q as b,a as i,b as h}from"./QItem-B7CSsOQ7.js";import{Q as te}from"./QList-CZa2t3Uf.js";import{Q as ne}from"./rtl-CDuQ0wN0.js";import{u as oe}from"./use-id-Dq3rPgHm.js";import{Q as le,a as se}from"./QHeader-BsMuEJuF.js";import{Q as ue,a as re}from"./QLayout-COzW_Aw2.js";import"./selection-rSRnKrUp.js";const v=A({name:"QRouteTab",props:{...x,...X},emits:Y,setup(e,{slots:s,emit:o}){const l=M({useDisableForRouterLinkProps:!1}),{renderTab:r,$tabs:u}=Z(e,s,o,{exact:f(()=>e.exact),...l});return p(()=>`${e.name} | ${e.exact} | ${(l.resolvedLink.value||{}).href}`,()=>{u.verifyRouteModel()}),()=>r(l.linkTag.value,l.linkAttrs.value)}}),ie=A({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:s}){const o=f(()=>{const l=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(r=>e[r]===!0).map(r=>`q-btn-group--${r}`).join(" ");return`q-btn-group row no-wrap${l.length!==0?" "+l:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>c("div",{class:o.value},T(s.default))}}),de=Object.keys(C);function ce(e){return de.reduce((s,o)=>{const l=e[o];return l!==void 0&&(s[o]=l),s},{})}const fe=A({name:"QBtnDropdown",props:{...C,...N,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:s,emit:o}){const{proxy:l}=O(),r=q(e.modelValue),u=q(null),B=oe(),L=f(()=>{const n={"aria-expanded":r.value===!0?"true":"false","aria-haspopup":"true","aria-controls":B.value,"aria-label":e.toggleAriaLabel||l.$q.lang.label[r.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),$=f(()=>"q-btn-dropdown__arrow"+(r.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),k=f(()=>F(e)),Q=f(()=>ce(e));p(()=>e.modelValue,n=>{u.value!==null&&u.value[n?"show":"hide"]()}),p(()=>e.split,y);function D(n){r.value=!0,o("beforeShow",n)}function I(n){o("show",n),o("update:modelValue",!0)}function R(n){r.value=!1,o("beforeHide",n)}function P(n){o("hide",n),o("update:modelValue",!1)}function E(n){o("click",n)}function H(n){G(n),y(),o("click",n)}function V(n){u.value!==null&&u.value.toggle(n)}function S(n){u.value!==null&&u.value.show(n)}function y(n){u.value!==null&&u.value.hide(n)}return Object.assign(l,{show:S,hide:y,toggle:V}),j(()=>{e.modelValue===!0&&S()}),()=>{const n=[c(d,{class:$.value,name:e.dropdownIcon||l.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(c(ne,{ref:u,id:B.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:D,onShow:I,onBeforeHide:R,onHide:P},s.default)),e.split===!1?c(g,{class:"q-btn-dropdown q-btn-dropdown--simple",...Q.value,...L.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:E},{default:()=>T(s.label,[]).concat(n),loading:s.loading}):c(ie,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...k.value,glossy:e.glossy,stretch:e.stretch},()=>[c(g,{class:"q-btn-dropdown--current",...Q.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:H},{default:s.label,loading:s.loading}),c(g,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...L.value,...k.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}}),_e={setup(){return{}},methods:{click_logout(){U(),this.$router.push("/")}}},me=w("div",null,[w("a",{href:"https://photobooth-app.org/",target:"_new",class:"q-mr-lg"},[w("img",{src:"icons/logo-notext-white-transparent.png",style:{"max-height":"40px"}})])],-1);function be(e,s,o,l,r,u){const B=W("router-view");return K(),J(re,{id:"admin-layout",view:"hHh lpR fFf"},{default:t(()=>[a(se,{class:"bg-secondary text-white"},{default:t(()=>[a(le,{class:"q-pa-none"},{default:t(()=>[a(g,{class:"q-mx-sm",stack:"",to:"/",icon:"sym_o_arrow_back_ios_new",label:e.$t("BTN_LABEL_BACK")},null,8,["label"]),a(ee,{"mobile-arrows":"",shrink:"",stretch:""},{default:t(()=>[a(v,{to:"/admin",icon:"sym_o_dashboard",label:e.$t("TAB_LABEL_DASHBOARD")},null,8,["label"]),a(v,{to:{name:"config"},icon:"sym_o_settings",label:e.$t("TAB_LABEL_CONFIG")},null,8,["label"]),a(v,{to:"/admin/files",icon:"sym_o_folder_shared",label:e.$t("TAB_LABEL_FILES")},null,8,["label"]),a(v,{to:"/admin/status",icon:"sym_o_insights",label:e.$t("TAB_LABEL_STATUS")},null,8,["label"]),a(fe,{"auto-close":"",stretch:"",flat:"",label:""},{default:t(()=>[a(te,null,{default:t(()=>[a(b,{to:"/admin/1ststart"},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(d,{name:"sym_o_info"})]),_:1}),a(i,null,{default:t(()=>[a(h,null,{default:t(()=>[_(m(e.$t("1st Start")),1)]),_:1})]),_:1})]),_:1}),a(b,{to:"/admin/logs"},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(d,{name:"sym_o_list"})]),_:1}),a(i,null,{default:t(()=>[a(h,null,{default:t(()=>[_(m(e.$t("Logs")),1)]),_:1})]),_:1})]),_:1}),a(b,{to:"/admin/help"},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(d,{name:"sym_o_help"})]),_:1}),a(i,null,{default:t(()=>[a(h,null,{default:t(()=>[_(m(e.$t("TAB_LABEL_HELP")),1)]),_:1})]),_:1})]),_:1}),a(b,{href:"/api/doc",target:"_blank"},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(d,{name:"sym_o_api"})]),_:1}),a(i,null,{default:t(()=>[a(h,null,{default:t(()=>[_(m(e.$t("Rest-API documentation")),1)]),_:1})]),_:1}),a(i,{side:""},{default:t(()=>[a(d,{name:"sym_o_open_in_new"})]),_:1})]),_:1}),a(b,{href:"https://photobooth-app.org/",target:"_blank"},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(d,{name:"sym_o_link"})]),_:1}),a(i,null,{default:t(()=>[a(h,null,{default:t(()=>[_("photobooth-app.org")]),_:1})]),_:1}),a(i,{side:""},{default:t(()=>[a(d,{name:"sym_o_open_in_new"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(ae,{align:"right",class:"q-mr-lg"},{default:t(()=>[w("span",null,m(e.$t("TITLE_ADMIN_CENTER")),1)]),_:1}),me,w("div",null,[a(g,{class:"q-mx-sm",stack:"",icon:"sym_o_logout",label:e.$t("Sign out"),onClick:u.click_logout},null,8,["label","onClick"])])]),_:1})]),_:1}),a(ue,null,{default:t(()=>[a(B)]),_:1})]),_:1})}const ke=z(_e,[["render",be],["__file","AdminLayout.vue"]]);export{ke as default};