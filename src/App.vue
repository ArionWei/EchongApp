<template>
  <div id="app">
    <app-header></app-header>
    <div class="wrap">
      <router-view></router-view>
    </div>
    <div class="footer">
      <ul class="footerNav">
        <router-link :to="route.path" v-for="(route,index) in routes" :key="index">
          <li class="option">
            <p :class="route.icon"></p>
            <span>{{route.title}}</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default {
    data () {
      return {
        routes: [
          {icon: 'icon-home', path: '/home', title: '首页'},
          {icon: 'icon-list', path: '/classify', title: '分类'},
          {icon: 'icon-cart', path: '/shopCart', title: '购物车'},
          {icon: 'icon-smile', path: '/user', title: '我的E宠'},
        ]
      }
    },
    methods: {},
    components: {
      "app-header": header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    max-width 640px
    margin auto
    height 100%
    position relative
    overflow hidden
    .wrap
      position: absolute
      top: 86px
      bottom: 45px
      width: 100%
    .footer
      width 100%
      height 45px
      position: absolute;
      bottom: 0;
      left: 0;
      border-top: 1px solid #e7e7e7;
      background-color: #fff;
      z-index: 555;
      .footerNav
        overflow hidden
        height 100%
        a
          display block
          width 25%
          height 100%
          float left
          text-align center
          li
            padding-top 5px
            height 100%
            p
              font-size 20px
            span
              font-size 13px
        .router-link-active li
          height 100%
          & p, & span
            color green


</style>
