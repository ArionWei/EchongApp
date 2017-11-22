<template>
  <div class="classify">
    <div class="classifyHeader">
      <div class="classy">
        <div class="brand">
          <router-link to="/classify/brand">分类</router-link>
        </div>
        <div class="brand">
          <router-link to="/classify/category">品牌</router-link>
        </div>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classify
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background-color: #fff;
    z-index 33
    .classifyHeader
      position absolute
      top 0
      width 100%
      height 40px
      padding 0 80px
      background-color: #fff;
      border-bottom 1px solid #aaa
      z-index 99
      .classy
        display flex
        width 100%
        height 100%
        justify-content space-around
        .brand
          height 100%
          width 50%
          text-align center
          line-height 40px
          a
            display inline-block
            width 40px
            font-size 14px
            font-weight bold
            color black
          a.router-link-active
            height 99.5%
            color red
            border-bottom solid 2px red
</style>
