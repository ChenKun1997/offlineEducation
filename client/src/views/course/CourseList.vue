<template>
<div>
  <div class="course_list">
    <h1 class="header">课程管理</h1>
    <div class="top">
      <span>课程列表</span>
      <span class="add_course" @click="addCourseAction">新增课程</span>
    </div>
    <div class="main">
      <div class="th">
        <div class="id">课程编号</div>
        <div class="title">课程名称</div>
        <div class="campus">校区</div>
        <div class="fee">价格</div>
        <div class="limit">名额</div>
        <div class="num">报名人数</div>
        <div class="address">开课地址</div>
        <div class="date">开课日期</div>
        <div class="time">开课时间</div>
        <div class="operate">操作</div>
      </div>
      <div ref="content_item">
        <div class="td" v-for="item in courseList.data" :key="item._id" :ref="item._id">
          <div class="id">{{item.id}}</div>
          <div class="title">{{item.title}}</div>
          <div class="campus">海淀区</div>
          <div class="fee">{{item.fee}}</div>
          <div class="limit">20</div>
          <div class="num">10</div>
          <div class="address">{{item.address}}</div>
          <div class="date">{{item.date}}</div>
          <div class="time">{{item.time}}</div>
          <div class="operate" @click="deleteCourse(item._id)">删除课程</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" v-show="isShow">
    <div class="content">
      <div class="top">
        <p><span>课程信息</span><span class="close" @click="addCourseAction">X</span></p>
      </div>
      <div class="center">
        <p><label for="title">课程名称：</label><input id="title" type="text" v-model="title"></p>
        <p><label for="address">开课地址：</label><input id="address" type="text" v-model="address"></p>
        <p><label for="date">开课日期：</label><input id="date" type="text" v-model="date"></p>
        <p><label for="time">开课时间：</label><input id="time" type="text" v-model="time"></p>
        <p><label for="fee">课程费用：</label><input id="fee" type="text" v-model="fee"></p>
      </div>
      <div class="bottom">
        <div class="cancel" @click="addCourseAction">取消</div>
        <div class="confirm" @click="addCourseConfirmAction">确定</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import http from '../../api/http';
import {ADD_COURSE_API,DELETE_COURSE_API} from '../../api/url'
import {mapState} from 'vuex';
export default {
  data(){
    return {
      isShow:false,
      title:'',
      address:'',
      date:'',
      time:'',
      fee:''
    }
  },
  computed:{
    ...mapState({
      courseList:state=>state.course.courseList
    })
  },
  methods:{
    addCourseAction(){
      this.isShow = !this.isShow; 
    },
    async deleteCourse(_id){
      console.log(111);
      const result =await http.get(DELETE_COURSE_API,{
        _id
      });
      console.log(result);
      if(result.data.code === 0){
        this.$refs.content_item.removeChild(this.$refs[_id][0]);
      }else{
        alert('删除失败');
      }
    },
    async addCourseConfirmAction(){
      if((this.title.trim()||this.address.trim()||this.date.trim()||this.time.trim()||this.fee.trim()) === ''){
        alert('请全部填写!');
        return;
      }
      const result = await http.get(ADD_COURSE_API,{
        id:Date.now(),
        title:this.title,
        address:this.address,
        date:this.date,
        time:this.time,
        fee:this.fee
      });
      console.log(result);
      this.title = '';
      this.address = '';
      this.date = '';
      this.time = '';
      this.fee = '';
      this.addCourseAction();
    }
  },
  created(){
    this.$store.dispatch('course/requestCourseList');
  }
}
</script>

<style scoped lang="scss">
.course_list{
  width: 100%;
  height: 100%;
  .header{
    font-size: 28px;
    font-weight: bold;
  }
  .top{
    width: 100%;
    height: 46px;
    background-color: rgba(242, 242, 242, 1);
    border: 1px solid rgba(228, 228, 228, 1);
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      font-size: 16px;
      color: #333;
    }
    .add_course{
      width: 97px;
      height: 33px;
      background-color: #108ee9;
      color: #fff;
      line-height: 33px;
      text-align: center;
      font-size: 13px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .main{
    width: 100%;
    height: max-content;
    .th{
      width: 100%;
      height: 43px;
      div{
        box-sizing: border-box;
        height: 43px;
        width: max-content;
        float: left;
        background-color: #0097fe;
        // background-color: #eee;
        line-height: 43px;
        text-align: center;
        color: #fff;
      }
      .id{
        width: 100px;
      }
      .title{
        width: 150px;
      }
      .campus{
        width: 80px;
      }
      .fee{
        width: 160px;
      }
      .limit{
        width: 50px;
      }
      .num{
        width: 80px;
      }
      .address{
        width: 150px;
      }
      .date{
        width: 150px;
      }
      .time{
        width: 200px;
      }
      .operate{
        width: 150px;
      }
    }
    .td{
      width: 100%;
      height: 43px;
      div{
        box-sizing: border-box;
        height: 43px;
        width: max-content;
        float: left;
        line-height: 43px;
        text-align: center;
      }
      .id{
        width: 100px;
      }
      .title{
        width: 150px;
      }
      .campus{
        width: 80px;
      }
      .fee{
        width: 160px;
      }
      .limit{
        width: 50px;
      }
      .num{
        width: 80px;
      }
      .address{
        width: 150px;
      }
      .date{
        width: 150px;
      }
      .time{
        width: 200px;
      }
      .operate{
        width: 100px;
        height: 40px;
        border: 1px solid red;
        text-align: center;
        line-height: 40px;
        border-radius: 5px;
        margin: 0 20px;
        cursor: pointer;
      }
    }
  }
}
.modal{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 100;
  .content{
    width: 600px;
    height: 400px;
    background-color: #fff;
    margin: 100px auto 0;
    border-radius: 5px;
    .top{
      width: 100%;
      height: 55px;
      color: rgba(0,0,0,.85);
      font-size: 16px;
      line-height: 55px;
      box-sizing: border-box;
      padding: 0 30px;
      font-family: '微软雅黑';
      font-weight: bold;
      p{
        display: flex;
        justify-content: space-between;
        .close{
          color: #999;
          cursor: pointer;
        }
      }
      
    }
    .center{
      width: 100%;
      height: 290px;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
      padding: 10px 40px;
      p{
        font-size: 16px;
        color: #606266;
        input{
          margin-left: 20px;
          width: 300px;
          height: 40px;
          border: 1px solid #dcdfe6;
          outline: none;
          box-sizing: border-box;
          padding: 10px 20px;
        }
      }
    }
    .bottom{
      width: 100%;
      height: 55px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0 0 380px;
      .cancel{
        width: 72px;
        height: 40px;
        border: 1px solid #dcdfe6;
        text-align: center;
        line-height: 40px;
        border-radius: 5px;
        margin: 0 20px;
        cursor: pointer;
      }
      .confirm{
        width: 74px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background-color: #409eff;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>