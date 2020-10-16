<template>
   <div id="home">
    <nav class="menu">
      <router-link class="menu-item" to="/shouye">
        <span class="iconfont iconshouye" style="font-weight:600"></span>
        <span>首页</span>
      </router-link>
      <router-link class="menu-item" to="/information">
        <span class="iconfont iconzixun"></span>
        <span>资讯</span>
      </router-link>
      <router-link class="menu-item" to="/message" style="width:25px">
        <span class="iconfont iconxiaoxi"></span>
        <span>消息</span>
      </router-link>
      <router-link class="menu-item" to="/me">
        <span class="iconfont iconsself"></span>
        <span>我的</span>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.menu{
    width: 100%;
    height: 60px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    background-color: #fff;
    z-index: 10;
    .menu-item {
    display: block;
    flex: 1;
    height: 49px;
    color: #696969;
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
    padding-top: 4px;
    .iconfont{
        zoom: 1.5;
        margin-bottom: 2px;
    }
    &.router-link-active {
      font-weight: 600;
      color: #46A0F0;
    }
  }
}
</style>