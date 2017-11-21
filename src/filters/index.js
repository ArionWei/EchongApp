import Vue from 'vue'
import moment from 'moment'
// import {format} from 'date-fns'

// 注册全局过滤器
Vue.filter('date-string', function (value) { // 被处理的时间值
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
  // return format(value, 'YYYY-MM-DD HH:mm:ss')
})