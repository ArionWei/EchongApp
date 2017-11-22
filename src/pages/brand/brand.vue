<template>
  <div class="brands">
    <div class="menu-wrapper">
      <ul>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
        <li>
          <span>为您推荐</span>
        </li>
      </ul>
    </div>
    <div class="detail-list">
      <div class="detail-wrap">
        <div class="detail-brand common">
          <div class="title">
            <span>狗狗生活</span>
            <img src="./cate_right_img.png">
          </div>
          <div class="detail">
            <ul>
              <li>
                <img src="./f1.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./f2.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./f3.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./f4.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./f5.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./f6.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./f7.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="trademark common">
          <div class="title">
            <span>热门品牌</span>
          </div>
          <div class="detail">
            <ul>
              <li>
                <img src="./e1.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./e2.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./e3.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./e4.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./e5.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./e6.png" alt="">
                <p>狗狗餐具</p>
              </li>
              <li>
                <img src="./e7.jpg" alt="">
                <p>狗狗餐具</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$nextTick(function () {
        const wrapper1 = document.querySelector('.menu-wrapper')
        const wrapper2 = document.querySelector('.detail-list')
        setTimeout(function () {
          new BScroll(wrapper1, {click: true})
          new BScroll(wrapper2, {click: true})
        }, 200)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brands
    position absolute
    display flex
    width 100%
    top 40px
    bottom 45px
    background-color: #eee;
    .menu-wrapper
      flex 0 0 70px
      li
        height 50px
        line-height 50px
        text-align center
        background-color: #fff;
        margin-top 1px
        span
          font-size 13px
    .detail-list
      position absolute
      height 100%
      right 0
      left 73px
      background-color: #fff;
      .detail-wrap
        padding 15px 5px
        .common
          width 100%
          border-bottom 1px solid #eee
          .title
            padding-top 15px
            padding-left 5px
            width 100%
            & > span
              font-size 13px
              color #999
            img
              width 46px
              float right
              margin-top 5px
          .detail
            padding 15px 0
            ul
              overflow hidden
              li
                width 33.3333333%
                float left
                padding 5px
                img
                  width 100%
                p
                  margin-top 10px
                  width 100%
                  text-align center
                  font-size 12px

        .trademark > .detail > ul > li
          width 50%
</style>
