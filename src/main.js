import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Swipe, SwipeItem, Button, Field} from 'mint-ui'
import '../static/css/reset.css'
import  './common/stylus/index.styl'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

new Vue({
  el: '#app',
  render: h => h(App),
  router  // 配置路由器
})
