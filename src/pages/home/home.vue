<template>
  <div class="home">
    <div class="home_warp">
      <div class="container">
        <div class="carousel">
          <mt-swipe :auto="3000">
            <mt-swipe-item><img src="./caro1.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./caro2.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./caro3.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./caro4.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./caro5.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./caro6.jpg"></mt-swipe-item>
          </mt-swipe>
        </div>
        <split></split>
        <div class="classification">
          <ul class="brandList1">
            <li><a href="javascript:;"><img src="./nav1.png"></a></li>
            <li><a href="javascript:;"><img src="./nav2.png"></a></li>
            <li><a href="javascript:;"><img src="./nav3.png"></a></li>
            <li><a href="javascript:;"><img src="./nav4.png"></a></li>
          </ul>
          <ul class="brandList2">
            <li><a href="javascript:;"><img src="./nav5.jpg"></a></li>
            <li><a href="javascript:;"><img src="./nav6.png"></a></li>
            <li><a href="javascript:;"><img src="./nav7.jpg"></a></li>
            <li><a href="javascript:;"><img src="./nav8.png"></a></li>
          </ul>
        </div>
        <split></split>
        <!--每日疯抢-->
        <div class="surprise_day">
          <div class="surprise_title">
            <div class="titimg"><img src="./suprice.png"></div>
            <div class="time">距离下一场：12: 10: 55</div>
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
        <div class="currency">
          <div class="currencyImg">
            <img src="./curreny1.jpg" alt="">
          </div>
          <div class="divimg">
            <div class="b1"><img src="./b1.jpg"></div>
            <div class="b2">
              <img src="./b2.png">
              <img src="./b2.png">
            </div>
          </div>
        </div>
        <split></split>
        <!--潮品视频-->
        <div class="custom">
          <div class="titmoudle">
            <img src="./c2.png" alt="">
            <a href="javascript:;"><img class="more" src="./more1.png"></a>
          </div>
          <div class="fashion">
            <div class="cmVideoList">
              <img src="./d1.jpg" alt="">
            </div>
            <div class="content">
              <p>夜空中最亮的星</p>
              <span class="icon-eye"></span>
              <span> 7397 </span>
              <span class="ml10 mr10"> | </span>
              <span> 02:20 </span>
            </div>
          </div>
        </div>
        <split></split>
        <!--体验馆-->
        <div class="custom">
          <div class="titmoudle">
            <img src="./c3.png" alt="">
            <a href="javascript:;"><img class="more" src="./more1.png"></a>
          </div>
          <div class="fashion">
            <div class="cmVideoList">
              <img src="./d2.jpg" alt="">
            </div>
          </div>
        </div>
        <split></split>
        <!--品牌特卖-->
        <div class="custom">
          <div class="titmoudle border">
            <img src="./c4.png" alt="">
            <a href="javascript:;"><img class="more" src="./more1.png"></a>
          </div>
          <div class="singlediv">
            <div class="soleImg">
              <p>
                <span class="p1">谷登新品</span>
                <span class="p2">5折限量</span>
              </p>
            </div>
            <img src="./d4.jpg" alt="">
          </div>
          <div class="singlediv">
            <div class="soleImg">
              <p>
                <span class="p1">谷登新品</span>
                <span class="p2">5折限量</span>
              </p>
            </div>
            <img src="./d5.jpg" alt="">
          </div>
          <div class="singlediv">
            <div class="soleImg">
              <p>
                <span class="p1">谷登新品</span>
                <span class="p2">5折限量</span>
              </p>
            </div>
            <img src="./d6.jpg" alt="">
          </div>
          <div class="singlediv">
            <div class="soleImg">
              <p>
                <span class="p1">谷登新品</span>
                <span class="p2">5折限量</span>
              </p>
            </div>
            <img src="./d7.jpg" alt="">
          </div>
        </div>
        <!--口碑评价-->
        <div class="judgediv">
          <div class="judgedivTit">
            <img src="./c5.png" alt="">
            <p>
              <span>好评率99.99%</span>
              <span></span>
            </p>
          </div>
          <div class="judgedivLis">
            <ul>
              <li>
                <div class="judgeImg">
                  <img src="./z1.jpg" alt="">
                  <div class="judgeMask">加入E宠2年2个月</div>
                </div>
                <div class="judgeContent">
                  <div class="name">
                    <span class="username">鲍***美</span>
                    <span class="pet-name">博美</span>
                  </div>
                  <p>快递费哈师大浩丰，科技阿达是否贷款是否会，收到卡积分换大法师打发空间撒，都会返回发的时刻发挥</p>
                </div>
              </li>
              <li>
                <div class="judgeImg">
                  <img src="./z2.jpg" alt="">
                  <div class="judgeMask">加入E宠2年2个月</div>
                </div>
                <div class="judgeContent">
                  <div class="name">
                    <span class="username">鲍***美</span>
                    <span class="pet-name">博美</span>
                  </div>
                  <p>快递费哈师大浩丰，科技阿达是否贷款是否会，收到卡积分换大法师打发空间撒，都会返回发的时刻发挥</p>
                </div>
              </li>
              <li>
                <div class="judgeImg">
                  <img src="./z3.jpg" alt="">
                  <div class="judgeMask">加入E宠2年2个月</div>
                </div>
                <div class="judgeContent">
                  <div class="name">
                    <span class="username">鲍***美</span>
                    <span class="pet-name">博美</span>
                  </div>
                  <p>快递费哈师大浩丰，科技阿达是否贷款是否会，收到卡积分换大法师打发空间撒，都会返回发的时刻发挥</p>
                </div>
              </li>
              <li>
                <div class="judgeImg">
                  <img src="./z4.jpg" alt="">
                  <div class="judgeMask">加入E宠2年2个月</div>
                </div>
                <div class="judgeContent">
                  <div class="name">
                    <span class="username">鲍***美</span>
                    <span class="pet-name">博美</span>
                  </div>
                  <p>快递费哈师大浩丰，科技阿达是否贷款是否会，收到卡积分换大法师打发空间撒，都会返回发的时刻发挥</p>
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
  import BScroll from 'better-scroll'
  import split from '../../components/split/split.vue'
  export default {
    mounted(){
      this.$nextTick(function () {
        const wrapper1 = document.querySelector('.home_warp')
        const scroll1 = new BScroll(wrapper1, {
          click: true
        })
        const wrapper2 = document.querySelector('.surprise-pro')
        const scroll2 = new BScroll(wrapper2, {
          scrollX: true,
          click: true
        })
      })
    },
    components: {
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    width 100%
    height 100%
    overflow hidden
    .home_warp
      width 100%
      height 100%
      .container
        width 100%
        height 3000px
        .carousel
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
              margin 4px 0 0 10px
              font-size 14px
            .more
              position absolute
              top 0
              right 0
              img
                width 67px
          .surprise-pro
            width 100%
            padding 5px
            overflow hidden
            .swiper-wrapper
              padding 5px
              width 200%
              li
                width 70px
                height 115px
                margin 0 15px
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
                    height 60px
                    line-height 20px
                    font-size 12px
                    color #7e8c8d
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
