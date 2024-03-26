<template>
  <el-card class="account-container">
    <h1>系统介绍</h1>
    <div style="line-height: 30px">
      区块链商城
      <br>
      区块链商城后台管理系统是基于 vue3-admin 后台管理系统搭建修改而来，包含 Spring Boot、Vue 3.0 相关技术栈开发。
    </div>
    <!-- <img style="width: 70%;
      display: block;
      margin: 0 auto;" src="https://s.yezgea02.com/1616331765416/WechatIMG40038.png" alt=""> -->
    <h1>开发及部署文档</h1>
    <img style="width: 70%;
      display: block;
      margin: 0 auto;" src="/static-files/vueElement.jpg" />
    
      <ul class="course" @click="goGithub">
        <li>区块链商城地址</li>
      </ul>
      
      <ul class="course" @click="goGithub">
        <li>区块链商城后台管理系统地址</li>
      </ul>
      
      <ul class="course" @click="goGithub">
        <li>区块链商城(及后端管理系统)前端开发文档</li>
      </ul>
      
      <ul class="course" @click="goGithub">
        <li>区块链商城(及后端管理系统)后端开发文档</li>
      </ul>
    
    <h1>技术选型</h1>
    <ul style="font-weight: bold;">
      <li>wangEditor</li>
    </ul>
    <h1>联系作者</h1>
    <ul>
      <li>Github地址：https://github.com/bingjiekang</li>
      <li>博客地址：https://kangbignjie.cn</li>
    </ul>
  </el-card>
</template>

<script setup>
// 跳转GitHub
const goGithub = () => {
  console.log('goGithub')
  window.open('https://github.com/bingjiekang', 'target')
}
</script>
<style scoped>
  .course {
    font-weight: bold;
    display: inline-block;
  }
  .course li {
    line-height: 36px;
    color: #409eff;
    cursor: pointer;
  }
</style>