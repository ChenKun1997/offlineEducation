<template>
  <div class="course_list">
    <h1 class="header">课程管理</h1>
    <div class="top">
      <span>课程列表</span>
      <span class="add_course">新增课程</span>
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
      <div class="td" v-for="item in courseList.data" :key="item._id">
        <div class="id">{{item.id}}</div>
        <div class="title">{{item.title}}</div>
        <div class="campus">海淀区</div>
        <div class="fee">{{item.fee}}</div>
        <div class="limit">20</div>
        <div class="num">10</div>
        <div class="address">{{item.address}}</div>
        <div class="date">{{item.date}}</div>
        <div class="time">{{item.time}}</div>
        <div class="operate">操作</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState({
      courseList:state=>state.course.courseList
    })
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
        border-top: 1px solid #bbb;
        border-left: 1px solid #bbb;
        border-bottom: 1px solid #bbb;
        width: max-content;
        float: left;
        background-color: #eee;
        line-height: 43px;
        text-align: center;
        &:last-child{
          border-right: 1px solid #bbb;
        }
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
        border-top: 1px solid #bbb;
        border-left: 1px solid #bbb;
        border-bottom: 1px solid #bbb;
        width: max-content;
        float: left;
        // background-color: #eee;
        line-height: 43px;
        text-align: center;
        &:last-child{
          border-right: 1px solid #bbb;
        }
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
  }
}
</style>