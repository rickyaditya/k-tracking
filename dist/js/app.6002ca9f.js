(function(e){function t(t){for(var s,n,i=t[0],l=t[1],c=t[2],u=0,f=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},o=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("router-view")],1)],1)},o=[],n={name:"App",components:{}},i=n,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),f=a("a75b"),v=Object(l["a"])(i,r,o,!1,null,null,null),m=v.exports;d()(v,{VApp:u["a"],VContent:f["a"]});var b=a("8c4f"),h=a("2f62"),p=a("bc3a"),g=a.n(p);a("3e8f");a("0628");s["a"].use(h["a"]);var j=new h["a"].Store({state:{status:"",error:!1,token:localStorage.getItem("token")||"",username:{}},mutations:{auth_request(e){e.status="loading",e.error=""},auth_success(e){e.status="success",e.token=localStorage.getItem("token"),e.username=localStorage.getItem("username")},auth_error(e){e.status="error",e.error=!0},logout(e){e.status="",e.token="",e.error=""}},actions:{login({commit:e},t){return new Promise((a,s)=>{e("auth_request"),g()({url:"http://103.233.109.131:5500/findCourier",data:t,method:"POST"}).then(t=>{const s=t.data.token,r=t.data.user[0].USERNAME;localStorage.setItem("token",s),localStorage.setItem("username",r),g.a.defaults.headers["Authorization"]=`Bearer ${s}`,e("auth_success",s,r),a(t)}).catch(t=>{e("auth_error"),localStorage.removeItem("token"),s(t)})})},logout({commit:e}){return new Promise((t,a)=>{e("logout"),localStorage.removeItem("token"),delete g.a.defaults.headers["Authorization"],t()})}},getters:{isLoggedIn:e=>!!e.token,authStatus:e=>e.status,authErr:e=>e.error}}),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-navigation-drawer",{attrs:{app:""},scopedSlots:e._u([e.isLoggedIn?{key:"append",fn:function(){return[a("div",{staticClass:"pa-2"},[a("v-btn",{attrs:{block:"",color:"green",elevation:10},on:{click:e.logout}},[e._v("Logout")])],1)]},proxy:!0}:null],null,!0),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:"",to:"/home/#"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Hi, "+e._s(e.user)+"!")])],1)],1),a("v-list-item",{attrs:{to:"/home/tracking"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-truck-fast")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Tracking")])],1)],1),a("v-list-item",{attrs:{to:"/home/setting"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-settings")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Setting")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"green",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Application")])],1),a("v-container",[a("router-view")],1),a("v-footer",{attrs:{color:"green",app:""}},[a("span",{staticClass:"white--text"},[e._v("K-Link Indonesia © 2019")])])],1)},w=[],_={name:"Layout",props:{source:String},data:()=>({drawer:null,user:localStorage.getItem("username")}),computed:{isLoggedIn(){return this.$store.getters.isLoggedIn}},methods:{logout(){this.$store.dispatch("logout").then(()=>{this.$router.push("/login")})}},created(){this.$http.interceptors.response.use(void 0,e=>{return new Promise((t,a)=>{throw 401===e.status&&e.config&&!e.config.__isRetryRequest&&this.$store.dispatch(logout),e})})}},x=_,y=a("40dc"),V=a("5bc1"),S=a("8336"),C=a("a523"),P=a("553a"),A=a("132d"),E=a("a722"),O=a("8860"),R=a("da13"),T=a("1800"),I=a("5d23"),z=a("f774"),$=a("2a7f"),D=Object(l["a"])(x,k,w,!1,null,null,null),L=D.exports;d()(D,{VAppBar:y["a"],VAppBarNavIcon:V["a"],VBtn:S["a"],VContainer:C["a"],VFooter:P["a"],VIcon:A["a"],VLayout:E["a"],VList:O["a"],VListItem:R["a"],VListItemAction:T["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VNavigationDrawer:z["a"],VToolbarTitle:$["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-card",{attrs:{"min-width":"1042","min-height":"350"}},[a("v-card-title",[e._v("Dashboard")])],1)],1)},N=[],F={props:{customData:Object}},B=F,M=(a("cd9d"),a("b0af")),U=a("99d9"),H=Object(l["a"])(B,q,N,!1,null,"58f9f344",null),G=H.exports;d()(H,{VCard:M["a"],VCardTitle:U["c"],VLayout:E["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{transition:"fade-transition",fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[e.authErr?a("v-alert",{staticClass:"elevation-21",attrs:{outlined:"",dense:"",type:"error",dark:"",transition:"scale-transition"}},[e._v("\n            Username atau password salah\n          ")]):e._e(),a("v-card",{staticClass:"elevation-21"},[a("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[a("v-toolbar-title",[e._v("Login")]),a("div",{staticClass:"flex-grow-1"})],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"Login",name:"username",type:"text","prepend-icon":"person",rules:e.usernameRules},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password",type:"password","prepend-icon":"lock",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"success",disabled:!e.valid},on:{click:e.validate}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)},Y=[],J={props:{source:String},computed:{authErr(){return this.$store.getters.authErr}},data:()=>({drawer:null,alert:!0,valid:!0,username:"",usernameRules:[e=>!!e||"Username tidak boleh kosong"],password:"",passwordRules:[e=>!!e||"Password tidak boleh kosong"]}),methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0,this.formHasErrors=!1,this.login())},login(){let e=this.username,t=this.password;this.$store.dispatch("login",{username:e,password:t}).then(()=>{this.$router.push("/home")}).catch(e=>console.log(e))}}},W=J,Q=a("0798"),X=a("62ad"),Z=a("4bd4"),ee=a("0fd9"),te=a("8654"),ae=a("71d9"),se=Object(l["a"])(W,K,Y,!1,null,null,null),re=se.exports;d()(se,{VAlert:Q["a"],VApp:u["a"],VBtn:S["a"],VCard:M["a"],VCardActions:U["a"],VCardText:U["b"],VCol:X["a"],VContainer:C["a"],VContent:f["a"],VForm:Z["a"],VRow:ee["a"],VTextField:te["a"],VToolbar:ae["a"],VToolbarTitle:$["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-container",[a("v-card-title",[e._v("Tracking Status")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.deliveryRules,label:"No. DO.",required:""},on:{change:e.getDetails},model:{value:e.delivery,callback:function(t){e.delivery=t},expression:"delivery"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.id_do,expression:"id_do"}],attrs:{type:"hidden"},domProps:{value:e.id_do},on:{input:function(t){t.target.composing||(e.id_do=t.target.value)}}}),a("v-text-field",{attrs:{rules:e.courierRules,label:"Nama Kurir",required:""},model:{value:e.courier,callback:function(t){e.courier=t},expression:"courier"}}),a("v-text-field",{attrs:{rules:e.stockistRules,label:"Kode Stockist",required:""},model:{value:e.stockist,callback:function(t){e.stockist=t},expression:"stockist"}}),a("v-text-field",{attrs:{rules:e.nameRules,label:"Nama",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{rules:e.addressRules,label:"Alamat",required:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),a("v-text-field",{attrs:{rules:e.warehouseRules,label:"Gudang",required:""},model:{value:e.warehouse,callback:function(t){e.warehouse=t},expression:"warehouse"}}),a("v-text-field",{attrs:{rules:e.statusRules,label:"Status",required:""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.id_warehouse,expression:"id_warehouse"}],attrs:{type:"hidden"},domProps:{value:e.id_warehouse},on:{input:function(t){t.target.composing||(e.id_warehouse=t.target.value)}}}),a("v-item-group",[a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success",elevation:"5"},on:{click:e.validate}},[e._v("Submit")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"warning",elevation:"5"},on:{click:e.reset}},[e._v("Reset")])],1),a("v-expand-transition",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],staticClass:"mx-auto divider"},[a("v-card-title",[e._v("Tracking Status")]),a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Status")]),a("th",{staticClass:"text-left"},[e._v("Created By")]),a("th",{staticClass:"text-left"},[e._v("Created Date")])])]),a("tbody",e._l(e.details,(function(t){return a("tr",{key:t.ID_DO},[a("td",[e._v(e._s(t.STATUS))]),a("td",[e._v(e._s(t.CREATED_BY))]),a("td",[e._v(e._s(t.CREATED_DATE))])])})),0)])],1)],1),a("v-snackbar",{attrs:{timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n        "+e._s(e.text)+"\n        "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n          Close\n        ")])],1)],1)],1)],1)},ne=[],ie=a("c64e"),le=a.n(ie),ce=a("c1df"),de=a.n(ce),ue={data:()=>({snackbar:!1,timeout:3e3,text:"",expand:!1,valid:!0,id_do:"",id_warehouse:"",details:"",name:"",nameRules:[e=>!!e||"Name tidak boleh kosong",e=>e&&e.length<=20||"Name must be less than 10 characters"],delivery:"",deliveryRules:[e=>!!e||"DO tidak boleh kosong"],courier:"",courierRules:[e=>!!e||"Kurir tidak boleh kosong"],address:"",addressRules:[e=>!!e||"Alamat tidak boleh kosong"],warehouse:"",warehouseRules:[e=>!!e||"Gudang tidak boleh kosong"],status:"",statusRules:[e=>!!e||"Status tidak boleh kosong"],stockist:"",stockistRules:[e=>!!e||"Stokis tidak boleh kosong"],email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"]}),methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0,this.formHasErrors=!1,this.submit(),this.reset(),this.expand=!1)},reset(){this.$refs.form.reset(),this.expand=!1},submit(){let e=de()(),t=e.format("YYYY-MM-DD HH:mm:ss"),a={id_do:this.id_do,no_do:this.delivery,created_date:t,created_by:localStorage.getItem("username"),tanggal:t,status:this.status,id_warehouse:this.id_warehouse,id_tracking:le()()};g.a.post("http://103.233.109.131:5500/inputTracking",a).then(e=>{this.text="Data berhasil diperbarui...",this.snackbar=!0}).catch(e=>{this.text="Terjadi kesalahan...",this.snackbar=!0})},getDetails(){g.a.all([g.a.get("http://103.233.109.131:5500/tracking/"+this.delivery)]).then(g.a.spread(e=>{this.id_do=e.data[0][0].ID_DO,this.courier=e.data[0][0].NAMA[1],this.stockist=e.data[0][0].CODE_STOCKIES,this.name=e.data[0][0].NAMA[0],this.address=e.data[0][0].ALAMAT1,this.warehouse=e.data[0][0].WAREHOUSE_NAME,this.id_warehouse=e.data[0][0].ID_WAREHOUSE,this.details=e.data[1],this.expand=!0})).catch(e=>{this.text="Uh-oh...! Something goes wrong",this.snackbar=!0})}}},fe=ue,ve=(a("73d0"),a("0789")),me=a("604c"),be=a("1f4f"),he=a("2db4"),pe=Object(l["a"])(fe,oe,ne,!1,null,"3543be04",null),ge=pe.exports;d()(pe,{VBtn:S["a"],VCard:M["a"],VCardTitle:U["c"],VContainer:C["a"],VExpandTransition:ve["a"],VForm:Z["a"],VItemGroup:me["b"],VSimpleTable:be["a"],VSnackbar:he["a"],VTextField:te["a"]});var je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("p",{staticClass:"display-1"},[e._v("\n    Status\n  ")]),a("ul",e._l(e.items,(function(t){return a("li",{key:t.id},[e._v("\n      "+e._s(t)+"\n    ")])})),0)])},ke=[],we={name:"Status",data:()=>({items:null}),mounted(){g.a.get("http://103.233.109.131:5500/tracking").then(e=>this.items=e.data).catch(e=>console.log(e))}},_e=we,xe=Object(l["a"])(_e,je,ke,!1,null,null,null),ye=xe.exports;d()(xe,{VApp:u["a"]});var Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-container",[a("v-card-title",[e._v(e._s(e.user))]),a("v-card-text",[e._v("Ubah Password")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.oldPasswordRules,type:"password",label:"Password Lama",required:""},model:{value:e.oldPassword,callback:function(t){e.oldPassword=t},expression:"oldPassword"}}),a("v-text-field",{attrs:{rules:e.newPasswordRules,type:"password",label:"Password Baru",required:""},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),a("v-text-field",{attrs:{type:"password",rules:e.rules,label:"Konfirmasi Password",required:""},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}),a("v-item-group",[a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success",elevation:"5"},on:{click:e.validate}},[e._v("Submit")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"warning",elevation:"5"},on:{click:e.reset}},[e._v("Reset")])],1),a("v-snackbar",{attrs:{timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text)+"\n        "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n          Close\n        ")])],1)],1)],1)],1)},Se=[],Ce={data:()=>({user:localStorage.getItem("username"),snackbar:!1,timeout:3e3,text:"",valid:!0,confirmPassword:"",oldPassword:"",oldPasswordRules:[e=>!!e||"Password lama tidak boleh kosong"],newPassword:"",newPasswordRules:[e=>!!e||"Password baru tidak boleh kosong"]}),computed:{rules(){const e=[];if(this.newPassword){const t=e=>(!!e&&e)===this.newPassword||"Password doesn't match";e.push(t)}return e}},watch:{confirmPassword:"validateField",newPassword:"validateField"},methods:{validateField(){this.$refs.form.validate()},validate(){this.$refs.form.validate()&&(this.snackbar=!0,this.formHasErrors=!1,this.submit(),this.reset())},reset(){this.$refs.form.reset()}}},Pe=Ce,Ae=(a("aaa2"),Object(l["a"])(Pe,Ve,Se,!1,null,"3edde03a",null)),Ee=Ae.exports;d()(Ae,{VBtn:S["a"],VCard:M["a"],VCardText:U["b"],VCardTitle:U["c"],VContainer:C["a"],VForm:Z["a"],VItemGroup:me["b"],VSnackbar:he["a"],VTextField:te["a"]}),s["a"].use(b["a"]);const Oe=new b["a"]({mode:"history",base:"/",routes:[{path:"/home",title:"Home",meta:{requiresAuth:!0},component:L,children:[{path:"/",component:G},{path:"tracking",name:"tracking",component:ge},{path:"status",name:"status",component:ye},{path:"setting",name:"setting",component:Ee}]},{path:"/login",name:"login",component:re}]});Oe.beforeEach((e,t,a)=>{if(e.matched.some(e=>e.meta.requiresAuth)){if(j.getters.isLoggedIn)return void a();a("/login")}else a()}),Oe.replace({path:"home"});var Re=Oe,Te=a("f309");s["a"].use(Te["a"]);var Ie=new Te["a"]({icons:{iconfont:"mdi"}}),ze=a("9483");a("ed18").config(),Object(ze["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});a("73ec");var $e=a("ec02"),De=a.n($e),Le=a("0628"),qe=a.n(Le);s["a"].use(qe.a),s["a"].component("vue-headful",De.a),s["a"].config.productionTip=!1,s["a"].prototype.$http=g.a;const Ne=localStorage.getItem("token");Ne&&(s["a"].prototype.$http.defaults.headers["Authorization"]=`Bearer ${Ne}`),new s["a"]({router:Re,store:j,vuetify:Ie,render:e=>e(m)}).$mount("#app")},"6f77":function(e,t,a){},"73d0":function(e,t,a){"use strict";var s=a("8bdd"),r=a.n(s);r.a},"73ec":function(e,t,a){},"8bdd":function(e,t,a){},aaa2:function(e,t,a){"use strict";var s=a("ca17"),r=a.n(s);r.a},ca17:function(e,t,a){},cd9d:function(e,t,a){"use strict";var s=a("6f77"),r=a.n(s);r.a}});
//# sourceMappingURL=app.6002ca9f.js.map