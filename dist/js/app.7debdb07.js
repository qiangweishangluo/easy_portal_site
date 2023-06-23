(function(){"use strict";var t={5646:function(t,e,a){var l=a(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],n=a(1001),s={},r=(0,n.Z)(s,i,o,!1,null,null,null),c=r.exports,m=a(8345),d=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("portalTitle"),e("carousel"),e("el-tabs",{staticClass:"portal_tabs",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabsList,(function(a,l){return e("el-tab-pane",{key:l,attrs:{label:a.name,name:a.name}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"date",label:"日期"}}),e("el-table-column",{attrs:{prop:"name",label:"公告"}})],1)],1)})),1),e("el-row",[e("el-button",{staticClass:"portal_button",on:{click:function(e){t.dialogVisible=!0}}},[t._v("报名入口")]),e("el-button",{staticClass:"portal_button",on:{click:function(e){return t.$router.push("/bid")}}},[t._v("投标入口")]),e("el-button",{staticClass:"portal_button",on:{click:function(e){return t.$router.push("/bid_opening")}}},[t._v("开标入口")]),e("el-button",{staticClass:"portal_button",on:{click:function(e){return t.$router.push("/aq")}}},[t._v("澄清/二次报价")])],1),e("div",{staticClass:"portal_bottom"},[t._v("备案：")]),e("el-dialog",{attrs:{title:"请输入项目名称/编号查找",visible:t.dialogVisible,width:"60%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._v(" 项目名称/编号： "),e("el-input",{staticStyle:{width:"200px"},attrs:{"suffix-icon":"el-icon-search"},model:{value:t.searchData,callback:function(e){t.searchData=e},expression:"searchData"}}),e("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2}},[e("el-table-column",{attrs:{prop:"date",label:"日期"}}),e("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.application(a.row)}}},[t._v("报名")])]}}])})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)}),u=[],p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"carousel"},[e("carousel-3d",{attrs:{perspective:0,space:400,display:3,"controls-visible":!0,"controls-prev-html":"&#10092; ","controls-next-html":"&#10093;","controls-width":30,"controls-height":60,width:"800",height:"533"}},t._l(t.imgList,(function(a,l){return e("slide",{key:l,attrs:{index:l}},[e("div",[e("img",{attrs:{src:a.img,alt:""}}),e("div",{staticClass:"content"},[t._v(t._s(a.content))])])])})),1)],1)},f=[],b=a(6154);const v=b.Z.create({timeout:5e3});v.interceptors.request.use((t=>t),(t=>(console.log(t),Promise.reject(t)))),v.interceptors.response.use((t=>{const e=t.data;return e}),(t=>(console.log("err"+t),Promise.reject(t))));var g=v;function h(){return g({url:"/api/banner",method:"get"})}function _(){return g({url:"home/homePageImages",method:"get"})}var w=a.p+"img/1.5a444c4e.jpg",X=a.p+"img/2.bc4da5dd.jpg",y=a.p+"img/3.dbc96d0d.jpg",x=a.p+"img/4.2c832ef1.jpg",k=a.p+"img/5.a855085c.jpg",C=a(5685),L=a.n(C),V={name:"portal_site",components:{Carousel3d:C.Carousel3d,Slide:C.Slide},data(){return{imgList:[{img:w,content:"介绍。。。。。"},{img:X,content:"介绍。。。。。"},{img:y,content:"介绍。。。。。"},{img:x,content:"介绍。。。。。"},{img:k,content:"介绍。。。。。"}]}},created(){this.homePageImages()},methods:{homePageImages(){_().then((t=>{1===t.code&&(this.imgList=t.data.list)}))}}},$=V,P=(0,n.Z)($,p,f,!1,null,"a53fe3d8",null),S=P.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("div",{staticClass:"title_bottom"}),e("div",{staticStyle:{"padding-top":"66px"}},[t._m(0),e("div",{staticClass:"texiao"},[t._v(" "+t._s(t.title)+" ")])])])},O=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title_logo"},[e("img",{attrs:{src:a(6949),alt:""}})])}],T={name:"portal_title",components:{},data(){return{title:"黑龙江辰泰信德项目管理有限公司招标投标一体化管理平台"}}},q=T,D=(0,n.Z)(q,j,O,!1,null,"24dc6c9e",null),Z=D.exports,E={name:"HomeView",components:{carousel:S,portalTitle:Z},data(){return{activeName:"采购公告",tabsList:[{name:"采购公告"},{name:"更正公告"},{name:"中标（成交）公告"},{name:"中标（成交）公正公告"},{name:"废标公告"}],tableData:[{date:"2016-05-02",name:"XXXXXXX招标"},{date:"2016-05-04",name:"XXXXXXX招标"},{date:"2016-05-01",name:"XXXXXXX招标"}],tableData2:[{date:"2016-05-02",name:"XXXXXXX招标"},{date:"2016-05-04",name:"XXXXXXX招标"},{date:"2016-05-01",name:"XXXXXXX招标"}],dialogVisible:!1,searchData:""}},created(){this.login()},methods:{handleClick(){this.tableData=[{date:"2016-05-02",name:"XX2222标"},{date:"2016-05-04",name:"XX22标"},{date:"2016-05-01",name:"XXXX22标"}]},application(t){this.$router.push("/application"),console.log(t)},search(){},login(){h().then((t=>{console.log(t)}))}}},N=E,M=(0,n.Z)(N,d,u,!1,null,"e3e8a6a8",null),z=M.exports,I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"application"},[e("portalTitle"),e("div",{staticClass:"main"}),e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"130px","label-position":"left"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"项目名称"}},[e("div",{staticClass:"textLeft"},[t._v("xxxx")])]),e("el-form-item",{attrs:{label:"项目编号"}},[e("div",{staticClass:"textLeft"},[t._v("xxxx")])]),e("el-form-item",{attrs:{label:"联系人"}},[e("el-input",{model:{value:t.form.applicantName,callback:function(e){t.$set(t.form,"applicantName",e)},expression:"form.applicantName"}})],1),e("el-form-item",{attrs:{label:"联系电话"}},[e("el-input",{model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),e("el-form-item",{attrs:{label:"联系地址"}},[e("el-input",{model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),e("el-form-item",{attrs:{label:"营业执照扫描件"}},[e("el-upload",{staticClass:"upload-demo",attrs:{action:"","on-preview":e=>t.handlePreview(e,"fileList"),multiple:"",limit:3,"on-exceed":(e,a)=>t.handleExceed(e,a,"fileList"),"file-list":t.fileList}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])],1)],1),e("el-form-item",{attrs:{label:"授权委托人身份证扫描件"}},[e("el-upload",{staticClass:"upload-demo",attrs:{action:"","on-preview":e=>t.handlePreview(e,"fileList"),multiple:"",limit:3,"on-exceed":(e,a)=>t.handleExceed(e,a,"fileList"),"file-list":t.fileList}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])],1)],1),e("el-form-item",{attrs:{label:"招标文书费二维码"}},[e("img",{attrs:{src:a(6949),alt:""}})])],1),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"投标单位名称"}},[e("el-input",{model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),e("el-form-item",{attrs:{label:"营业执照编号"}},[e("el-input",{model:{value:t.form.businessLicense,callback:function(e){t.$set(t.form,"businessLicense",e)},expression:"form.businessLicense"}})],1),e("el-form-item",{attrs:{label:"法定代表人姓名"}},[e("el-input",{model:{value:t.form.corporate,callback:function(e){t.$set(t.form,"corporate",e)},expression:"form.corporate"}})],1),e("el-form-item",{attrs:{label:"授权委托人姓名"}},[e("el-input",{model:{value:t.form.委托人,callback:function(e){t.$set(t.form,"委托人",e)},expression:"form.委托人"}})],1),e("el-form-item",{attrs:{label:"法定代表人身份证扫描件"}}),e("el-form-item",{attrs:{label:"授权委托书扫描件"}}),e("el-form-item",{attrs:{label:"付款凭证"}})],1)],1),e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("报名")]),e("el-dialog",{attrs:{title:"报名成功",visible:t.dialogVisible,width:"60%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("span",{staticClass:"password"},[t._v("投标密码：XXXXXXXXX")]),e("span",{staticClass:"content"},[t._v("重要提示！投标人请务必保存其报名后生成的投标密码，该密码为投标及开标签到时确认投标人身份的唯一凭证！投标密码遗失的请按公告中的联系电话与工作人员联系！")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确认投标并加密")])],1)])],1)],1)},R=[],U={name:"Application",components:{portalTitle:Z},data(){return{dialogVisible:!1,form:{code:"项目编码",applicantName:"申请人",phone:"电话",address:"地址",company:"投标公司",businessLicense:"营业执照",corporate:"法人",consignor:"委托人",detail:{businessLicense:["www.aaa.com","www.aaa.com"],consignor:["www.aaa.com","www.aaa.com"],corporate:["www.aaa.com","www.aaa.com"],authorization:["www.aaa.com","www.aaa.com"],evidencePayment:["www.aaa.com","www.aaa.com"]}},fileList:[]}},methods:{onSubmit(){console.log("submit!"),this.dialogVisible=!0},handleRemove(t,e){console.log(t,e)},handlePreview(t){console.log(t)},handleExceed(t,e){this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${t.length} 个文件，共选择了 ${t.length+e.length} 个文件`)}}},A=U,F=(0,n.Z)(A,I,R,!1,null,"72f196f9",null),H=F.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bid"},[e("portalTitle"),e("div",{staticClass:"main"}),e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"130px","label-position":"left"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"投标人名称"}},[e("el-input",{model:{value:t.form.bidder,callback:function(e){t.$set(t.form,"bidder",e)},expression:"form.bidder"}})],1),e("el-form-item",{attrs:{label:"投标履约期限"}},[e("el-input",{model:{value:t.form.deadline,callback:function(e){t.$set(t.form,"deadline",e)},expression:"form.deadline"}})],1),e("el-form-item",{attrs:{label:"投标保障金金额"}},[e("el-input",{model:{value:t.form.earnestMoney,callback:function(e){t.$set(t.form,"earnestMoney",e)},expression:"form.earnestMoney"}})],1),e("el-form-item",{attrs:{label:"联系电话"}},[e("el-input",{model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),e("el-form-item",{attrs:{label:"投标文件"}},[e("el-upload",{staticClass:"upload-demo",attrs:{action:"/api/upload","on-preview":e=>t.handlePreview(e,"fileList"),multiple:"",limit:3,"on-exceed":(e,a)=>t.handleExceed(e,a,"fileList"),"on-success":t.handleAvatarSuccess,"file-list":t.fileList}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])],1)],1)],1),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"投标报价"}},[e("el-input",{model:{value:t.form.quotedPrice,callback:function(e){t.$set(t.form,"quotedPrice",e)},expression:"form.quotedPrice"}})],1),e("el-form-item",{attrs:{label:"授权委托人名称"}},[e("el-input",{model:{value:t.form.consignor,callback:function(e){t.$set(t.form,"consignor",e)},expression:"form.consignor"}})],1),e("el-form-item",{attrs:{label:"委托人联系方式"}},[e("el-input",{model:{value:t.form.consignorphonbe,callback:function(e){t.$set(t.form,"consignorphonbe",e)},expression:"form.consignorphonbe"}})],1)],1)],1),e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("报名")]),e("el-dialog",{attrs:{title:"投标成功",visible:t.dialogVisible,width:"60%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("span",{staticClass:"password"},[t._v("投标成功")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)],1)},G=[],J=(a(2062),{name:"bid",components:{portalTitle:Z},data(){return{dialogVisible:!1,form:{identification:"11111",bidder:"投标人名称",deadline:"投标履行期限",earnestMoney:1.4,phone:"1212121",quotedPrice:1.3,consignor:"委托人",consignorphonbe:"委托人联系方式",images:[{id:1,link:"wwwwww"}]},fileList:[],imageUrl:[]}},methods:{onSubmit(){console.log("submit!"),this.dialogVisible=!0},handleRemove(t,e){console.log(t,e)},handlePreview(t){console.log(t)},handleExceed(t,e){this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${t.length} 个文件，共选择了 ${t.length+e.length} 个文件`)},handleAvatarSuccess(t,e){this.imageUrl=URL.createObjectURL(e.raw)}}}),K=J,Q=(0,n.Z)(K,B,G,!1,null,"bdaed14c",null),W=Q.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bid_opening"},[e("portalTitle"),e("div",{staticClass:"main"},[t._v("投标人签到后参加开标唱标环节并公示唱标结果！")]),e("div",{staticClass:"main"},[e("el-button",{attrs:{type:"primary"},on:{click:t.signIn}},[t._v("签到")])],1),e("div",{staticClass:"main"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},t._l(t.tableLabel,(function(t,a){return e("el-table-column",{key:a,attrs:{prop:t.value,label:t.label}})})),1)],1),e("el-dialog",{attrs:{title:"",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",[t._v("签到成功")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)},tt=[],et={name:"bid_opening",components:{portalTitle:Z},data(){return{tableLabel:[{label:"投标名称",value:"name"},{label:"投标报价",value:""},{label:"投标履约期限",value:"date"},{label:"授权委托人名称",value:""},{label:"投标保证金金额",value:""}],tableData:[{date:"2016-05-02",name:"XXXXXXX招标"},{date:"2016-05-04",name:"XXXXXXX招标"},{date:"2016-05-01",name:"XXXXXXX招标"}],dialogVisible:!1}},methods:{signIn(){this.dialogVisible=!0}}},at=et,lt=(0,n.Z)(at,Y,tt,!1,null,"79478580",null),it=lt.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aq"},[e("portalTitle"),e("div",{staticClass:"main"},[t._v("需要你方澄清内容：")]),e("div",{staticClass:"main"},[t._v(" "+t._s(t.content)+" ")]),e("el-form",{ref:"form",staticClass:"main",attrs:{model:t.form,"label-width":"140px"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"澄清文件上传："}},[e("el-upload",{staticClass:"upload-demo",attrs:{action:"","on-preview":e=>t.handlePreview(e,"fileList"),multiple:"",limit:3,"on-exceed":(e,a)=>t.handleExceed(e,a,"fileList"),"file-list":t.fileList}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])],1)],1)],1),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"二次报价："}},[e("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)],1),e("div",{staticStyle:{width:"100%","text-align":"center"}},[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交澄清")])],1)],1),e("el-dialog",{attrs:{title:"",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",[t._v("提交成功")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)},nt=[],st={name:"aq",components:{portalTitle:Z},data(){return{fileList:[],form:{name:""},content:"本项目评标委员会认为你方招标文件中资格证书主页及副页有效期不一致，现要求你方对此做出澄清，澄清时间为 10时30分前偷期视为放弃澄清资格，特此通知!",dialogVisible:!1}},methods:{onSubmit(){this.dialogVisible=!0},handleRemove(t,e){console.log(t,e)},handlePreview(t){console.log(t)},handleExceed(t,e){this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${t.length} 个文件，共选择了 ${t.length+e.length} 个文件`)}}},rt=st,ct=(0,n.Z)(rt,ot,nt,!1,null,"a94c683a",null),mt=ct.exports,dt=a(4720),ut=a.n(dt);l["default"].use(m.ZP),l["default"].use(L()),l["default"].use(ut());const pt=[{path:"/",name:"home",component:z,meta:{title:"黑龙江辰泰信德项目管理有限公司招标投标一体化管理平台",keyword:"home",description:"home"}},{path:"/application",name:"application",component:H,meta:{title:"报名",keyword:"application",description:"application"}},{path:"/bid",name:"bid",component:W,meta:{title:"投标",keyword:"bid",description:"bid"}},{path:"/bid_opening",name:"bid_opening",component:it,meta:{title:"开标",keyword:"bid_opening",description:"bid_opening"}},{path:"/aq",name:"aq",component:mt,meta:{title:"澄清答疑",keyword:"aq",description:"aq"}}],ft=new m.ZP({mode:"history",base:"/",routes:pt});ft.beforeEach(((t,e,a)=>{t.meta.title&&(document.title=t.meta.title),a()}));var bt=ft;l["default"].config.productionTip=!1,new l["default"]({router:bt,render:t=>t(c)}).$mount("#app")},6949:function(t,e,a){t.exports=a.p+"img/logo.bbd928bf.png"}},e={};function a(l){var i=e[l];if(void 0!==i)return i.exports;var o=e[l]={id:l,loaded:!1,exports:{}};return t[l].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,l,i,o){if(!l){var n=1/0;for(m=0;m<t.length;m++){l=t[m][0],i=t[m][1],o=t[m][2];for(var s=!0,r=0;r<l.length;r++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](l[r])}))?l.splice(r--,1):(s=!1,o<n&&(n=o));if(s){t.splice(m--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var m=t.length;m>0&&t[m-1][2]>o;m--)t[m]=t[m-1];t[m]=[l,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var l in e)a.o(e,l)&&!a.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,l){var i,o,n=l[0],s=l[1],r=l[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(r)var m=r(a)}for(e&&e(l);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(m)},l=self["webpackChunkeasy"]=self["webpackChunkeasy"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(5646)}));l=a.O(l)})();
//# sourceMappingURL=app.7debdb07.js.map