<template>
<div>
  <div id="me" class="page">
    <header class="header">
      <h2>我的</h2>
    </header>
    <div class="main">
      <!-- 头像 -->
      <div class="top" v-if="isLogin">
        <div class="avatar">
          <img src="../assets/avator.png" alt="">
        </div>
        <div class="user">
          <p class="nickname">{{info.username}}</p>
        </div>
        <div class="setting iconfont iconshezhi"></div>
      </div>
      <div class="login" v-else>
        <div class="sign_in" @click="toLoginAction">
          登&nbsp;录
        </div>
      </div>
      <!-- 我的订单 -->
      <div class="order">
        <p class="title">我的订单</p>
        <div class="order_list">
          <div class="item" @click="toWaitToPayAction">
            <span class="iconfont icondzf-copy"></span>
            <span>待支付</span>
          </div>
          <!-- <div class="item">
            <span class="iconfont iconicongongkaikehover"></span>
            <span>待开课</span>
          </div> -->
          <div class="item">
            <span class="iconfont iconxuexizhong"></span>
            <span>学习中</span>
          </div>
          <div class="item">
            <span class="iconfont iconyijieshu"></span>
            <span>已结束</span>
          </div>
          <div class="item">
            <span class="iconfont iconrecharge-refund"></span>
            <span>退款/售后</span>
          </div>
        </div>
      </div>
      <!-- 我的活动 -->
      <div class="activity">
        <div class="item">
          <span class="left iconfont iconliwu"></span>
          <span class="left">我的活动</span>
          <span class="right iconfont iconxiangyou"></span>
        </div>
        <div class="item">
          <span class="left iconfont iconyouhuiquan"></span>
          <span class="left">我的优惠券</span>
          <span class="right iconfont iconxiangyou"></span>
        </div>
        <div class="item">
          <span class="left iconfont iconshoucang"></span>
          <span class="left">我的收藏</span>
          <span class="right iconfont iconxiangyou"></span>
        </div>
        <div class="item">
          <span class="left iconfont iconwode"></span>
          <span class="left">关于我们</span>
          <span class="right iconfont iconxiangyou"></span>
        </div>
        <div class="item">
          <span class="left iconfont iconzaixianzixun"></span>
          <span class="left">在线咨询</span>
          <span class="right iconfont iconxiangyou"></span>
        </div>
      </div>
      <div class="footer" v-if="isLogin">
        <div class="logout" @click="logoutAction">
          退出登录
        </div>
      </div>
    </div>
  </div>
  <router-view />
</div>
  
</template>

<script>
import {mapState} from 'vuex';
import http from '../api/http'
import {LOGOUT_API} from '../api/url'
export default {
  computed:{
    ...mapState({
      isLogin:state=>state.user.isLogin,
      info:state=>state.user.info
    })
  },
  methods:{
    toLoginAction(){
      this.$router.push('/me/login');
    },
    toWaitToPayAction(){
      this.$router.push('/me/wait-to-pay');
    },
    async logoutAction(){
      const result = await http.get(LOGOUT_API);
      this.$toast(`${result.data.message}`);
      this.$router.go(0)
    }
  },
  created(){
  }
}
</script>

<style scoped lang="scss">
.header{
  width: 100%;
  height: 40px;
  background-color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-indent: 20px;
  line-height: 40px;
  box-sizing: border-box;
  border-bottom: 1Px solid #999;
}
.main{
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  padding: 0 18px;
  background-color: #fff;

  .top{
    width: 100%;
    height: 100px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px 0 0;
    display: flex;
    justify-content: space-around;
    align-content: center;
    .avatar{
      width: 60px;
      height: 60px;
      img{
        width: 60px;
        height: 60px;
      }
    }
    .user{
      width: 200px;
      height: 60px;
      font-size: 14px;
      line-height: 50px;
    }
    .setting{
      font-size: 20px;
      line-height: 60px;
    }
  }
  .login{
    width: 100%;
    height: 100px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .sign_in{
      width: 200px;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      background-color: rgba(16, 142, 233, 1);
      border-radius: 10px;
      font-weight: 600;
    }
  }
  .order{
    width: 100%;
    height: 135px;
    .title{
      font-size: 16px;
      font-family: '微软雅黑';
      line-height: 30px;
    }
    .order_list{
      width: 344px;
      height: 100px;
      box-sizing: border-box;
      border: 1Px solid #999;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137);
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .iconfont{
          font-size: 30px;
          color: #999;
          font-weight: bold;
        }
        span{
          font-size: 13px;
          color: #999;
          line-height: 25px;
        }
      }
    }
  }
  .activity{
    width: 344px;
    height: 218px;
    border-top: 1Px solid #999;
    margin-top: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137);
    .item{
      width: 100%;
      height: 43px;
      box-sizing: border-box;
      padding: 10px 10px;
      border-left: 1Px solid #999;
      border-right: 1Px solid #999;
      border-bottom: 1Px solid #999;
      .iconfont{
        font-size: 20px;
        font-weight: bold;
      }
      .left{
        line-height: 23px;
        float: left;
        margin-left: 10px;
      }
      .right{
        float: right;
      }
    }
  }
  .footer{
    width: 100%;
    height: 102px;
    border-top: 1Px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
    .logout{
      width: 300px;
      height: 44px;
      background-color: rgba(16, 142, 233, 1);
      border-radius: 5px;
      text-align: center;
      line-height: 44px;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>