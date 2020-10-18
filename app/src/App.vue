<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      isLogin: state=>state.user.isLogin
    })
  },
  watch: {
    isLogin: {
      handler(newVal){
        if(!newVal){
          // 登录状态过期了，需要重新登录
          // this.$router.replace('/me/login');
        }
      },
      immediate: true
    }
  },
  created(){
    // 检查登录了么，是否过期了
    if(this.isLogin){
      this.$store.dispatch('user/checkLogin');
    }
    
  }
}
</script>
<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
}
.page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 60px;
  background-color: rgba(242, 242, 242, 1);
  &.subpage {
    bottom: 0;
    z-index: 100;
  }
}
// .van-toast{
//   width: 100px;
//   height: 20px;
//   padding: 12px;
//   line-height: 20px;
//   box-sizing: border-box;
//   position: fixed;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%,-50%);
// }
// .van-toast__text{
//   font-size: 16px;
//   color: #fff;
// }
</style>
