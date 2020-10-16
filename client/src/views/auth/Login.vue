<template>
  <div id="login" class="login">
    <div class="wrap">
      <div class="left">
        <img src="../../assets/login.png" alt="">
      </div>
      <div class="right">
        <h1>后台管理系统</h1>
        <div class="shuru">
          <input type="text" placeholder="用户名" v-model="username"/>
          <input type="password" placeholder="密码" v-model="password"/>
        </div>
        <button @click="loginAction">登录</button>
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
      username: '',
      password: ''
    }
  },
  methods: {
    // 登录
    async loginAction(){
      const result = await http.post(
        LOGIN_API,
        {
          username: this.username,
          password: this.password
        }
      );
        if(result.data.code === 0){
          //登录成功
          this.$store.dispatch('user/changeLoginAction', true);
          this.$router.push({name: 'home'});
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

<style scoped lang='scss'>
.login{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(16, 142, 233, 1);
  .wrap{
    width: 582px;
    height: 366px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    .left{
      width: 217px;
      height: 228px;
      img{
        width: 217px;
        height: 228px;
      }
    }
    .right{
      width: 305px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      h1{
        width: max-content;
        font-size: 28px;
        font-weight: bold;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      }
      .shuru{
        width: 310px;
        height: 110px;
        box-sizing: border-box;
        border: 1px solid rgb(228, 228, 228);
        input{
          border: none;
          outline: none;
          width: 303px;
          height: 50px;
          box-sizing: border-box;
          padding-left: 50px;
          &:first-child{
            border-bottom:  1px solid rgb(228, 228, 228);
          }
        }
      }
      button{
        width: 262px;
        height: 44px;
        outline: none;
        border: none;
        background-color: rgba(16, 142, 233, 1);
        color: #fff;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
      }
      a{
        text-decoration: none;
        
      }
    }
  }
}
</style>