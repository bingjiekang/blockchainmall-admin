import{o as y,E as x,q as C,p as S}from"../element-plus/element-plus.DXxe7Acq.js";import{b as k}from"../vue-router/vue-router.CTtvUmZ9.js";import{_ as I,t as B,h as D}from"../../assets/index-DIF_1HvL.js";import{c as E}from"../vue-clipboard3/vue-clipboard3.BC2blOwe.js";import{a as N}from"../axios/axios.Bo0ATomq.js";import{J as O,b as M,S as T,R as e,o as n,a,O as t,W as p,u as f,c as u,ac as $,P as V,V as q,ao as P,ap as R}from"../@vue/@vue.Cyfx47te.js";import"../lodash-es/lodash-es.BM2zjOfE.js";import"../async-validator/async-validator.DKvM95Vc.js";import"../@vueuse/@vueuse.CI58GgG-.js";import"../@element-plus/@element-plus.vzwj9fNK.js";import"../@ctrl/@ctrl.r5W6hzzQ.js";import"../@popperjs/@popperjs.D9SI2xQl.js";import"../normalize-wheel-es/normalize-wheel-es.B6fDCfyv.js";import"../clipboard/clipboard.DnI0MzOy.js";const _=l=>(P("data-v-60f8c692"),l=l(),R(),l),A={class:"data"},F=_(()=>a("div",{class:"card-header"},[a("span",null,"订单状态")],-1)),J=_(()=>a("div",{class:"card-header"},[a("span",null,"创建时间")],-1)),L=_(()=>a("div",{class:"card-header"},[a("span",null,"订单号")],-1)),W=["src"],j=["onClick"],z=_(()=>a("br",null,null,-1)),G={__name:"OrderDetail",setup(l){const{toClipboard:b}=E(),h=async s=>{try{await b(s),x.success("复制成功")}catch(c){console.error(c)}},v=k(),{id:g}=v.query,o=O({data:{},tableData:[]});return M(()=>{N.get(`/orders/${g}`).then(s=>{console.log(s),o.data=s,o.tableData=s.newBeeMallOrderItemVOS})}),(s,c)=>{const i=y,r=C,w=S;return n(),T(i,{class:"order-container"},{default:e(()=>[a("div",A,[t(i,{class:"data-item",shadow:"hover"},{header:e(()=>[F]),default:e(()=>[a("div",null,p(o.data.orderStatusString),1)]),_:1}),t(i,{class:"data-item",shadow:"hover"},{header:e(()=>[J]),default:e(()=>[a("div",null,p(f(B)(o.data.createdAt)),1)]),_:1}),t(i,{class:"data-item",shadow:"hover"},{header:e(()=>[L]),default:e(()=>[a("div",{onClick:c[0]||(c[0]=d=>h(o.data.orderNo)),style:{cursor:"pointer"}},p(o.data.orderNo),1)]),_:1})]),t(w,{data:o.tableData,"tooltip-effect":"dark",style:{width:"100%"}},{default:e(()=>[t(r,{label:"商品图片"},{default:e(d=>[(n(),u("img",{style:{width:"100px"},key:d.row.goodsId,src:s.$filters.prefix(d.row.goodsCoverImg),alt:"商品主图"},null,8,W))]),_:1}),t(r,{prop:"goodsId",label:"商品编号",width:"130px"}),t(r,{label:"商品区块哈希",width:"280px"},{default:e(d=>[(n(!0),u(V,null,$(d.row.hashBlockChain,m=>(n(),u("i",{key:m,onClick:H=>h(m),style:{cursor:"pointer"}},[q(p(f(D)(m)),1),z],8,j))),128))]),_:1}),t(r,{prop:"goodsName",label:"商品名",width:"200px"}),t(r,{prop:"goodsCount",label:"商品数量"}),t(r,{prop:"sellingPrice",label:"价格"})]),_:1},8,["data"])]),_:1})}}},ca=I(G,[["__scopeId","data-v-60f8c692"]]);export{ca as default};