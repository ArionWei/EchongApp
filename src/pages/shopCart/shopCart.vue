<template>
  <div class="shopCart" v-show="isShow">
    <div class="cartWrap">
      <div class="cartHeader">
        <div> <router-link to="/home"><span class="icon-arrow_lift left"></span></router-link></div>
        <div><span>购物车</span></div>
        <div><span class="icon-home right"></span></div>
      </div>
      <div class="CartBox">
        <div class="emtcoupon">
          <span class="icon-cart"></span>
        </div>
        <div class="emttip">
          <span>购物车是空的</span>
        </div>
        <div class="emta">
          <router-link to="/home">去逛逛</router-link>
          <router-link to="/user">我的收藏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopCart
    position fixed
    top 0
    bottom 0
    width 100%
    height 100%
    background-color: #eee;
    z-index 999
    .cartWrap
      width 100%
      background-color: #fff;
      .cartHeader
        display flex
        justify-content space-between
        width 100%
        height 50px
        line-height 30px
        padding 10px 10px
        border-bottom 1px solid #eee
        span
          font-size 18px
          color #666

      .CartBox
        width 100%
        padding 50px 0
        .emtcoupon
          width 100%
          text-align center
          & > span
            font-size 100px
            color #ccc
        .emttip
          margin-top 20px
          text-align center
          & > span
            font-size 16px
            color #ccc
        .emta
          padding-top 20px
          width 100%
          text-align center
          a
            display: inline-block;
            text-align center
            border-radius: 5px;
            border: 1px solid #999;
            height: 40px;
            line-height: 40px;
            width: 100px;
</style>
