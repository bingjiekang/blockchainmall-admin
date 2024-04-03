import{E as g,n as R,l as z,k as $,j as S,t as q,o as A,r as G,q as M,p as O,u as j}from"../element-plus/element-plus.DXxe7Acq.js";import{u as J,t as W}from"../@element-plus/@element-plus.vzwj9fNK.js";import{_ as H,t as K}from"../../assets/index-DIF_1HvL.js";import{a as _}from"../axios/axios.Bo0ATomq.js";import{r as v,J as E,o as P,S as L,R as a,a as y,O as t,V as h,b as Q,c as X,P as Y,u as T,W as I,ao as Z,ap as ee}from"../@vue/@vue.Cyfx47te.js";import{u as oe,b as te}from"../vue-router/vue-router.CTtvUmZ9.js";import"../lodash-es/lodash-es.BM2zjOfE.js";import"../async-validator/async-validator.DKvM95Vc.js";import"../@vueuse/@vueuse.CI58GgG-.js";import"../@ctrl/@ctrl.r5W6hzzQ.js";import"../@popperjs/@popperjs.D9SI2xQl.js";import"../normalize-wheel-es/normalize-wheel-es.B6fDCfyv.js";const ne={class:"dialog-footer"},le={__name:"DialogAddGood",props:{type:String,configType:Number,reload:Function},setup(c,{expose:x}){const s=c,k=v(null),e=E({visible:!1,ruleForm:{name:"",link:"",id:"",sort:""},rules:{name:[{required:"true",message:"名称不能为空",trigger:["change"]}],id:[{required:"true",message:"编号不能为空",trigger:["change"]}],sort:[{required:"true",message:"排序不能为空",trigger:["change"]}]},id:""}),b=i=>{_.get(`/indexConfigs/${i}`).then(l=>{e.ruleForm={name:l.configName,id:l.goodsId,link:l.redirectUrl,sort:l.configRank}})},o=i=>{e.visible=!0,i?(e.id=i,b(i)):e.ruleForm={name:"",id:"",link:"",sort:""}},d=()=>{e.visible=!1},F=()=>{k.value.validate(i=>{if(i){if(e.ruleForm.id<0||e.ruleForm.id>200){g.error("商品编号不能小于 0 或大于 200");return}s.type=="add"?_.post("/indexConfigs",{configType:s.configType||3,configName:e.ruleForm.name,redirectUrl:e.ruleForm.link,goodsId:e.ruleForm.id,configRank:e.ruleForm.sort}).then(()=>{g.success("添加成功"),e.visible=!1,s.reload&&s.reload()}):_.put("/indexConfigs",{configId:e.id,configType:s.configType||3,configName:e.ruleForm.name,redirectUrl:e.ruleForm.link,goodsId:e.ruleForm.id,configRank:e.ruleForm.sort}).then(()=>{g.success("修改成功"),e.visible=!1,s.reload&&s.reload()})}})};return x({open:o,close:d}),(i,l)=>{const p=R,f=z,C=$,n=S,V=q;return P(),L(V,{title:c.type=="add"?"添加商品":"修改商品",modelValue:e.visible,"onUpdate:modelValue":l[5]||(l[5]=r=>e.visible=r),width:"400px"},{footer:a(()=>[y("span",ne,[t(n,{onClick:l[4]||(l[4]=r=>e.visible=!1)},{default:a(()=>[h("取 消")]),_:1}),t(n,{type:"primary",onClick:F},{default:a(()=>[h("确 定")]),_:1})])]),default:a(()=>[t(C,{model:e.ruleForm,rules:e.rules,ref_key:"formRef",ref:k,"label-width":"100px",class:"good-form"},{default:a(()=>[t(f,{label:"商品名称",prop:"name"},{default:a(()=>[t(p,{type:"text",modelValue:e.ruleForm.name,"onUpdate:modelValue":l[0]||(l[0]=r=>e.ruleForm.name=r)},null,8,["modelValue"])]),_:1}),t(f,{label:"跳转链接",prop:"link"},{default:a(()=>[t(p,{type:"text",modelValue:e.ruleForm.link,"onUpdate:modelValue":l[1]||(l[1]=r=>e.ruleForm.link=r)},null,8,["modelValue"])]),_:1}),t(f,{label:"商品编号",prop:"id"},{default:a(()=>[t(p,{type:"number",min:"0",modelValue:e.ruleForm.id,"onUpdate:modelValue":l[2]||(l[2]=r=>e.ruleForm.id=r)},null,8,["modelValue"])]),_:1}),t(f,{label:"排序值",prop:"sort"},{default:a(()=>[t(p,{type:"number",modelValue:e.ruleForm.sort,"onUpdate:modelValue":l[3]||(l[3]=r=>e.ruleForm.sort=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])}}},ae=c=>(Z("data-v-cd166dbd"),c=c(),ee(),c),re={class:"header"},ie=["href"],se=["onClick"],de=ae(()=>y("a",{style:{cursor:"pointer"}},"删除",-1)),ce={__name:"IndexConfig",setup(c){const x={hot:3,new:4,recommend:5},s=oe(),k=te(),e=v(null),b=v(null),o=E({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,type:"add",configType:3});s.beforeEach(n=>{["hot","new","recommend"].includes(n.name)&&(o.configType=x[n.name],o.currentPage=1,d())}),Q(()=>{o.configType=x[k.name],d()});const d=()=>{o.loading=!0,_.get("/indexConfigs",{params:{pageNumber:o.currentPage,pageSize:o.pageSize,configType:o.configType}}).then(n=>{o.tableData=n.list,o.total=n.totalCount,o.currentPage=n.currPage,o.loading=!1})},F=()=>{o.type="add",b.value.open()},i=n=>{o.type="edit",b.value.open(n)},l=n=>{o.multipleSelection=n},p=()=>{if(!o.multipleSelection.length){g.error("请选择项");return}_.delete("/indexConfigs",{data:{ids:o.multipleSelection.map(n=>n.configId)}}).then(()=>{g.success("删除成功"),d()})},f=n=>{_.delete("/indexConfigs",{data:{ids:[n]}}).then(()=>{g.success("删除成功"),d()})},C=n=>{o.currentPage=n,d()};return(n,V)=>{const r=S,w=G,u=M,U=O,B=j,D=A;return P(),X(Y,null,[t(D,{class:"index-container"},{header:a(()=>[y("div",re,[t(r,{type:"primary",icon:T(J),onClick:F},{default:a(()=>[h("增加")]),_:1},8,["icon"]),t(w,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:p},{reference:a(()=>[t(r,{type:"danger",icon:T(W)},{default:a(()=>[h("批量删除")]),_:1},8,["icon"])]),_:1})])]),default:a(()=>[t(U,{load:o.loading,ref_key:"multipleTable",ref:e,data:o.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:l},{default:a(()=>[t(u,{type:"selection",width:"55"}),t(u,{prop:"configName",label:"商品名称"}),t(u,{label:"跳转链接"},{default:a(m=>[y("a",{target:"_blank",href:m.row.redirectUrl},I(m.row.redirectUrl),9,ie)]),_:1}),t(u,{prop:"configRank",label:"排序值",width:"120"}),t(u,{prop:"goodsId",label:"商品编号",width:"200"}),t(u,{prop:"createdAt",label:"添加时间",width:"200"},{default:a(m=>[h(I(T(K)(m.row.createdAt)),1)]),_:1}),t(u,{label:"操作",width:"100"},{default:a(m=>[y("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:N=>i(m.row.configId)},"修改",8,se),t(w,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:N=>f(m.row.configId)},{reference:a(()=>[de]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["load","data"]),t(B,{background:"",layout:"prev, pager, next",total:o.total,"page-size":o.pageSize,"current-page":o.currentPage,onCurrentChange:C},null,8,["total","page-size","current-page"])]),_:1}),t(le,{ref_key:"addGood",ref:b,reload:d,type:o.type,configType:o.configType},null,8,["type","configType"])],64)}}},Ce=H(ce,[["__scopeId","data-v-cd166dbd"]]);export{Ce as default};