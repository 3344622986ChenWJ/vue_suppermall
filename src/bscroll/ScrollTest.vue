<template>
  <div class="wrapper" ref="refWrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  //引入
  import BScroll from 'better-scroll'

export default {
  name: "ScrollTest",
  data() {
    return {
      scroll: null
    }
  },
  //实现一个生命周期函数
  mounted() {
    this.scroll = new BScroll(this.$refs.refWrapper,{

    })
  },
  methods: {
    GoBackTop(x,y,time) {
      this.scroll.scrollTo(x,y,time);
    }
  }
}
</script>

<style scoped>

</style>
