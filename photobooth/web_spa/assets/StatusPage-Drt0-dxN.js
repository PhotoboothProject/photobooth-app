import{Q as n,a as d,b as r}from"./QItemLabel-g6bGkJMN.js";import{Q as y}from"./QLinearProgress-BnFpap_e.js";import{Q as _}from"./QList-B-AHy2l0.js";import{v as L,d as C,t as N,ab as w,_ as I,j as V,Q as k,E as F,F as P,m as R,f as s,n as c,p as l,B as u,q as e,a1 as g,C as o,D as a,X as m,h as p,V as $,U as v,s as E}from"./index-7q0rWrNn.js";import{Q as G}from"./QMarkupTable-Cuq7Zffz.js";import{Q as M}from"./QPage-DxaNNaMf.js";const j=["top","middle","bottom"],z=L({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:t=>j.includes(t)}},setup(t,{slots:Q}){const q=C(()=>t.align!==void 0?{verticalAlign:t.align}:null),B=C(()=>{const b=t.outline===!0&&t.color||t.textColor;return`q-badge flex inline items-center no-wrap q-badge--${t.multiLine===!0?"multi":"single"}-line`+(t.outline===!0?" q-badge--outline":t.color!==void 0?` bg-${t.color}`:"")+(b!==void 0?` text-${b}`:"")+(t.floating===!0?" q-badge--floating":"")+(t.rounded===!0?" q-badge--rounded":"")+(t.transparent===!0?" q-badge--transparent":"")});return()=>N("div",{class:B.value,style:q.value,role:"status","aria-label":t.label},w(Q.default,t.label!==void 0?[t.label]:[]))}}),A=V({name:"MainLayout",components:{QBtn:k},setup(){return{store:F(),remoteProcedureCall:P}},methods:{debugLevelColor(t){return t=="DEBUG"||t=="INFO"?"info":t=="WARNING"?"warning":t=="ERROR"||t=="CRITICAL"?"negative":"grey"}}}),D={class:"row col-xs-12 col-sm-4 col-md-3 col-lg-3"},O={class:"row q-gutter-sm"},T={class:"text-h5"},U={class:"text-left"},W={style:{width:"100%"}};function X(t,Q,q,B,b,H){const S=R("QBtn");return s(),c(M,{padding:""},{default:l(()=>[u("div",D,[e(m,{class:"q-mr-md q-mb-md"},{default:l(()=>[e(g,null,{default:l(()=>[e(_,{separator:""},{default:l(()=>[e(n,{header:""},{default:l(()=>[o(a(t.$t("system information")),1)]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("data directory")),1)]),_:1}),e(n,null,{default:l(()=>[o(a(t.store.information.data_directory),1)]),_:1})]),_:1}),e(r,{side:""},{default:l(()=>[e(k,{flat:"",round:"",color:"primary",icon:"folder_shared",to:"/admin/files"})]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("app version")),1)]),_:1}),e(n,null,{default:l(()=>[o(a(t.store.information.version),1)]),_:1})]),_:1}),e(r,{side:""},{default:l(()=>[e(k,{flat:"",round:"",color:"primary",icon:"upgrade",href:"https://pypi.org/project/photobooth-app/",target:"_blank"})]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("cpu load")),1)]),_:1}),e(n,null,{default:l(()=>[e(y,{size:"lg",value:t.store.information.cpu1_5_15[0]/100},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("disk space")),1)]),_:1}),e(n,null,{default:l(()=>[e(y,{size:"lg",value:t.store.information.disk.used/t.store.information.disk.total},null,8,["value"])]),_:1}),e(n,null,{default:l(()=>[o(a((t.store.information.disk.free/1024**3).toFixed(1))+a(t.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("memory")),1)]),_:1}),e(n,null,{default:l(()=>[e(y,{size:"lg",value:t.store.information.memory.used/t.store.information.memory.total},null,8,["value"])]),_:1}),e(n,null,{default:l(()=>[o(a((t.store.information.memory.available/1024**3).toFixed(1))+a(t.$t("GB available")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{class:"q-mr-md q-mb-md"},{default:l(()=>[e(g,null,{default:l(()=>[e(_,{separator:""},{default:l(()=>[e(n,{header:""},{default:l(()=>[o(a(t.$t("platform")),1)]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("hostname")),1)]),_:1}),e(n,null,{default:l(()=>[o(a(t.store.information.platform_node),1)]),_:1})]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("machine")),1)]),_:1}),e(n,null,{default:l(()=>[o(a(t.$t("{platform_machine}, {cpu_count} cores",{platform_machine:t.store.information.platform_machine,cpu_count:t.store.information.platform_cpu_count})),1)]),_:1})]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("platform system")),1)]),_:1}),e(n,null,{default:l(()=>[o(a(t.store.information.platform_system)+" "+a(t.store.information.platform_release),1)]),_:1})]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("python executable")),1)]),_:1}),e(n,null,{default:l(()=>[o(a(t.store.information.python_executable),1)]),_:1})]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(t.$t("python version")),1)]),_:1}),e(n,null,{default:l(()=>[o(a(t.store.information.platform_python_version),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{class:"q-mr-md q-mb-md"},{default:l(()=>[e(g,null,{default:l(()=>[e(_,{separator:""},{default:l(()=>[e(n,{header:""},{default:l(()=>[o(a(t.$t("primary backend")),1)]),_:1}),(s(!0),p(v,null,$(t.store.information.backends.primary,(i,f,h)=>(s(),c(d,{key:h},{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(f),1)]),_:2},1024),e(n,null,{default:l(()=>[o(a(i),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),Object.keys(t.store.information.backends.secondary).length>0?(s(),c(m,{key:0,class:"q-mr-md q-mb-md"},{default:l(()=>[e(g,null,{default:l(()=>[e(_,{separator:""},{default:l(()=>[e(n,{header:""},{default:l(()=>[o(a(t.$t("secondary backend")),1)]),_:1}),(s(!0),p(v,null,$(t.store.information.backends.secondary,(i,f,h)=>(s(),c(d,{key:h},{default:l(()=>[e(r,null,{default:l(()=>[e(n,{caption:""},{default:l(()=>[o(a(f),1)]),_:2},1024),e(n,null,{default:l(()=>[o(a(i),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):E("",!0)]),e(m,{class:"q-pa-md q-mt-md"},{default:l(()=>[u("div",O,[u("div",T,a(t.$t("log messages")),1),e(S,{href:"/debug/log/latest",target:"_blank"},{default:l(()=>[o(a(t.$t("download logs")),1)]),_:1})]),e(G,null,{default:l(()=>[u("thead",null,[u("tr",U,[u("th",null,a(t.$t("log level")),1),u("th",null,a(t.$t("time")),1),u("th",W,a(t.$t("log message")),1),u("th",null,a(t.$t("module name")),1),u("th",null,a(t.$t("function name")),1),u("th",null,a(t.$t("line")),1)])]),u("tbody",null,[(s(!0),p(v,null,$(t.store.logrecords,(i,f)=>(s(),p("tr",{key:f},[u("td",null,[e(z,{color:t.debugLevelColor(i.level)},{default:l(()=>[o(a(i.level),1)]),_:2},1032,["color"])]),u("td",null,a(i.time),1),u("td",null,a(i.message),1),u("td",null,a(i.name),1),u("td",null,a(i.funcName),1),u("td",null,a(i.lineno),1)]))),128))])]),_:1})]),_:1})]),_:1})}const le=I(A,[["render",X],["__file","StatusPage.vue"]]);export{le as default};