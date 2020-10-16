<template>
  <a-layout-header class="header">
    <a-menu
      class="menu"
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['2']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <div class="menu_item" @click="myAction">
          <a-icon type="user" />
          <span class="wenzi">我的</span>
        </div>
      </a-menu-item>
      <a-menu-item key="2">
        <div class="menu_item">
          <a-icon type="home" />
          <span class="wenzi">首页</span>
        </div>
      </a-menu-item>
      <a-menu-item key="3">
        <div class="menu_item">
          <a-icon type="message" />
          <span class="wenzi">消息</span>
        </div>
      </a-menu-item>
      <a-menu-item key="4">
        <div class="menu_item" @click="logoutAction">
          <a-icon type="logout" />
          <span class="wenzi">退出</span>
        </div>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import http from '../api/http'
import {LOGOUT_API} from '../api/url'
import { Layout, Menu, Icon } from 'ant-design-vue'
export default {
  components: {
    [Layout.Header.name]: Layout.Header,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Icon.name]:Icon
  },
  methods:{
    myAction(){
      
    },
    async logoutAction(){
      const result = await http.get(LOGOUT_API);
      this.$router.go(0);
    }
  }
};
</script>

<style scoped lang="scss">
.ant-layout-header{
  background-color: rgba(0, 151, 254, 1);
}
.ant-menu{
    background-color: rgba(0, 151, 254, 1);

}
.header{
  display: flex;
  justify-content: flex-end;
  .ant-menu-item{
    height: 100%;
  }
  .menu_item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
    padding-top: 5px;
    .wenzi{
      width: max-content;
      display: block;
      height: 20px;
    }
  }
}

</style>