"use strict";(globalThis["webpackChunkphotobooth_app_frontend"]=globalThis["webpackChunkphotobooth_app_frontend"]||[]).push([[734],{96734:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var o=n(59835),i=n(86970);const r={key:1,class:"full-height full-width column justify-center content-center",style:{position:"absolute"}},s={key:2,class:"full-height full-width column justify-center content-center",style:{position:"absolute"}},a=["innerHTML"],l={key:0},u={class:"q-gutter-sm"},c=(0,o._)("div",null,[(0,o.Uk)("Take a"),(0,o._)("br"),(0,o.Uk)("Picture!")],-1),g=(0,o._)("div",null,[(0,o.Uk)("Create"),(0,o._)("br"),(0,o.Uk)("Collage!")],-1),m=(0,o._)("div",null,[(0,o.Uk)("Create"),(0,o._)("br"),(0,o.Uk)("Animation!")],-1),d={key:0},h={class:"q-gutter-sm"},p=(0,o._)("div",null,"Gallery",-1),w=(0,o._)("div",null,"Admin",-1);function _(t,e,n,_,k,f){const S=(0,o.up)("q-spinner-grid"),v=(0,o.up)("countdown-timer"),y=(0,o.up)("q-icon"),b=(0,o.up)("q-btn"),C=(0,o.up)("q-page-sticky"),q=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(q,{class:"q-pa-none column full-height"},{default:(0,o.w5)((()=>[t.showPreview?((0,o.wg)(),(0,o.iD)("div",{key:0,id:"preview-stream",style:{"background-image":'url("/aquisition/stream.mjpg")'},class:(0,i.C_)(["full-width column justify-center content-center",{mirroreffect:t.livestreamMirror}])},null,2)):(0,o.kq)("",!0),t.showProcessing?((0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(S,{size:"20em"})])):(0,o.kq)("",!0),t.showCountdownCounting?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(v,{ref:"countdowntimer",duration:this.stateStore.duration,messageDuration:t.uiSettingsStore.uiSettings.TAKEPIC_MSG_TIME},null,8,["duration","messageDuration"])])):(0,o.kq)("",!0),t.showFrontpage?((0,o.wg)(),(0,o.iD)("div",{key:3,id:"frontpage_text",innerHTML:t.uiSettingsStore.uiSettings["FRONTPAGE_TEXT"]},null,8,a)):(0,o.kq)("",!0),(0,o.Wm)(C,{position:"bottom",offset:[0,25]},{default:(0,o.w5)((()=>[t.showFrontpage?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",u,[t.uiSettingsStore.uiSettings.show_takepic_on_frontpage?((0,o.wg)(),(0,o.j4)(b,{key:0,color:"primary","no-caps":"",onClick:e[0]||(e[0]=e=>t.takePicture()),class:"action-button"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{left:"",name:"photo_camera"}),c])),_:1})):(0,o.kq)("",!0),t.uiSettingsStore.uiSettings.show_takecollage_on_frontpage?((0,o.wg)(),(0,o.j4)(b,{key:1,color:"primary","no-caps":"",onClick:e[1]||(e[1]=e=>t.takeCollage()),class:"action-button"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{left:"",name:"auto_awesome_mosaic"}),g])),_:1})):(0,o.kq)("",!0),t.uiSettingsStore.uiSettings.show_takeanimation_on_frontpage?((0,o.wg)(),(0,o.j4)(b,{key:2,color:"primary","no-caps":"",onClick:e[2]||(e[2]=e=>t.takeAnimation()),class:"action-button"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{left:"",name:"gif_box"}),m])),_:1})):(0,o.kq)("",!0)])])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(C,{position:"top-left",offset:[25,25]},{default:(0,o.w5)((()=>[t.showFrontpage?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",h,[t.uiSettingsStore.uiSettings.show_gallery_on_frontpage?((0,o.wg)(),(0,o.j4)(b,{key:0,color:"primary","no-caps":"",to:"/gallery",class:"action-button"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{left:"",name:"photo_library"}),p])),_:1})):(0,o.kq)("",!0),t.uiSettingsStore.uiSettings.show_admin_on_frontpage?((0,o.wg)(),(0,o.j4)(b,{key:1,color:"secondary","no-caps":"",to:"/admin",class:"action-button"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{left:"",name:"admin_panel_settings"}),w])),_:1})):(0,o.kq)("",!0)])])):(0,o.kq)("",!0)])),_:1})])),_:1})}var k=n(91569),f=n(19302),S=n(67575),v=n(15639),y=n(96694),b=n(61957);const C={style:{width:"40%",height:"40%"}};function q(t,e,n,i,r,s){const a=(0,o.up)("q-circular-progress"),l=(0,o.up)("q-icon");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",C,[(0,o.wy)((0,o.Wm)(a,{"show-value":"",class:"text-light-blue",style:{width:"100%",height:"100%"},value:parseFloat(t.remainingSeconds.toFixed(1)),min:0,max:this.duration,reverse:"",size:"150px",color:"light-blue"},null,8,["value","max"]),[[b.F8,t.showCountdown]]),(0,o.wy)((0,o._)("div",null,[(0,o.Wm)(l,{name:t.icon,size:"200px",style:{width:"100%",height:"100%"}},null,8,["name"])],512),[[b.F8,t.showMessage]])],512)),[[b.F8,t.showBox]])}const T=(0,o.aZ)({name:"CountdownTimer",data(){return{intervalTimerId:null,remainingSeconds:0}},mounted(){this.startTimer()},beforeUnmount(){clearInterval(this.intervalTimerId)},computed:{showBox(){return this.remainingSeconds>0},showCountdown(){return+this.remainingSeconds>=this.messageDuration},showMessage(){return!this.showCountdown}},methods:{abortTimer(){clearInterval(this.intervalTimerId),this.remainingSeconds=0},startTimer(){console.log(`starting timer, duration=${this.duration}`),this.remainingSeconds=this.duration,this.intervalTimerId=setInterval((()=>{this.remainingSeconds-=.05,this.remainingSeconds<=0&&clearInterval(this.intervalTimerId)}),50)}},props:{duration:{type:Number,required:!0},messageDuration:{type:Number,default:.5},icon:{type:String,default:"😃"}}});var P=n(11639),I=n(83302),Z=n(22857),D=n(69984),W=n.n(D);const j=(0,P.Z)(T,[["render",q]]),x=j;W()(T,"components",{QCircularProgress:I.Z,QIcon:Z.Z});const F=(0,o.aZ)({components:{CountdownTimer:x},setup(){(0,f.Z)();const t=(0,S.h)(),e=(0,v.B)(),n=(0,y.R)();return{store:t,stateStore:e,uiSettingsStore:n,remoteProcedureCall:k.remoteProcedureCall}},methods:{takePicture(){(0,k.remoteProcedureCall)("/processing/chose/1pic")},takeCollage(){(0,k.remoteProcedureCall)("/processing/chose/collage")},takeAnimation(){(0,k.remoteProcedureCall)("/processing/chose/animation")}},watch:{},computed:{showProcessing:{get(){return"captures_completed"==this.stateStore.state}},livestreamMirror:{get(){return this.uiSettingsStore.uiSettings.livestream_mirror_effect}},showCountdownCounting:{get(){const t="counting"==this.stateStore.state;return this.stateStore.duration>0&&t}},showPreview:{get(){const t=!0,e="idle"==this.stateStore.state,n="counting"==this.stateStore.state;return t&&(e||n)}},showFrontpage:{get(){return"idle"==this.stateStore.state}}}});var M=n(69885),Q=n(93040),U=n(30627),A=n(68879);const B=(0,P.Z)(F,[["render",_]]),E=B;W()(F,"components",{QPage:M.Z,QSpinnerGrid:Q.Z,QPageSticky:U.Z,QBtn:A.Z,QIcon:Z.Z})}}]);