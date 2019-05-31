import axios from 'axios'
import { alert } from './digeo'


const instance  =  axios.create({
    baseURL: '',
    timeout: 6000,
    headers: {
        common:{
            Authorization: '234567fdf'
        }
    }
})

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    let code = response.data || response.data.code;
    if(response.status === 200){
        if(code === 1){
            return response.data
        }else{
            alert(response.data.msg || 'error')
        }
    }else{
        alert('网络错误')
    }
    //return response;
}, function (error) {
    return Promise.reject(error);
    //alert('服务器异常')
    //return false;
});

export default  instance;
