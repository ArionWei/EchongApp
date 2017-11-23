<template>
  <div class="choice">
    <div class="choiceWrap">
      <div class="choiceHeader">
        <div @click="toggleShow(false)">
          <span class="icon-arrow_lift left"></span>
        </div>
        <div><span>选择收获地址</span></div>
        <div><span class="icon-home right"></span></div>
      </div>
      <div class="choiceAni">
        <mt-button size="small" :type="'猫猫站'==animal?'primary':'default'" @click="changeAni('猫猫站')">猫猫站</mt-button>
        <mt-button size="small" :type="'狗狗站'==animal?'primary':'default'" @click="changeAni('狗狗站')">狗狗站</mt-button>
        <mt-button size="small" :type="'水族馆'==animal?'primary':'default'" @click="changeAni('水族馆')">水族馆</mt-button>
      </div>
      <!--<div class="currentAddress">
        <span>当前地址：{{address.province+'  '+address.city+'  '+address.area}}</span>
      </div>-->
      <div class="choiceAddress">
        <v-distpicker type="mobile" province="北京市" city="市辖区" area="东城区" @selected="onSelected"></v-distpicker>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        address: {},
        animal: '狗狗站'
      }
    },

    props: {
      toggleShow: Function,
      toggleAnimal: Function
    },

    methods: {
      onSelected(data) {
        let address = {
          province: data.province.value,
          city: data.city.value,
          area: data.area.value
        }
        setTimeout(() => {
          this.toggleShow(false)
        },500)
        this.address = address
        PubSub.publish('setAddress', {province: data.province.value});
      },

      changeAni(animal){
        this.animal = animal
        this.toggleAnimal(animal)
        setTimeout(() => {
          this.toggleShow(false)
        }, 1000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .choice
    position fixed
    top 0
    bottom 0
    width 100%
    height 100%
    background-color: #eee;
    z-index 99
    .choiceWrap
      width 100%
      background-color: #fff;
      .choiceHeader
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
      .choiceAni
        text-align center
        height 50px
        line-height 50px
        background-color: #eee;
        .mint-button
          width 90px
          margin 0 10px
      .currentAddress
        padding 0 15px
        height 40px
        line-height 40px
        background-color lightgoldenrodyellow

      .choiceAddress
        position absolute
        top 100px
        bottom 0
        width 100%
        .address
          width 100%
          height 100%
          .address-container
            width 100%
            height 100%
            li
              color black
              height 50px
              line-height 40px
</style>
