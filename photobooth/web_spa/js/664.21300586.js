"use strict";(globalThis["webpackChunkphotobooth_app_frontend"]=globalThis["webpackChunkphotobooth_app_frontend"]||[]).push([[664],{75664:(t,e,o)=>{o.r(e),o.d(e,{default:()=>F});var n=o(92444),i=o(74044);const r={key:1,class:"full-height full-width column justify-center content-center",style:{position:"absolute"}},s={key:2,class:"full-height full-width column justify-center content-center",style:{position:"absolute"},id:"frontpage-countdown"},a=["innerHTML"],l={key:0},c={class:"row q-gutter-md"},u=["innerHTML"],d=["innerHTML"],g=["innerHTML"],m=["innerHTML"],p={key:0},h={class:"q-gutter-md"},_=["innerHTML"],f=["innerHTML"],S=(0,n.QD)("br",null,null,-1);function w(t,e,o,w,T,A){const y=(0,n.E1)("q-spinner-grid"),k=(0,n.E1)("countdown-timer"),v=(0,n.E1)("q-icon"),b=(0,n.E1)("q-btn"),M=(0,n.E1)("q-page-sticky"),E=(0,n.E1)("q-spinner-puff"),L=(0,n.E1)("q-page");return(0,n.Wz)(),(0,n.Az)(L,{class:"q-pa-none column full-height"},{default:(0,n.Ql)((()=>[t.showPreview?((0,n.Wz)(),(0,n.An)("div",{key:0,id:"preview-stream",style:{"background-image":'url("/aquisition/stream.mjpg")'},class:(0,i.WN)(["full-width column justify-center content-center",{mirroreffect:t.livestreamMirror}])},null,2)):(0,n.g1)("",!0),t.showProcessing?((0,n.Wz)(),(0,n.An)("div",r,[(0,n.K2)(y,{size:"20em"})])):(0,n.g1)("",!0),t.showCountdownCounting?((0,n.Wz)(),(0,n.An)("div",s,[(0,n.K2)(k,{ref:"countdowntimer",duration:this.stateStore.duration,messageDuration:t.uiSettingsStore.uiSettings.TAKEPIC_MSG_TIME,messageText:t.uiSettingsStore.uiSettings.TAKEPIC_MSG_TEXT},null,8,["duration","messageDuration","messageText"])])):(0,n.g1)("",!0),t.showFrontpage?((0,n.Wz)(),(0,n.An)("div",{key:3,id:"frontpage_text",innerHTML:t.uiSettingsStore.uiSettings["FRONTPAGE_TEXT"]},null,8,a)):(0,n.g1)("",!0),(0,n.K2)(M,{position:"bottom",offset:[0,25]},{default:(0,n.Ql)((()=>[t.showFrontpage?((0,n.Wz)(),(0,n.An)("div",l,[(0,n.QD)("div",c,[t.uiSettingsStore.uiSettings.show_takepic_on_frontpage?((0,n.Wz)(),(0,n.Az)(b,{key:0,stack:"",color:"primary","no-caps":"",rounded:"",onClick:e[0]||(e[0]=e=>t.takePicture()),class:"action-button col-auto",id:"frontpage-button-take-pic"},{default:(0,n.Ql)((()=>[(0,n.K2)(v,{name:"o_photo_camera"}),(0,n.QD)("div",{style:{"white-space":"nowrap"},class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TAKE_PHOTO")},null,8,u)])),_:1})):(0,n.g1)("",!0),t.uiSettingsStore.uiSettings.show_takecollage_on_frontpage?((0,n.Wz)(),(0,n.Az)(b,{key:1,stack:"",color:"primary","no-caps":"",rounded:"",onClick:e[1]||(e[1]=e=>t.takeCollage()),class:"action-button col-auto",id:"frontpage-button-take-collage"},{default:(0,n.Ql)((()=>[(0,n.K2)(v,{name:"o_auto_awesome_mosaic"}),(0,n.QD)("div",{style:{"white-space":"nowrap"},class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TAKE_COLLAGE")},null,8,d)])),_:1})):(0,n.g1)("",!0),t.uiSettingsStore.uiSettings.show_takeanimation_on_frontpage?((0,n.Wz)(),(0,n.Az)(b,{key:2,stack:"",color:"primary","no-caps":"",rounded:"",onClick:e[2]||(e[2]=e=>t.takeAnimation()),class:"action-button col-auto",id:"frontpage-button-take-animation"},{default:(0,n.Ql)((()=>[(0,n.K2)(v,{name:"o_gif_box"}),(0,n.QD)("div",{style:{"white-space":"nowrap"},class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TAKE_ANIMATION")},null,8,g)])),_:1})):(0,n.g1)("",!0),t.uiSettingsStore.uiSettings.show_takevideo_on_frontpage?((0,n.Wz)(),(0,n.Az)(b,{key:3,stack:"",color:"primary","no-caps":"",rounded:"",onClick:e[3]||(e[3]=e=>t.takeVideo()),class:"action-button col-auto",id:"frontpage-button-take-video"},{default:(0,n.Ql)((()=>[(0,n.K2)(v,{name:"o_movie"}),(0,n.QD)("div",{style:{"white-space":"nowrap"},class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TAKE_VIDEO")},null,8,m)])),_:1})):(0,n.g1)("",!0)])])):(0,n.g1)("",!0)])),_:1}),(0,n.K2)(M,{position:"top-left",offset:[25,25]},{default:(0,n.Ql)((()=>[t.showFrontpage?((0,n.Wz)(),(0,n.An)("div",p,[(0,n.QD)("div",h,[t.uiSettingsStore.uiSettings.show_gallery_on_frontpage?((0,n.Wz)(),(0,n.Az)(b,{key:0,color:"primary","no-caps":"",rounded:"",to:"/gallery",class:"action-button",id:"frontpage-button-to-gallery",style:(0,i.MN)(t.uiSettingsStore.uiSettings.gallery_button_style)},{default:(0,n.Ql)((()=>[(0,n.K2)(v,{left:"",name:"photo_library"}),(0,n.QD)("div",{class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TO_GALLERY")},null,8,_)])),_:1},8,["style"])):(0,n.g1)("",!0),t.uiSettingsStore.uiSettings.show_admin_on_frontpage?((0,n.Wz)(),(0,n.Az)(b,{key:1,rounded:"",color:"secondary","no-caps":"",to:"/admin",class:"action-button",id:"frontpage-button-to-admin"},{default:(0,n.Ql)((()=>[(0,n.K2)(v,{left:"",name:"admin_panel_settings"}),(0,n.QD)("div",{class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TO_ADMIN")},null,8,f)])),_:1})):(0,n.g1)("",!0)])])):(0,n.g1)("",!0)])),_:1}),t.showRecording?((0,n.Wz)(),(0,n.Az)(M,{key:4,position:"top",offset:[0,25],align:"center",id:"frontpage-indicator-recording"},{default:(0,n.Ql)((()=>[(0,n.K2)(E,{color:"red",size:"10em"}),S,(0,n.K2)(b,{flat:"",color:"red",label:"Stop recording",onClick:e[4]||(e[4]=e=>t.stopRecordingVideo())})])),_:1})):(0,n.g1)("",!0)])),_:1})}var T=o(56312),A=o(91416),y=o(33084),k=o(26992),v=o(63924),b=o(264);const M={class:"flex flex-center",style:{width:"70vw",height:"70vh"},id:"countdown-timer-container"},E=["innerHTML"];function L(t,e,o,r,s,a){const l=(0,n.E1)("q-circular-progress");return(0,n.wt)(((0,n.Wz)(),(0,n.An)("div",M,[(0,n.wt)((0,n.QD)("div",{style:{position:"absolute","font-size":"150px"},innerHTML:t.messageText,id:"countdown-timer-message"},null,8,E),[[b.Ub,t.showMessage]]),(0,n.wt)((0,n.K2)(l,{"show-value":"",style:{width:"100%",height:"100%"},value:t.remainingSeconds,min:0,max:this.duration,reverse:"",size:"70vh",color:"primary",class:"text-secondary"},{default:(0,n.Ql)((()=>[(0,n.mY)((0,i.WA)(parseFloat(t.remainingSeconds.toFixed(0))),1)])),_:1},8,["value","max"]),[[b.Ub,t.showCountdown]])],512)),[[b.Ub,t.showBox]])}const C=(0,n._M)({name:"CountdownTimer",data(){return{intervalTimerId:null,remainingSeconds:0}},mounted(){this.startTimer()},beforeUnmount(){clearInterval(this.intervalTimerId)},computed:{showBox(){return this.remainingSeconds>0},showCountdown(){return+this.remainingSeconds>=this.messageDuration},showMessage(){return!this.showCountdown}},methods:{abortTimer(){clearInterval(this.intervalTimerId),this.remainingSeconds=0},startTimer(){console.log(`starting timer, duration=${this.duration}`),this.remainingSeconds=this.duration,this.intervalTimerId=setInterval((()=>{this.remainingSeconds-=.05,this.remainingSeconds<=0&&clearInterval(this.intervalTimerId)}),50)}},props:{duration:{type:Number,required:!0},messageDuration:{type:Number,default:.5},messageText:{type:String,default:"😃"}}});var Q=o(68716),z=o(1452),P=o(95252),I=o.n(P);const N=(0,Q.c)(C,[["render",L]]),K=N;I()(C,"components",{QCircularProgress:z.c});const H=(0,n._M)({components:{CountdownTimer:K},setup(){(0,A.c)();const t=(0,y.k)(),e=(0,k.B)(),o=(0,v.i)();return{store:t,stateStore:e,uiSettingsStore:o,remoteProcedureCall:T.remoteProcedureCall}},methods:{takePicture(){(0,T.remoteProcedureCall)("/processing/chose/1pic")},takeCollage(){(0,T.remoteProcedureCall)("/processing/chose/collage")},takeAnimation(){(0,T.remoteProcedureCall)("/processing/chose/animation")},takeVideo(){(0,T.remoteProcedureCall)("/processing/chose/video")},stopRecordingVideo(){(0,T.remoteProcedureCall)("/processing/cmd/stop")}},watch:{},computed:{showProcessing:{get(){const t="captures_completed"==this.stateStore.state,e="capture"==this.stateStore.state;return t||e}},showRecording:{get(){return"record"==this.stateStore.state}},livestreamMirror:{get(){return this.uiSettingsStore.uiSettings.livestream_mirror_effect}},showCountdownCounting:{get(){const t="counting"==this.stateStore.state;return this.stateStore.duration>0&&t}},showPreview:{get(){const t=!0,e=!this.stateStore.state||"finished"==this.stateStore.state,o="record"==this.stateStore.state,n="counting"==this.stateStore.state;return t&&(e||n||o)}},showFrontpage:{get(){return!this.stateStore.state||"finished"==this.stateStore.state}}}});var W=o(9440),B=o(70048),D=o(60352),x=o(99140),q=o(58120),G=o(60124);const O=(0,Q.c)(H,[["render",w]]),F=O;I()(H,"components",{QPage:W.c,QSpinnerGrid:B.c,QPageSticky:D.c,QBtn:x.c,QIcon:q.c,QSpinnerPuff:G.c})}}]);