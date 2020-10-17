<template>
  <div id="choose_class_center" class="page subpage">
    <header class="header">
        <span class="back" @click="backAction">&lt;</span>
        <span class="title">待支付课程</span>
    </header>
    <scroll class="scroll">
    <div class="content" ref="content" v-if="waitToPay">
        <div class="item" v-for="item in waitToPay" :key="item._id" :ref="item._id">
            <div class="top">
                <p class="first">
                    <span class="number">订单编号：<i>M{{item._id.substring(0,8)}}</i> </span>
                    <span class="wait">待支付</span>
                </p>
                <p class="second">{{item.detail.title}}</p>
                <p class="fee">{{item.detail.fee}}</p>
            </div>
            <div class="bottom">
                <span>实付：<i>￥{{parseInt(item.detail.fee.substring(1))}}</i></span>
                <div class="cancel" @click="cancelOrderAction(item._id)">
                    取消订单
                </div>
                <div class="pay">
                    立即支付
                </div>
            </div>
        </div>
    </div>
    <div v-else class="none">
        暂无订单
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
            waitToPay:state=>state.order.waitToPay
        })
    },
    methods:{
        backAction(){
            this.$router.back();
        },
        async cancelOrderAction(_id){
            const result = await http.get(
                DELETE_ORDER_API,{_id}
            );
            this.$refs.content.removeChild(this.$refs[_id][0])
        }
    },
    created(){
        this.$store.dispatch('order/requestOrder',{
            user:this.info.username,
            state:1,
            tag:'waitToPay'
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
        height: 176px;
        background-color: #fff;
        margin-bottom: 10px;
        .top{
            width: 100%;
            height: 115px;
            box-sizing: border-box;
            padding: 20px 4px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .first{
                .number{
                    font-size: 13px;
                    color: #999;
                    i{
                       letter-spacing: 2px; 
                    }
                    
                }
                .wait{
                    margin-left: 150px;
                    color: red;
                    font-size: 13px;
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
            height: 60px;
            border-top: 1Px solid #999;
            overflow: hidden;
            display: flex;
            align-items: center;
            span{
                float: left;
                margin-left: 5px;
                font-size: 13px;
                i{
                    color: red;
                }
            }
            .cancel{
                float: left;
                width: 81px;
                height: 35px;
                box-sizing: border-box;
                border: 1Px solid rgba(16, 142, 233, 1);
                border-radius: 5px;
                line-height: 35px;
                font-size: 13px;
                color: #333;
                text-align: center;
                margin: 0 10px 0 85px;
            }
            .pay{
                float: left;
                width: 81px;
                height: 35px;
                box-sizing: border-box;
                background-color:rgba(16, 142, 233, 1);
                border-radius: 5px;
                line-height: 35px;
                font-size: 13px;
                color: #fff;
                text-align: center;
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