<template>
  <div id="auth">
    <nav>
      <router-link to="/auth/login">登录</router-link>
      <router-link to="/auth/register">注册</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import http from '../../api/http'
export default {
  created(){
    
  }

}
</script>

<style>

</style>