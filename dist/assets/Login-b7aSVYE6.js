import{_ as v,j as g,r as h,k as w,a as d,g as t,w as l,l as k,m as V,o as b,d as n,i as F,n as x,h as y,q as E,s as I,u as B,p as C,b as N}from"./index-BiQKGgRH.js";/* empty css                  *//* empty css                 *//* empty css               *//* empty css              */import{m as S}from"./md5-DI6WxMmv.js";import"./_commonjsHelpers-BosuxZz1.js";const U=""+new URL("blockchain-DEvTrI1V.jpg",import.meta.url).href,M=a=>(C("data-v-c1166f08"),a=a(),N(),a),q={class:"login-body"},L={class:"login-container"},j=k('<div class="head" data-v-c1166f08><img class="logo" src="'+U+'" data-v-c1166f08><div class="name" data-v-c1166f08><div class="title" data-v-c1166f08>区块链商城</div><div class="tips" data-v-c1166f08>BlockChainMall 后台管理系统</div></div></div>',1),T=M(()=>d("div",{style:{color:"#333"}},[n("登录表示您已同意"),d("a",null,"《服务条款》")],-1)),D={__name:"Login",setup(a){const m=g(null),e=h({ruleForm:{username:"",password:""},checked:!0,rules:{username:[{required:"true",message:"账户不能为空",trigger:"blur"}],password:[{required:"true",message:"密码不能为空",trigger:"blur"}]}}),c=async()=>{m.value.validate(i=>{if(i)F.post("/adminUser/login",{userName:e.ruleForm.username||"",passwordMd5:S(e.ruleForm.password)}).then(o=>{x("token",o),window.location.href="/"});else return console.log("error submit!!"),!1})};return(i,o)=>{const u=y,r=E,p=I,_=B,f=V;return b(),w("div",q,[d("div",L,[j,t(f,{"label-position":"top",rules:e.rules,model:e.ruleForm,ref_key:"loginForm",ref:m,class:"login-form"},{default:l(()=>[t(r,{label:"账号",prop:"username"},{default:l(()=>[t(u,{type:"text",modelValue:e.ruleForm.username,"onUpdate:modelValue":o[0]||(o[0]=s=>e.ruleForm.username=s),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(r,{label:"密码",prop:"password"},{default:l(()=>[t(u,{type:"password",modelValue:e.ruleForm.password,"onUpdate:modelValue":o[1]||(o[1]=s=>e.ruleForm.password=s),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(r,null,{default:l(()=>[T,t(p,{style:{width:"100%"},type:"primary",onClick:c},{default:l(()=>[n("立即登录")]),_:1}),t(_,{modelValue:e.checked,"onUpdate:modelValue":o[2]||(o[2]=s=>e.checked=s),onChange:o[3]||(o[3]=s=>!e.checked)},{default:l(()=>[n("下次自动登录")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])])])}}},K=v(D,[["__scopeId","data-v-c1166f08"]]);export{K as default};