<template>
  <div id="choose_class_center" class="page subpage">
    <header class="header">
        <span class="back" @click="backAction">&lt;</span>
        <span class="title">选课中心</span>
    </header>
    <scroll class="scroll">
    <div class="content">
        <div class="item" v-for="item in courseList.data" :key="item._id">
            <div class="top">
                <p class="title">{{item.title}}</p>
                <p><span class="iconfont icondizhi"></span>{{item.address}}</p>
                <p><span class="iconfont iconrili"></span>{{item.date}}</p>
                <p><span class="iconfont icontubiao2tixingnaozhong-copy"></span>{{item.time}}</p>
            </div>
            <div class="bottom">
                <p class="cost">{{item.fee}}</p>
                <div class="pay" @click="payAction(item.id)">
                    立即购买
                </div>
            </div>
        </div>
    </div>
    </scroll>
  </div>
</template>

<script>
import http from '../../api/http';
import {ADD_ORDER_API} from '../../api/url';
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState({
            courseList:state=>state.course.courseList,
            info:state=>state.user.info
        })
    },
    methods:{
        backAction(){
            this.$router.back();
        },
        async payAction(id){
            console.log(id,this.info.username);
            const result =await http.get(ADD_ORDER_API,{
                id,
                user:this.info.username,
                state:0
            })
            console.log(result);
            this.$router.push('/shouye/order');

        }
    },
    created(){  
        this.$store.dispatch('course/requestCourseList');
    }
}
</script>

<style scoped lang="scss">
.scroll{
    width: 100%;
    height: 100%;
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
    img{
        width: 25px;
        height: 25px;
    }
}
.content{
    width: 100%;
    height: max-content;
    .item{
        width: 100%;
        height: 153px;
        margin-bottom: 10px;
        border: 1Px solid #999;
        .top{
            width: 100%;
            height: 110px;
            background-color: #fff;
            box-sizing: border-box;
            // border-right: 1Px solid #aaa;
            border-bottom: 1Px solid #aaa;
            padding: 5px 0;
            .title{
                font-size: 15px;
                color: #333;
                line-height: 20px;
            }
            p{
                font-size: 14px;
                line-height: 28px;
                color: #999;
            }
            .cost{
                color: rgb(240, 0, 0);
            }
        }
        .bottom{
            width: 100%;
            height: 43px;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                line-height: 43px;
                font-size: 14px;
                color: red;
                margin-left: 15px;
            }
            .pay{
                width: 64px;
                height: 30px;
                background-color: rgba(16, 142, 233, 1);
                line-height: 30px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                margin-right: 20px;
                border-radius: 6px;
            }
        }
    }
}
</style>