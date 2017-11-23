<template>
  <div class="register">
    <div class="phoneWrap">
      <div class="importPhone" v-if="toggleShow == true">
        <span class="icon-smile"></span>
        <input type="number" placeholder="请输入手机号码" v-model="phoneNum">
      </div>
      <div class="btn">
        <a class="next" :class="bgc" aria-disabled="true" @click="message(bgc)">下一步</a>
      </div>
    </div>
    <div class="registerForm" v-if="toggleShow == false">
      <div class="importMsg">
        <span class="icon-smile"></span>
        <input type="text" v-model="phoneNum" disabled>
      </div>
      <div class="importMsg">
        <span class="icon-smile"></span>
        <input type="text" placeholder="图片验证码" v-model="imgCode">
      </div>
      <div class="importMsg">
        <span class="icon-smile"></span>
        <input type="text" placeholder="短信验证码" v-model="phoneCode">
        <input class="shotMsg" type="button" value="获取短信验证码">
      </div>
      <div class="importMsg">
        <span class="icon-smile"></span>
        <input type="text" placeholder="你的昵称/用户名" v-model="userName">
      </div>
      <div class="importMsg">
        <span class="icon-smile"></span>
        <input type="password" placeholder="请设置密码" v-model="password">
      </div>
      <div class="importMsg">
        <span class="icon-smile"></span>
        <input type="password" placeholder="请确认密码" v-model="confirmPwd">
      </div>
      <div class="btn">
        <a class="next" :class="bgc" aria-disabled="true" @click="message(bgc)">下一步</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui';
  export default {
    data () {
      return {
        bgc: '',
        phoneNum: '',
        imgCode: '',
        phoneCode: '',
        userName: '',
        password: '',
        confirmPwd: '',
        toggleShow: true
      }
    },
    methods: {
      message (bgc) {
        switch (bgc) {
          case 'warning':
            MessageBox('注意', '请输入正确的手机号码！')
            break
          case 'primary':
            this.toggleShow = false
        }
      }
    },
    watch: {
      phoneNum (data) {
        let reg = /^1[34578]\d{9}$/
        this.bgc = reg.test(data) ? 'primary' : (data != '' ? 'warning' : '')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .register
    position fixed
    top 0
    bottom 0
    width 100%
    background-color: #fff;
    z-index 255
    .phoneWrap
      position absolute
      left 0
      top 0
      z-index 5
      width 100%
      .importPhone
        width 100%
        height 45px
        padding 0 15px
        line-height 45px
        border-bottom 1px solid #ddd
        span
          color #999
          padding-right 10px
        input
          outline: none;
          -webkit-appearance: none;
          border-radius: 0;
        input:
        :-webkit-input-placeholder
          font-size 13px
          color #aaa

      .btn
        width 100%
        padding-top 30px
        text-align center
        .next
          display inline-block
          width 300px
          height 30px
          color white
          line-height 30px
          border-radius 20px
          background-color: #ccc;
        .primary
          background-color: green;
        .warning
          background-color: lightcoral;
    .registerForm
      position absolute
      left 0
      top 0
      z-index 10
      background-color: #fff;
      width 100%
      height 500px
      .importMsg
        height 45px
        width 100%
        line-height 45px
        padding 0 10px
        border-bottom 1px solid #ddd
        .shotMsg
          float right
          margin-top 10px
          background-color: lightsalmon;
          padding 3px 10px
          border-radius 10px
          color white
        input[disabled]
          background-color #fff
        span
          color #999
          padding-right 10px
        input
          outline: none;
          -webkit-appearance: none;
          border-radius: 0;
        input:
        :-webkit-input-placeholder
          font-size 13px
          color #aaa
      .btn
        width 100%
        padding-top 30px
        text-align center
        .next
          display inline-block
          width 300px
          height 30px
          color white
          line-height 30px
          border-radius 20px
          background-color: #ccc;
        .warning
          background-color: lightcoral;
</style>
