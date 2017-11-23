<template>
  <div class="user">
    <div class="userWrap">
      <div class="userHeader">
        <div class="top">
          <div>
            <router-link to="/home"><span class="icon-arrow_lift left"></span></router-link>
          </div>
          <div @click="showRegister"><span>注册</span></div>
        </div>
        <div class="middle">
          <img src="./logo.png" alt="">
        </div>
        <div class="bottom">
          <span @click="toggleShow(true)">普通用户登录</span>
          <span @click="toggleShow(false)">手机动态密码登录</span>
        </div>
      </div>
      <div class="userForm">
        <div class="userLogin" v-show="toggle==true">
          <span class="icon-triangle-down"></span>
          <mt-field label="用户名" placeholder="请输入用户名/邮箱/手机号"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
          <p><a href="Javascript:;">忘记密码？</a></p>
          <mt-button size="large" type="primary">登&nbsp;&nbsp;&nbsp;录</mt-button>
        </div>
        <div class="phoneLogin userLogin" v-show="toggle==false">
          <span class="icon-triangle-down"></span>
          <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
          <mt-field label="验证码" placeholder="请输入图片内容" type="password"></mt-field>
          <mt-field label="动态密码" placeholder="动态密码" type="password"></mt-field>
          <mt-button size="large" type="primary">登&nbsp;&nbsp;&nbsp;录</mt-button>
        </div>
      </div>
      <div class="other-login">
        <p>合作网站登录</p>
        <ul class="other">
          <li><a href="Javascript:;"><img src="./login_ico4.png"></a></li>
          <li><a href="Javascript:;"><img src="./login_ico2.png"></a></li>
        </ul>
      </div>
    </div>
    <register v-show="register"></register>
  </div>
</template>

<script>
  import register from '../../components/register/register.vue'
  export default {
    data () {
      return {
        toggle: true,
        register: false
      }
    },
    methods: {
      toggleShow(toggle){
        this.toggle = toggle
      },
      showRegister(){
        this.register = !this.register
      }
    },
    components: {
      register
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .user
    position fixed
    top 0
    bottom 0
    width 100%
    height 100%
    background-color: #eee;
    z-index 222
    .userWrap
      width 100%
      background-color: #fff;
      .userHeader
        position relative
        width 100%
        height 180px
        border-bottom 1px solid #eee
        background-image: url('./bg.png');
        background-size: 100% 100%;
        .top
          display flex
          justify-content space-between
          padding 10px
          width 100%
          height 50px
          span
            color #fff
        .middle
          width 100%
          text-align center
          img
            width 80px
        .bottom
          position absolute
          width 100%
          bottom 0
          height 45px
          background-color rgba(255, 255, 255, 0.3)
          span
            display inline-block
            width 49%
            text-align center
            line-height 45px
            color #fff

      .userForm
        width 100%
        padding 0 20px
        .userLogin
          overflow hidden
          margin-top -10px

          .mint-cell-wrapper
            border-bottom 1px solid #eee
            input:
            :-webkit-input-placeholder
              font-size 13px
              color #aaa
          span.icon-triangle-down
            display inline-block
            width 50%
            text-align center
            transform rotate(180deg)
            color white
          p
            float right
            margin 15px 0 0 15px
          .mint-button
            margin-top 50px

        .phoneLogin
          width 100%
          .mint-button
            margin-top 20px
          span.icon-triangle-down
            display inline-block
            width 75%
            text-align left
            transform rotate(180deg)
            color white

      .other-login
        margin-top 60px
        width 100%
        height 110px
        p
          width 100%
          text-align center
          color #7e8c8d
          font-size 14px
        ul
          display flex
          justify-content space-around
          margin-top 30px
          width 100%
          li img
            width 60px
</style>
