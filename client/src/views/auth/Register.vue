<template>
  <div id="register">
    <h1>注册</h1>
    <input type="text" placeholder="用户名" v-model="username"/>
    <input type="text" placeholder="密码" v-model="password"/>
    <button @click="registerAction">注册</button>
  </div>
</template>

<script>
import http from '../../api/http'
import {REGISTER_API} from '../../api/url'
export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 注册
    async registerAction(){
      const result = await http.post(
        REGISTER_API,
        {
          username: this.username,
          password: this.password,
          nickname: this.password,
          phonenumber: this.password,
          job: this.password,
          auth: []
        }
      )
        if(result.data.code === 0){
          //注册成功
          this.$router.push('/login');
        }else{
          //注册失败
          alert(result.data.message);
        }
    }
  }
}
</script>

<style>

</style>