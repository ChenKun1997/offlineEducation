import Scroll from '../components/common/scroll'
import { Toast } from 'vant';
export default {
    install(Vue){
        // 滚动组件
        Vue.component('scroll',Scroll);
        Vue.use(Toast);
        Vue.mixin({
            
        })
        // 过滤器
        Vue.filter("formatter", (count, limit) => {
            if(count < 10000){
                return count;
            }else{
                const tmp = Math.ceil(count / (10000 / Math.pow(10, limit)));
                return tmp / Math.pow(10, limit) + "万";
            }
          
        });
    }
}