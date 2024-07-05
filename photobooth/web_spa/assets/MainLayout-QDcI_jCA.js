import{Q as I,a as N}from"./QLayout-COzW_Aw2.js";import{i as D,r as w,w as v,g as V,o as B,u as Q,a as G,_ as P,c as S,d as A,e as E,f as b,h as H,j as U,k as z,l as J,m as M,n as k,p as R,q as L,s as K}from"./index-EiYPTeVj.js";import{u as j}from"./use-quasar-CJyi2T5v.js";function g(e){return V()?(B(e),!0):!1}function h(e){return typeof e=="function"?e():Q(e)}const T=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const X=Object.prototype.toString,Y=e=>X.call(e)==="[object Object]",_=()=>+Date.now(),C=()=>{};function Z(e,o){function t(...r){return new Promise((n,i)=>{Promise.resolve(e(()=>o.apply(this,r),{fn:o,thisArg:this,args:r})).then(n).catch(i)})}return t}function ee(...e){let o=0,t,r=!0,n=C,i,u,a,l,c;!D(e[0])&&typeof e[0]=="object"?{delay:u,trailing:a=!0,leading:l=!0,rejectOnCancel:c=!1}=e[0]:[u,a=!0,l=!0,c=!1]=e;const s=()=>{t&&(clearTimeout(t),t=void 0,n(),n=C)};return f=>{const m=h(u),d=Date.now()-o,y=()=>i=f();return s(),m<=0?(o=Date.now(),y()):(d>m&&(l||!r)?(o=Date.now(),y()):a&&(i=new Promise(($,x)=>{n=c?x:$,t=setTimeout(()=>{o=Date.now(),r=!0,$(y()),s()},Math.max(0,m-d))})),!l&&!t&&(t=setTimeout(()=>r=!0,m)),r=!1,i)}}function te(e,o=1e3,t={}){const{immediate:r=!0,immediateCallback:n=!1}=t;let i=null;const u=w(!1);function a(){i&&(clearInterval(i),i=null)}function l(){u.value=!1,a()}function c(){const s=h(o);s<=0||(u.value=!0,n&&e(),a(),i=setInterval(e,s))}if(r&&T&&c(),D(o)||typeof o=="function"){const s=v(o,()=>{u.value&&T&&c()});g(s)}return g(l),{isActive:u,pause:l,resume:c}}function ne(e){var o;const t=h(e);return(o=t?.$el)!=null?o:t}const F=T?window:void 0;function q(...e){let o,t,r,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,r,n]=e,o=F):[o,t,r,n]=e,!o)return C;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const i=[],u=()=>{i.forEach(s=>s()),i.length=0},a=(s,p,f,m)=>(s.addEventListener(p,f,m),()=>s.removeEventListener(p,f,m)),l=v(()=>[ne(o),h(n)],([s,p])=>{if(u(),!s)return;const f=Y(p)?{...p}:p;i.push(...t.flatMap(m=>r.map(d=>a(s,m,d,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),u()};return g(c),c}function oe(e,o={}){const{immediate:t=!0,fpsLimit:r=void 0,window:n=F}=o,i=w(!1),u=r?1e3/r:null;let a=0,l=null;function c(f){if(!i.value||!n)return;a||(a=f);const m=f-a;if(u&&m<u){l=n.requestAnimationFrame(c);return}a=f,e({delta:m,timestamp:f}),l=n.requestAnimationFrame(c)}function s(){!i.value&&n&&(i.value=!0,a=0,l=n.requestAnimationFrame(c))}function p(){i.value=!1,l!=null&&n&&(n.cancelAnimationFrame(l),l=null)}return t&&s(),g(p),{isActive:G(i),pause:p,resume:s}}const ie=["mousemove","mousedown","resize","keydown","touchstart","wheel"],re=6e4;function O(e=re,o={}){const{initialState:t=!1,listenForVisibilityChange:r=!0,events:n=ie,window:i=F,eventFilter:u=ee(50)}=o,a=w(t),l=w(_());let c;const s=()=>{a.value=!1,clearTimeout(c),c=setTimeout(()=>a.value=!0,e)},p=Z(u,()=>{l.value=_(),s()});if(i){const f=i.document;for(const m of n)q(i,m,p,{passive:!0});r&&q(f,"visibilitychange",()=>{f.hidden||p()}),s()}return{idle:a,lastActive:l,reset:s}}function W(e={}){const{controls:o=!1,offset:t=0,immediate:r=!0,interval:n="requestAnimationFrame",callback:i}=e,u=w(_()+t),a=()=>u.value=_()+t,l=i?()=>{a(),i(u.value)}:a,c=n==="requestAnimationFrame"?oe(l,{immediate:r}):te(l,n,{immediate:r});return o?{timestamp:u,...c}:u}const se={__name:"RouteAfterTimeout",props:{route:{type:String,required:!0},timeoutMs:{type:Number,required:!0},warningMessage:{type:String,default:"Auto-starting slideshow... Click anywhere to stay on this page."},warningTimeMs:{type:Number,default:1e4}},setup(e,{expose:o}){o();const t=j(),r=S(),n=e,{idle:i,lastActive:u}=O(n.timeoutMs),a=W({interval:1e3}),l=A(()=>n.timeoutMs-(a.value-u.value)),c=A(()=>n.warningTimeMs>l.value);let s=null;function p(){s=t.notify({progress:!0,message:n.warningMessage,type:"info",multiline:!0,timeout:l.value,icon:"sym_o_slideshow"})}function f(){s&&s()}E(()=>{f()}),v(c,d=>{d?p():f()}),v(i,d=>{d&&(f(),r.push({path:n.route}))});const m={$q:t,router:r,props:n,idle:i,lastActive:u,now:a,remainingTime:l,showWarning:c,get warningPopup(){return s},set warningPopup(d){s=d},showNotification:p,hideNotification:f,get useIdle(){return O},get useTimestamp(){return W},computed:A,watch:v,onBeforeUnmount:E,get useRouter(){return S},get useQuasar(){return j}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function ue(e,o,t,r,n,i){return b(),H("div")}const ae=P(se,[["render",ue],["__file","RouteAfterTimeout.vue"]]),le=U({name:"MainLayout",components:{RouteAfterTimeout:ae},setup(){const e=z(),o=J(),t=S();return e.$subscribe((r,n)=>{n.state=="counting"&&t.path!="/"&&(console.log("counting state received, pushing to index page to countdown"),t.push("/")),n.state=="present_capture"&&t.push({path:"/itempresenter"}),n.state=="approve_capture"&&n.ask_user_for_approval&&t.push({path:"/itemapproval"})}),{configurationStore:o}},computed:{}});function ce(e,o,t,r,n,i){const u=M("router-view"),a=M("RouteAfterTimeout");return b(),k(N,{id:"main-layout",view:"hHh lpR fFf"},{default:R(()=>[L(I,null,{default:R(()=>[L(u),e.configurationStore.getConfigElement("uisettings.show_automatic_slideshow_timeout",0)>0?(b(),k(a,{key:0,route:"/slideshow/random","timeout-ms":e.configurationStore.getConfigElement("uisettings.show_automatic_slideshow_timeout",60)*1e3,"warning-message":e.$t("MSG_WARN_BEFORE_AUTO_SLIDESHOW")},null,8,["timeout-ms","warning-message"])):K("",!0)]),_:1})]),_:1})}const de=P(le,[["render",ce],["__file","MainLayout.vue"]]);export{de as default};