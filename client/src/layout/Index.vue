<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh" theme="light">
    <a-layout-sider theme="light" v-model="collapsed" collapsible>
      <div class="logo">后台管理系统</div>
      <!-- 菜单 -->
      <app-menu />
    </a-layout-sider>
    <a-layout>
      <!-- 头部 -->
      <app-header/>

      <!-- 内容 -->
      <a-layout-content style="margin: 0 16px">
        <!-- 面包屑 -->
        <app-breadcrumb />

        <div>
          <router-view/>
        </div>
      </a-layout-content>

      <!-- 底部 -->
      <!-- <app-footer /> -->
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout } from "ant-design-vue";
import AppMenu from "./app-menu";
import AppHeader from "./app-header";
import AppBreadcrumb from "./app-breadcrumb";
import AppFooter from "./app-footer";
export default {
  components: {
    [Layout.name]: Layout,
    [Layout.Sider.name]: Layout.Sider,
    [Layout.Content.name]: Layout.Content,
    AppMenu,
    AppHeader,
    AppBreadcrumb,
    AppFooter,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style scoped>
#components-layout-demo-side .logo {
  color: #fff;
  padding: 16px 16px 12px;
  font-size:24px;
  font-weight:bold;
  background-color: rgba(0, 151, 254, 1);
}
.ant-layout{
  background-color: #fff;
}
</style>
