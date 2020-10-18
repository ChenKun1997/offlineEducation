<template>
  <div id="register" class="page subpage">
    <header class="header">
        <span class="back" @click="backAction">&lt;</span>
        <span class="title">登录</span>
    </header>
    <div class="main">
      <div class="register">
        <p><label for="username">账号：</label><input id="username" type="text" placeholder="请输入账号" v-model="username"></p>
        <p><label for="password">密码：</label><input id="password" type="text" placeholder="请输入密码" v-model="password"></p>
        <div class="submit" @click="loginAction">登录</div>
        <a class="aaa" href="/mobile/me/register">暂无账号，立即注册</a>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../../api/http'
import {LOGIN_API} from '../../api/url'
export default {
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
      backAction(){
          this.$router.back();
      },
      async loginAction(){
        const result = await http.post(LOGIN_API,{
          username:this.username,
          password:this.password
        });
        if(result.data.code === 0){
          //登录成功
          this.$store.dispatch('user/changeLoginAction', true);
          this.$router.push('/me');
          // 查询用户信息
          this.$store.dispatch('user/requestUserInfo');
        }else{
          // 登录失败
          alert(result.data.message);
        }
      }
  }
}
</script>

<style scoped lang="scss">
.page{
  background-color: #fff;
}
.header{
    width: 100%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .back{
        font-size: 25px;
        font-weight: bold;
        margin-left: 10px;
    }
    .title{
        font-size: 18px;
        font-weight: bold;
        margin:0 220px 0 10px;
    }
}
.main{
  width: 100%;
  height: max-content;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .register{
    width: 100%;
    height: 250px;
    box-sizing: border-box;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p{
      font-size: 14px;
      color: #333;
      font-weight: bold;
      
      input{
        width: 200px;
        height: 30px;
        border: 1Px solid #999;
        outline: none;
        box-sizing: border-box;
        padding-left: 10px;
        font-size: 14px;
        &::placeholder{
          font-size: 14px;
        }
      }
    }
    .submit{
      width: 250px;
      height: 30px;
      border-radius: 10px;
      background-color: #ff6700;
      text-align: center;
      line-height: 30px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      letter-spacing: 30px;
    }
    .aaa{
      font-size: 12px;
      color: rgb(0, 0, 150);
    }
  }
  
}
</style>