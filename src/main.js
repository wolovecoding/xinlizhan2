import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue,IconsPlugin} from "bootstrap-vue";
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'
import axios from "axios";
// Import Bootstrap an BootstrapVue CSS files (order is important)
//我认为这两个文件应该是上面两个插件要用到，所以才这样导入
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.timeout = 600000//请求超过1分钟
//axios设置头部token
axios.interceptors.request.use(
    config=>{
       // config.headers['Access-control-Allow-origin']='*'
        //localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjE4NDgxMDksImlkIjo1MSwibmJmIjoxNjIxODQ4MTA5fQ.J6VhkTuGPah9iahMN6ehRvbW0vMAck0ASk5pbtOn-lo")

        let token= localStorage.getItem('Token')
      if (token){
        config.headers.token = token
      }
      return config
    }
)

//重复路径爆红


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
