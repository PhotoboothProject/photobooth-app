"use strict";(globalThis["webpackChunkqPhotobooth"]=globalThis["webpackChunkqPhotobooth"]||[]).push([[67],{5067:(t,e,o)=>{o.r(e),o.d(e,{default:()=>k});var l=o(9835),n=o(6970);const a=(0,l._)("div",{class:"text-h5"},"Maintenance / Information",-1),r={class:"q-gutter-sm q-ma-md"},i=(0,l._)("div",null,"TODO: RPI Temp, ...",-1),s={class:"row"},m=(0,l._)("div",{class:"text-h5"},"Log Records",-1),d=(0,l._)("thead",null,[(0,l._)("tr",{class:"text-left"},[(0,l._)("th",null,"Level"),(0,l._)("th",null,"Time"),(0,l._)("th",null,"Name"),(0,l._)("th",null,"Function Name"),(0,l._)("th",null,"LineNo"),(0,l._)("th",{style:{width:"100%"}},"Message")])],-1);function u(t,e,o,u,_,c){const w=(0,l.up)("q-card"),f=(0,l.up)("q-badge"),h=(0,l.up)("q-markup-table"),p=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(p,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{style:{},class:"q-pa-md q-mt-md"},{default:(0,l.w5)((()=>[a,(0,l._)("div",r,[(0,l._)("div",null," CPU: 1min: "+(0,n.zw)(t.store.information["cpu1_5_15"][0])+" 5min: "+(0,n.zw)(t.store.information["cpu1_5_15"][1])+" 15min: "+(0,n.zw)(t.store.information["cpu1_5_15"][2])+" #active threads: "+(0,n.zw)(t.store.information["active_threads"]),1),(0,l._)("div",null," Disk: total "+(0,n.zw)((t.store.information["disk"]["total"]/1024**3).toFixed(1))+"GB free: "+(0,n.zw)((t.store.information["disk"]["free"]/1024**3).toFixed(1))+"GB ",1),(0,l._)("div",null," Memory: total "+(0,n.zw)((t.store.information["memory"]["total"]/1024**3).toFixed(1))+"GB free: "+(0,n.zw)((t.store.information["memory"]["free"]/1024**3).toFixed(1))+"GB available: "+(0,n.zw)((t.store.information["memory"]["available"]/1024**3).toFixed(1))+"GB ",1),i])])),_:1}),(0,l.Wm)(w,{class:"q-pa-md q-mt-md"},{default:(0,l.w5)((()=>[(0,l._)("div",s,[m,(0,l.Wm)(f,{align:"top",label:t.store.serverConfig["common"]["DEBUG_LEVEL"]},null,8,["label"])]),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[d,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.store.logrecords,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("td",null,(0,n.zw)(t.level),1),(0,l._)("td",null,(0,n.zw)(t.time),1),(0,l._)("td",null,(0,n.zw)(t.name),1),(0,l._)("td",null,(0,n.zw)(t.funcName),1),(0,l._)("td",null,(0,n.zw)(t.lineno),1),(0,l._)("td",null,(0,n.zw)(t.message),1)])))),128))])])),_:1})])),_:1})])),_:1})}var _=o(7575),c=o(1569);const w=(0,l.aZ)({name:"MainLayout",components:{},setup(){const t=(0,_.h)();return{store:t,remoteProcedureCall:c.remoteProcedureCall}}});var f=o(1639),h=o(9885),p=o(4458),v=o(990),g=o(6933),z=o(9984),b=o.n(z);const q=(0,f.Z)(w,[["render",u]]),k=q;b()(w,"components",{QPage:h.Z,QCard:p.Z,QBadge:v.Z,QMarkupTable:g.Z})}}]);