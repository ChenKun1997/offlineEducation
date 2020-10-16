<template>
  <div id="add-acount">
    <h1>添加账号</h1>
    <a-form :form="form">
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        v-for="item in formData"
        :key="item.id"
        :label="item.title"
      >
        <a-input
          v-decorator="[
            item.name,
            { rules: [{ required: true, message: item.message }] },
          ]"
        />
      </a-form-item>
    </a-form>
    <h1>权限分配</h1>

    <div v-for="item in authArr" :key="item.name">
      <b>{{item.title}}</b>
      <a-checkbox-group :options="item.children" v-model="value[item.name]" />
    </div>

    

    <button @click="addAction">添加</button>
  </div>
</template>

<script>
import { Form, Input, Checkbox } from "ant-design-vue";
import mainRoute from "../../router/mainRoute";
import http from '../../api/http'
import {ADD_ACCOUNT_API} from '../../api/url'
const authArr = mainRoute.children
  .map((item) => {
    let children = [];
    if (item.children && item.children.length > 0) {
      //有子节点
      children = item.children.map((item) => ({
        label: item.meta.title,
        value: item.name,
      }));
    } else {
      //跟节点
      children = [
        {
          label: item.meta.title,
          value: item.name,
        },
      ];
    }
    return { name: item.name, title: item.meta.title, children };
  })
  .filter((item) => item.name !== "home");

const value = {};
authArr.forEach(item=>{
  value[item.name] = [];
})

// 样式
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

export default {
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Checkbox.Group.name]: Checkbox.Group,
  },
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "acount" }),
      formData: [
        { id: 1, name: "username", title: "账号", message: "请输入账号!" },
        { id: 2, name: "nickname", title: "姓名", message: "请输入姓名!" },
        {
          id: 3,
          name: "phonenumber",
          title: "手机号",
          message: "请输入手机号!",
        },
        { id: 4, name: "job", title: "职位", message: "请输入职位!" },
      ],
      authArr,
      value,
    };
  },
  methods: {
    addAction() {
      this.form.validateFields(async (err) => {
        if (err) {
          return;
        }
        let auth = [];
        Object.values(this.value).forEach(arr=>{
          auth = [...auth, ...arr];
        });
        // 发送请求，添加账号
        const result = await http.post(ADD_ACCOUNT_API, {
          username: this.form.getFieldValue('username'),
          nickname: this.form.getFieldValue('nickname'),
          phonenumber: this.form.getFieldValue('phonenumber'),
          job: this.form.getFieldValue('job'),
          auth: auth
        })
      });
    }
  },
};
</script>

<style>
</style>


