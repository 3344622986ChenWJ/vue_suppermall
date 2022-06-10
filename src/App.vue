<template>
  <div id="app">
    <scroll ref="top" class="scroll-bar-content">
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
    </scroll>
    <!--监听组件的点击（其他事件也行）事件:@click.native-->
    <back-top @click.native="backTop()"></back-top>
  </div>
</template>

<script>
  import Scroll from "@/bscroll/ScrollTest";
  import BackTop from "@/bscroll/BackTop";

  export default {
    name: 'App',
    components: {
      Scroll,
      BackTop
    },
    methods: {
      backTop() {
        console.log('触发组件点击事件');
        //方法一
        //this.$refs.top:拿到这个组件(scroll)对象
        //this.$refs.top.scroll:访问这个组件里面的对象
        //this.$refs.top.scroll.scrollTo(0,0,500)//在500毫秒内返回顶部
        //方法二：调用组件(scroll)里面的方法，并传参
        this.$refs.top.GoBackTop(0,0,500);
      }
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  .scroll-bar-content {
    height: 300px;
    overflow: hidden;
  }
</style>
