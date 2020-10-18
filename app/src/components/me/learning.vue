<template>
  <div id="choose_class_center" class="page subpage">
    <header class="header">
        <span class="back" @click="backAction">&lt;</span>
        <span class="title">学习中的课程</span>
    </header>
    <scroll class="scroll">
    <div class="content" ref="content" v-if="learning">
        <div class="item" v-for="item in learning" :key="item._id" :ref="item._id">
            <div class="top">
                <p class="first">
                    <span class="number">订单编号：<i>M{{item._id.substring(0,8)}}</i> </span>
                    <span class="time">{{date}}</span>
                </p>
                <p class="second">{{item.detail.title}}</p>
                <p class="fee">{{item.detail.fee}}</p>
            </div>
            <div class="bottom">
                <p class="t">
                    <span class="l">如需退款请联系校区负责人</span>
                    <span class="r">实付：<i>￥{{parseInt(item.detail.fee.substring(1))}}</i></span>
                </p>
                <p>课程剩余节数：10节</p>
                
            </div>
        </div>
    </div>
    <div v-else class="none">
        暂无课程
    </div>
    </scroll>
  </div>
</template>

<script>
import http from '../../api/http';
import {UPDATE_ORDER_STATE_API,DELETE_ORDER_API} from '../../api/url';
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState({
            info:state=>state.user.info,
            learning:state=>state.order.learning
        }),
        date(){
            const d = new Date();
            return d.toLocaleString();
        }
    },
    methods:{
        backAction(){
            this.$router.back();
        },
    },
    created(){
        this.$store.dispatch('order/requestOrder',{
            user:this.info.username,
            state:2,
            tag:'learning'
        })
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
    border-bottom: 1Px solid #999;
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
        height: 214px;
        background-color: #fff;
        margin-bottom: 10px;
        .top{
            width: 100%;
            height: 114px;
            box-sizing: border-box;
            padding: 20px 4px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .first{
                .number,.time{
                    font-size: 13px;
                    color: #999;
                    margin-right: 30px;
                    i{
                       letter-spacing: 2px; 
                    }
                }
            }
            .second{
                font-size: 14px;
            }
            .fee{
                font-size: 13ox;
                color: red;
            }
        }
        .bottom{
            width: 100%;
            height: 100px;
            border-top: 1Px solid #999;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .t{
                font-size: 13px;
                .l{
                    color: #999;
                }
                .r{
                    margin-left: 30px;
                    i{
                        
                        color: red;
                    }
                }
            }
            p{
                font-size: 13px;
                color: #333;
                text-indent: 10px;
            }
        }   
    }
}
.none{
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
}
</style>