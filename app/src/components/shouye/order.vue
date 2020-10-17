<template>
  <div id="order" class="page subpage" v-if="order.detail">
      <header class="header">
        <span class="back" @click="backAction">&lt;</span>
        <span class="title">订单结算</span>
    </header>
    <div class="vip_name">
        <p>会员名称：{{info.username}}</p>
        <p>用户手机号：18870786590</p>
    </div>
    <div class="detail">
        <p class="top">
            <span class="title">{{order.detail.title}}</span>
            <span class="fee">{{order.detail.fee}}</span>
        </p>
        <p><span class="iconfont icondizhi"></span> <span class="addresss">{{order.detail.address}}</span></p>
        <p><span class="iconfont iconrili"></span><span class="date">{{order.detail.time}}</span></p>
        <p><span class="iconfont icontubiao2tixingnaozhong-copy"></span><span class="time">{{order.detail.date}}</span></p>
    </div>
    <!-- 优惠券 -->
    <div class="coupon">
        <span class="font">优惠券</span>
        <span>无</span>
        <span>&gt;</span>
    </div>
    <!-- 共需支付 -->
    <div class="money">
        <span>共需支付</span>
        <span class="fee">￥{{money}}.00</span>
    </div>
    <!-- 支付方式 -->
    <div class="pay_method">
        <p class="title">选择支付方式</p>
        <p class="zhifubao">
            <img src="../../assets/zhifubao.png" alt="">
            <span>支付宝支付</span>
        </p>
        <p class="wechat">
            <img src="../../assets/weixin.png" alt="">
            <span>微信支付</span>
        </p>
    </div>
    <div class="submit">
        <div class="price">
            ￥{{money}}.00
        </div>
        <div class="submit_btn" @click="submitAction">
            提交订单
        </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import http from '../../api/http';
import {UPDATE_ORDER_STATE_API} from '../../api/url';
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState({
            info:state=>state.user.info,
            order:state=>state.order.order
        }),
        money(){
            return parseInt(this.order.detail.fee.substring(1));
        }
    },
    methods:{
        async backAction(){
            const result = await http.get(UPDATE_ORDER_STATE_API,
            {
                _id:this.order._id,
                state:1
            })
            console.log(result);
            this.$router.back();
        },
        async submitAction(){
            const result = await http.get(UPDATE_ORDER_STATE_API,
            {
                _id:this.order._id,
                state:2
            });
            if(result.data.code === 0){
                this.$toast('支付成功');
                this.$router.replace('/shouye');
            }else{
                this.$toast('支付失败');
            }
        }
    },
    created(){
        this.$store.dispatch('order/requestOrder',{
            user:this.info.username,
            state:0,
            tag:'order'
        })
    }
}
</script>

<style scoped lang="scss">
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
.vip_name{
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    border-top: 1Px solid #999;
    background-color: #fff;
    padding-left: 25px;
    font-size: 14px;
    line-height: 28px;
    padding-top: 10px;
}
.detail{
    width: 100%;
    height: 190px;
    box-sizing: border-box;
    padding: 20px 46px 37px 25px;
    background-color: #fff;
    border-top: 1Px solid #999;
    .top{
        font-size: 14px;
        margin-bottom: 30px;
        .title{
            color: #333;
        }
        .fee{
            color: red;
            float: right;
        }
    }
    p{
        line-height: 30px;
        color: #999;
        .iconfont{
            margin-right: 5px;
        }
    }
}
.coupon{
    width: 100%;
    height: 50px;
    border-top: 1Px solid #999;
    background-color: #fff;
    font-size: 13px;
    line-height: 50px;
    box-sizing: border-box;
    padding-left: 25px;
    display: flex;
    justify-content: space-between;
    span:nth-child(2){
        color: red;
        float: right;
        margin-left: 200px;
    }
    span:nth-child(3){
        margin-right: 20px;
        color: #999;
        font-weight: bold;
        zoom: 1.5;
        float: right;
    }
}
.money{
    width: 100%;
    height: 50px;
    border-top: 1Px solid #999;
    background-color: #fff;
    font-size: 13px;
    line-height: 50px;
    box-sizing: border-box;
    padding-left: 25px;
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    .fee{
        color: #ff0000;
    }
}
.pay_method{
    width: 100%;
    height: 190px;
    box-sizing: border-box;
    border-top: 1Px solid #999;
    background-color: #fff;
    padding-top: 20px;
    .title{
        font-size: 14px;
        color: #333;
        text-indent: 25px;
    }
    .zhifubao,.wechat{
        width: 100%;
        height: 45px;
        border-bottom: 1Px solid #999;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img{
            width: 32px;
            height: 30px;
            margin:0 15px 0 25px;
        }
    }
}
.submit{
    width: 100%;
    height: 80px;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1Px solid #999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        flex: 1;
        height: 100%;
        text-align: center;
        line-height: 80px;
        &.price{
            color: #ff0000;
            font-weight: bold;
            font-size: 14px;
        }
        &.submit_btn{
            font-size: 16px;
            color: #fff;
            background-color: rgba(16, 142, 233, 1);
        }
    }
}
</style>