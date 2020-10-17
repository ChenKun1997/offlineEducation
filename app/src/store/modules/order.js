import http from '../../api/http';
import {GET_ORDER_API} from '../../api/url';
export default {
    namespaced:true,
    state:{
        order:{},//订单页最多只能有一个状态为0的订单
        waitToPay:[],
        learning:[],
        finished:[],
        refund:[]
    },
    mutations:{
        setOrder(state,payload){
            state.order = payload;
        },
        setWaitToPay(state,payload){
            state.waitToPay = payload;
        }
    },
    actions:{
        async requestOrder(context,payload){
            const result = await http.get(
                GET_ORDER_API,
                {
                    user:payload.user,
                    state:payload.state
                }
            )
            console.log(result);
            if(payload.tag === 'order'){
                context.commit('setOrder',result.data.data[0]);
            }else if(payload.tag === 'waitToPay'){
                context.commit('setWaitToPay',result.data.data);
            }
        },
    }
}