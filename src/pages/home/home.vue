<template>
  <div class="home">
    <div class="home_warp">
      <div class="container">
        <div class="carousel">
          <mt-swipe :auto="3000" v-if="home.datas">
            <!--{{home}}-->
            <mt-swipe-item v-for="(item,index) in home.datas[0].value" :key="index">
              <img :src="item.image">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <split></split>
        <div class="classification" v-if="home.datas">
          <ul class="brandList1">
            <li v-for="(menu,index) in home.datas[1].menus" :key="index">
              <a :href="menu.target">
                <img :src="menu.image">
              </a>
            </li>
          </ul>
        </div>
        <split></split>
        <!--每日疯抢-->
        <div class="surprise_day">
          <div class="surprise_title">
            <div class="titimg"><img src="./suprice.png"></div>
            <div class="time">距离下一场：
              <count-down :currentTime="1481450110" :startTime="1481450110" :endTime="1481455555"
                          :hourTxt="':'" :minutesTxt="':'"
                          :secondsTxt="''"></count-down>
            </div>
            <div class="more"><img src="./more1.png"></div>
          </div>
          <div class="surprise-pro">
            <ul class="swiper-wrapper">
              <li>
                <a href="javascript:;">
                  <div class="surpImg">
                    <img src="./p1.jpg">
                  </div>
                  <div class="price">
                    <p class="current">￥ 0.1</p>
                    <p class="oldPrice">省 ￥ 14.99</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="surpImg">
                    <img src="./p2.jpg">
                  </div>
                  <div class="price">
                    <p class="current">￥ 0.1</p>
                    <p class="oldPrice">省 ￥ 14.99</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="surpImg">
                    <img src="./p3.jpg">
                  </div>
                  <div class="price">
                    <p class="current">￥ 0.1</p>
                    <p class="oldPrice">省 ￥ 14.99</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="surpImg">
                    <img src="./p2.jpg">
                  </div>
                  <div class="price">
                    <p class="current">￥ 0.1</p>
                    <p class="oldPrice">省 ￥ 14.99</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="surpImg">
                    <img src="./p1.jpg">
                  </div>
                  <div class="price">
                    <p class="current">￥ 0.1</p>
                    <p class="oldPrice">省 ￥ 14.99</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="surpImg">
                    <img src="./p3.jpg">
                  </div>
                  <div class="price">
                    <p class="current">￥ 0.1</p>
                    <p class="oldPrice">省 ￥ 14.99</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="surpImg">
                    <img src="./p2.jpg">
                  </div>
                  <div class="price">
                    <p class="current">￥ 0.1</p>
                    <p class="oldPrice">省 ￥ 14.99</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--热门栏目-->
        <div class="currency" v-if="home.datas">
          <div class="currencyImg">
            <img src="./curreny1.jpg">
          </div>
          <div class="divimg">
            <div class="b1"><img :src="home.datas[2].content_images[0].image"></div>
            <div class="b2">
              <img :src="home.datas[2].content_images[1].image">
              <img :src="home.datas[2].content_images[2].image">
            </div>
          </div>
        </div>
        <split></split>
        <!--潮品视频-->
        <div class="custom" v-if="home.datas">
          <div class="titmoudle">
            <img src="./c2.png" alt="">
            <a href="javascript:;"><img class="more" src="./more1.png"></a>
          </div>
          <div class="fashion">
            <div class="cmVideoList">
              <a :href="home.datas[3].link">
                <img :src="home.datas[3].content_images">
              </a>
            </div>
            <div class="content">
              <p>{{home.datas[3].title}}</p>
              <span class="icon-eye"></span>
              <span> {{home.datas[3].visited}} </span>
              <span class="ml10 mr10"> | </span>
              <span> {{home.datas[3].time}} </span>
            </div>
          </div>
        </div>
        <split></split>
        <!--体验馆-->
        <div class="custom" v-if="home.datas">
          <div class="titmoudle">
            <img src="./c3.png" alt="">
            <a href="javascript:;"><img class="more" src="./more1.png"></a>
          </div>
          <div class="fashion">
            <div class="cmVideoList">
              <img :src="home.datas[4].content_images">
            </div>
          </div>
        </div>
        <split></split>
        <!--品牌特卖-->
        <div class="custom" v-if="home.datas">
          <div class="titmoudle border">
            <img src="./c4.png" alt="">
            <a href="javascript:;"><img class="more" src="./more1.png"></a>
          </div>
          <div class="singlediv" v-for="(item,index) in home.datas[5].content" :key="index">
            <div class="soleImg">
              <p>
                <span class="p1">{{item.title}}</span>
                <span class="p2">{{item.sub_title}}</span>
              </p>
            </div>
            <img :src="item.content_images" alt="">
          </div>
        </div>
        <!--口碑评价-->
        <div class="judgediv" v-if="home.datas">
          <div class="judgedivTit">
            <img src="./c5.png" alt="">
            <p>
              <span>{{home.datas[6].right_text}}</span>
              <span></span>
            </p>
          </div>
          <div class="judgedivLis">
            <ul>
              <li v-for="(item,index) in home.datas[6].list" :key="index">
                <div class="judgeImg">
                  <img :src="item.main_image">
                  <div class="judgeMask">{{item.join_time}}</div>
                </div>
                <div class="judgeContent">
                  <div class="name">
                    <span class="username">{{item.username}}</span>
                    <span class="pet-name">{{item.pet_des}}</span>
                  </div>
                  <p>{{item.comment_content}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="wap-footer-bar">
          <div class="footerBar">
            <div class="ft">
              <span class="bt" title="触屏版">触屏版</span>
              <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
              <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
              <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
            </div>
            <div class="copy">© wap.epet.com 版权：重庆易宠科技有限公司</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CountDown from 'vue2-countdown'
  import BScroll from 'better-scroll'
  import split from '../../components/split/split.vue'

  export default {
    mounted(){
      this.$store.dispatch('getHome', () => {
        this.$nextTick(function () {
          const wrapper1 = document.querySelector('.home_warp')
          const wrapper2 = document.querySelector('.surprise-pro')

          setTimeout(() => {
            new BScroll(wrapper1, {click: true, swipeTime: 1000})
            new BScroll(wrapper2, {scrollX: true, click: true})
          }, 500)
        })
      })
    },
    computed: {
      ...mapState(['home']),
    },
    components: {
      split,
      CountDown
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    position: absolute
    top: 86px
    bottom: 45px
    width: 100%
    .home_warp
      width 100%
      height 100%
      overflow: hidden
      .container
        width 100%
        padding-bottom 20px
        .carousel
          width 100%
          height 160px
          overflow hidden
          img
            width 100%
        .classification
          width 100%
          ul
            width 100%
            overflow hidden
            li
              width 25%
              float left
              img
                width 100%

        .surprise_day
          position relative
          width 100%
          .surprise_title
            display flex
            padding 10px 5px
            .titimg
              margin-left -10px
              img
                width 105px
            .time
              display flex
              margin 4px 0 0 30px
              font-size 14px
            .more
              position absolute
              top 0
              right 0
              img
                width 67px
          .surprise-pro
            width 100%
            .swiper-wrapper
              display flex
              padding 5px
              width 200%
              li
                width 28%
                height 115px
                padding 0 15px
                margin-bottom 10px
                float left
                text-align center
                img
                  width 70px
                  margin-bottom 10px
                .current
                  color red
                  margin-bottom 5px
                .oldPrice
                  font-size 12px
        .currency
          width 100%
          .currencyImg
            width 100%
            img
              width 100%
          .divimg
            width 100%
            overflow hidden
            div
              float left
            .b1
              width 42.5%
            .b1 > img
              width 100%
            .b2
              width 57.5%
            .b2 > img
              display block
              width 100%

        .custom
          position relative
          width 100%
          .titmoudle
            text-align center
            img
              width 187px
            & > a
              display inline-block
              position absolute
              width 66px
              right 0
              top 8px
              .more
                width 66px
          .border
            border-bottom 1px solid #eee

          .fashion
            width 100%
            img
              width 100%
            .content
              padding 10px
              text-align center
              font-size 12px
              p
                height 25px
                line-height 20px
              span
                padding-left 4px
                color #999
          .singlediv
            width 100%
            p
              padding 10px
              .p1
                font-size 14px
              .p2
                font-size 12px
                color #999
            img
              width 100%
        .judgediv
          width 100%
          .judgedivTit
            position relative
            width 100%
            text-align center
            img
              width 160px
            p
              position absolute
              top 20px
              right 0
              font-size 10px
              color #7e8c8d
          .judgedivLis
            width 100%
            ul
              width 100%
              overflow hidden
              padding-bottom 10px
              li
                padding 10px
                width 50%
                height 380px
                float left
                background: #f5f5f5;
                overflow hidden
                .judgeImg
                  position relative
                  width 100%
                  .judgeMask
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height 20px
                    background: rgba(0, 0, 0, .4);
                    color white
                    text-align center
                    font-size 12px
                    line-height 20px
                  img
                    width 100%
                .judgeContent
                  padding-top 5px
                  position relative
                  .name > .pet-name
                    position absolute
                    right 0
                    top 5px
                    font-size 12px
                    height 20px
                    line-height 20px
                    background: #ddd;
                    border-radius: 5px;
                    padding: 0 5px;
                  .username
                    font-size 12px
                    height 20px
                    line-height 20px
                  p
                    padding-top 8px
                    height 90px
                    line-height 20px
                    font-size 12px
                    color #7e8c8d
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;
                    overflow hidden
        .wap-footer-bar
          width 100%
          height 60px
          .ft
            padding 20px
            width 100%
            text-align center
            font-size 14px
            span > a
              padding 5px
              color #000
            .bt
              color red
          .copy
            width 100%
            text-align center
            font-size 12px
</style>
