"use strict";(globalThis["webpackChunkmanaging_awesome_quasar"]=globalThis["webpackChunkmanaging_awesome_quasar"]||[]).push([[576],{7127:(e,l,a)=>{a.d(l,{Z:()=>o});var s=a(9835),t=a(3100);const n=()=>{const e=(0,t.oR)();return{sideMenuOpen:(0,s.Fl)({get(){return e.getters["ui/isSideMenuOpen"]},set(e){console.log({val:e})}}),toggleSideMenu(){e.commit("ui/toggleSideMenu")}}},o=n},2576:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Q});var s=a(9835),t=a(6970);const n=(0,s._)("span",{class:"text-h2 col-12"},"Suggestions",-1),o={class:"container no-padding"},i=(0,s._)("span",{class:"text-h5 col-12"},"Skills that you already have:",-1),r={class:"row"},c=["href"],u=(0,s._)("br",null,null,-1),d=(0,s._)("span",{class:"text-h5 col-12"},"Skills that you may learn:",-1),g=(0,s._)("br",null,null,-1),_=(0,s._)("div",{class:"label bg-secondary text-white"},[(0,s._)("span",{class:"text-h6 col-12"},[(0,s._)("i",{class:"las la-info-circle"}),(0,s.Uk)(" Skills that you do not know, with an estimation of how much your average market value would increase if you learn them. ")])],-1),h=(0,s._)("br",null,null,-1),m={class:"container"},p={class:"row items-center"},v={class:"col-9"},k={class:"col-3 percent"},w={class:"text-6 justify-center topic-tag"},b={class:"text-5 justify-right dolars"};function f(e,l,a,f,y,z){const x=(0,s.up)("q-badge"),S=(0,s.up)("q-linear-progress"),M=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(M,{class:"q-pa-md"},{default:(0,s.w5)((()=>[n,(0,s._)("div",o,[i,(0,s._)("div",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.skills_learned_normalized,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col-auto",key:e,href:`https://jaimevalero.github.io/managing-awesome-lists/var/topics/-${e}`},[(0,s.Wm)(x,{class:"topic-tag"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,t.zw)(e),1)])),_:2},1024)],8,c)))),128))])]),u,d,g,_,h,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.skills_to_learn_normalized,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"q-pa-xs",key:e.id,style:{"min-height":"150 px"}},[(0,s._)("div",m,[(0,s._)("div",p,[(0,s._)("div",v,[(0,s.Wm)(S,{label:e.id,value:e.value_normalized,color:"gold",style:{"max-height":"100px"}},null,8,["label","value"])]),(0,s._)("div",k,[(0,s._)("span",w,(0,t.zw)(e.id),1),(0,s._)("span",b,(0,t.zw)(e.dolars),1)])])])])))),128))])),_:1})}a(702),a(9665),a(8964);var y=a(7127),z=a(9981),x=a.n(z);const S=(0,s.aZ)({name:"SuggestionsPage",setup(){const{sideMenuOpen:e,toggleSideMenu:l}=(0,y.Z)();return{toggleSideMenu:l,sideMenuOpen:e}},computed:{login_normalized:function(){var e;try{e=this.$router.currentRoute._value.params.id}catch(l){console.log(l)}return e}},data(){return{skills_to_learn_normalized:[],skills_learned_normalized:[]}},created(){x().get("http://127.0.0.1:8888/v1/analize-user/?token=fb1d3b71-2c1e-49cb-b04b-46534534ef0a&login="+this.login_normalized).then((e=>{var l=[],a=0;let s,t=0;for(const[n,o]of Object.entries(e.data.skills_to_learn))o>t&&(t=o,s=n);console.log("maxValue: "),console.log(t);for(const[n,o]of Object.entries(e.data.skills_to_learn))a<=15&&(a++,l.push({id:n,value:o,value_normalized:o/t,dolars:"$"+Math.ceil(o).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}));this.skills_learned_normalized=Object.keys(e.data.skills_already_learned),this.skills_to_learn_normalized=l,console.log(this.skills_to_learn_normalized)}))}});var M=a(1639),j=a(9885),q=a(990),O=a(8289),Z=a(9984),D=a.n(Z);const P=(0,M.Z)(S,[["render",f]]),Q=P;D()(S,"components",{QPage:j.Z,QBadge:q.Z,QLinearProgress:O.Z})}}]);