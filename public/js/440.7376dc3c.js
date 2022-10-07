"use strict";(globalThis["webpackChunkmanaging_awesome_quasar"]=globalThis["webpackChunkmanaging_awesome_quasar"]||[]).push([[440],{7127:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(9835),a=n(3100);const o=()=>{const e=(0,a.oR)();return{sideMenuOpen:(0,l.Fl)({get(){return e.getters["ui/isSideMenuOpen"]},set(e){console.log({val:e})}}),toggleSideMenu(){e.commit("ui/toggleSideMenu")}}},i=o},2440:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var l=n(9835),a=n(1957);const o={class:"flex"};function i(e,t,n,i,u,s){const r=(0,l.up)("q-btn"),c=(0,l.up)("q-toolbar-title"),d=(0,l.up)("q-form"),p=(0,l.up)("q-toolbar"),m=(0,l.up)("q-header"),g=(0,l.up)("EssentialLink"),w=(0,l.up)("q-list"),f=(0,l.up)("q-drawer"),k=(0,l.up)("router-view"),h=(0,l.up)("q-page-container"),v=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(v,{view:"hHh LpR lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{elevated:"",class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{flat:"",dense:"",round:"",icon:"las la-ellipsis-v","aria-label":"Menu",onClick:e.toggleSideMenu},null,8,["onClick"]),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)("IT roles for you")])),_:1}),(0,l._)("div",o,[(0,l.Wm)(d,{onClick:e.changeFormAction},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("input",{id:"text-search",placeholder:"github username","onUpdate:modelValue":t[0]||(t[0]=t=>e.store.vital=t)},null,512),[[a.nr,e.store.vital]]),(0,l.Wm)(r,{icon:"las la-search",label:"Search",type:"submit",color:"secondary"})])),_:1},8,["onClick"])])])),_:1})])),_:1}),(0,l.Wm)(f,{"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.leftDrawerOpen=t),side:"left",behavior:"desktop",width:"180",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.linksList,(e=>((0,l.wg)(),(0,l.j4)(g,(0,l.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k)])),_:1})])),_:1})}n(9665);var u=n(6970);function s(e,t,n,a,o,i){const s=(0,l.up)("q-icon"),r=(0,l.up)("q-item-section"),c=(0,l.up)("q-item-label"),d=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(d,{clickable:"",onClick:e.navigateTo},{default:(0,l.w5)((()=>[e.icon?((0,l.wg)(),(0,l.j4)(r,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:e.icon},null,8,["name"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,u.zw)(e.title),1)])),_:1}),(0,l.Wm)(c,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,u.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["onClick"])}var r=n(8339);const c=(0,l.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const t=(0,r.tv)();return{navigateTo(){if(e.link.startsWith("http"))return window.open(e.link,"_blank");t.push({name:e.link})}}}});var d=n(1639),p=n(490),m=n(1233),g=n(2857),w=n(3115),f=n(9984),k=n.n(f);const h=(0,d.Z)(c,[["render",s]]),v=h;k()(c,"components",{QItem:p.Z,QItemSection:m.Z,QIcon:g.Z,QItemLabel:w.Z});const b=[{title:"IT Roles",caption:"Categories and skills",icon:"lab la-wpforms",link:"users"},{title:"Suggestions",caption:"Which skill to learn",icon:"las la-graduation-cap",link:"suggestions"},{title:"About",caption:"How the results are computed",icon:"las la-info-circle",link:"about"}];var _=n(7127),Z={vital:""};const q=(0,l.aZ)({name:"MainLayout",components:{EssentialLink:v},data(){return{message:"",store:Z}},methods:{changeFormAction:function(){console.log(window.location.href),console.log(this.$router),console.log("ruta0"),console.log(this.$router.currentRoute),this.$router.push({name:"users",params:{id:this.store.vital}})}},setup(){const{sideMenuOpen:e,toggleSideMenu:t}=(0,_.Z)();return{linksList:b,toggleSideMenu:t,sideMenuOpen:e}}});var W=n(7605),y=n(6602),Q=n(1663),S=n(963),M=n(335),C=n(1973),L=n(8326),T=n(4631),I=n(3246),O=n(2133);const F=(0,d.Z)(q,[["render",i],["__scopeId","data-v-aeb77d34"]]),U=F;k()(q,"components",{QLayout:W.Z,QHeader:y.Z,QToolbar:Q.Z,QBtn:S.Z,QImg:M.Z,QToolbarTitle:C.Z,QForm:L.Z,QDrawer:T.Z,QList:I.Z,QPageContainer:O.Z})}}]);