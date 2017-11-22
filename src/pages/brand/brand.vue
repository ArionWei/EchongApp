<template>
  <div class="brands">
    <div class="menu-wrapper">
      <ul>
        <li :class="{active:classifyId == index}" v-for="(classy,index) in classify" :key="index"
            @click="toggleClaId(index)">
          <span>{{classy.name}}</span>
        </li>
      </ul>
    </div>
    <div class="detail-list">
      <div class="detail-wrap" v-for="(classy,index) in classify" v-if="classifyId == index" :key="index">
        <div class="detail-brand common">
          <div class="title">
            <span>{{classy.category[0].name}}</span>
            <img src="./cate_right_img.png">
          </div>
          <div class="detail" v-if="classy.category[0]">
            <ul>
              <li v-for="(item,index) in classy.category[0].items" :key="index">
                <img :src="item.image">
                <p>{{item.itemName}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="trademark common" v-if="classy.category[1]">
          <div class="title">
            <span>{{classy.category[1].name}}</span>
          </div>
          <div class="detail">
            <ul>
              <li v-for="(item,index) in classy.category[1].items" :key="index">
                <img :src="item.image">
                <p>{{item.itemName}}</p>
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
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        classifyId: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        const wrapper1 = document.querySelector('.menu-wrapper')
        setTimeout(() => {
          this.scroll = new BScroll(wrapper1, {click: true})
        }, 100)
      })
    },
    methods: {
      toggleClaId(index){
        this.classifyId = index
        this.$nextTick(() => {
          const wrapper2 = document.querySelector('.detail-list')
          setTimeout(() => {
            this.scroll.refresh()
            new BScroll(wrapper2, {click: true})
          }, 10)
        })
      }
    },
    computed: {
      ...mapState(['classify'])
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
      .active
        color red
        background-color: #eee;
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
                height 130px
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
          height 120px
</style>
