import axios from "axios";
import qs from "qs";

//环境切换，测试 开发 生产环境的切换
axios.defaults.baseURL = '/zhihu';
//请求超时时间
axios.defaults.timeout = 10000;
//允许跨域携带cookie信息
//axios.defaults.withCredentials = true;
//post请求头
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//将对象序列化为URL形式
axios.defaults.transformRequest = data => qs.stringify(data);
//响应拦截器 也可以设定请求拦截器 譬如验证token
axios.interceptors.response.use(res => {
    return res.data;
});

export default axios;