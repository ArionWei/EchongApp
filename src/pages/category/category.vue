<template>
  <transition name="moveFromRight">
    <div class="category">
      <div class="categoryWrap">
        <div class="categoryContainer">
          <ul class="categoryList" v-for="(item, index) in  category" :key="index">
            <div class="categoryTitle">
              <span>——</span>
              <span>{{item.title}}</span>
              <span>——</span>
            </div>
            <li class="categoryCon" v-for="(value,index) in item.list" :key="index">
              <div class="categoryImg">
                <img :src="value.logo">
              </div>
              <p class="categoryName">{{value.name}}</p>
              <p>{{value.address}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getCategory', () => {
        this.$nextTick(() => {
          const wrapper1 = document.querySelector('.categoryWrap')
          setTimeout(() => {
            this.scroll = new BScroll(wrapper1, {click: true})
          }, 100)
        })
      })
    },
    computed: {
      ...mapState(['category'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .moveFromRight-enter-active, .moveFromRight-leave-active
    transition: all .2s linear
  .moveFromRight-enter, .moveFromRight-leave-active
    opacity 0
    transform: translateX(100%)

  .category
    position absolute
    display flex
    width 100%
    top 40px
    bottom 45px
    background-color: #eee;
    .categoryWrap
      width 100%
      height 100%
      .categoryContainer
        width 100%
        .categoryList
          width 100%
          padding 0 8px
          margin 5px 0
          background-color: #fff;
          overflow hidden
          .categoryTitle
            text-align center
            height 50px
            line-height 50px
            span
              color #999
              font-size 12px
          .categoryCon
            float left
            width 33.333333%
            height 140px
            padding 0 5px
            .categoryImg
              text-align center
              width 100%
              height 70px
              border 1px solid #ccc
              padding 10px 0
              img
                height 40px
            p
              width 100px
              margin 10px 0 20px 0
              text-align center
              height 15px
              line-height 15px
              color #999
              font-size 12px
            p.categoryName
              text-align center
              color #333


</style>
