<template>
  <div class="header">
    <div class="headerWrap">
      <div class="headerTop">
        <div class="left" @click="toggleShow(true)">
          <a class="option">
            <span>{{animal}}</span>
            <span>|</span>
            <span class="little">{{province}}</span>
            <span class="icon-triangle-down"></span>
          </a>
        </div>
        <div class="middle">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
        </div>
        <div class="right">
          <a href="javascript:;"><img src="./mydope.png"></a>
        </div>
      </div>
      <div class="headerBottom">
        <div class="nav">
          <ul class="navList">
            <li v-for="(menu,index) in home.menus" :key="index" :class="menuId===index?'active':''"
                @click="toggleMenuId(index)">
              <a href="javascript:;">
                <span>{{menu.menu_name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <choice :toggleShow="toggleShow" :toggleAnimal="toggleAnimal" v-show="isShow"></choice>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'
  import BScroll from 'better-scroll'
  import choice from '../../components/choice/choice.vue'
  export default {
    data(){
      return {
        isShow: false,
        province: '北京市',
        animal: '狗狗站',
        menuId: 0
      }
    },
    mounted(){
      let address = JSON.parse(localStorage.getItem("address_key") || '{}')
      if (address.province) {
        this.province = address.province
      }
      PubSub.subscribe('setAddress', (msg, data) => {
        this.province = data.province
      })

      this.$nextTick(function () {
        const wrapper = document.querySelector('.nav')
        const scroll = new BScroll(wrapper, {
          click: true,
          scrollX: true
        })
      })
    },
    methods: {
      toggleShow (isShow) {
        this.isShow = isShow
      },
      toggleAnimal(animal){
        this.animal = animal
      },
      toggleMenuId(index){
        this.menuId = index
      }
    },
    computed: {
      ...mapState(['home'])
    },
    components: {
      choice
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position relative
    width 100%
    height 86px
    overflow hidden
    .headerWrap
      position absolute
      width 100%
      height 100%
      background-color: #fff;
      z-index 15
      .headerTop
        display flex
        width 100%
        justify-content space-between
        padding 13px 10px 13px 10px
        text-align center
        & > .left
          padding-top 5px
          margin-right 10px
          font-size 14px
          & .little
            font-size 13px
          .icon-triangle-down
            font-size 12px

        & > .middle > input
          font-size 13px
          width 180px
          border 0
          height 25px
          background #e9e9e9
          border-radius 4px
          color #bcbcbc
          text-indent 10px
          outline 0
        & > .right
          margin-left 5px
          img
            width 25px
            height 25px

      .headerBottom
        width 100%
        position absolute
        overflow hidden
        .nav
          width: 100%
          overflow: hidden
          white-space: nowrap
          .navList
            width 525px
            font-size: 0;
            overflow hidden
            li
              width 75px
              line-height 36px
              height 36px
              text-align center
              float left
              span
                font-size: 14px;
                color #666;
              &.active span
                display inline-block
                color lightseagreen

</style>
