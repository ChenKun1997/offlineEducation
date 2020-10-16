import http from '../../api/http';
import {GET_COURSE_API} from '../../api/url';
export default {
    namespaced:true,
    state:{
        courseList:{}
    },
    mutations:{
        setCourseList(state,payload){
            state.courseList = payload;
        }
    },
    actions:{
        async requestCourseList(context,payload){
            const result = await http.get(GET_COURSE_API);
            context.commit('setCourseList',result.data);
        }
    }
}