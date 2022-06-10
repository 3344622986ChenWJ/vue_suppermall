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
  //调用这个组件时传的参数
  props: {
    probeTypeGo: {//注意这里是驼峰，前面调用传参的时候就得是  :probe-type-go
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  //实现一个生命周期函数
  mounted() {
    //1.创建插件对象scroll
    this.scroll = new BScroll(this.$refs.refWrapper,{
      //注意，利用better-scroll滚动组件时，里面的点击事件需要加上这个属性
      click: true,
      //根据外界调用本组件时传的参数来是否实现实时监听
      probeType: this.probeTypeGo
    })
    //2.实时监听滚动位置
    this.scroll.on('scroll',position => {
      //console.log(position)
      //3.子组件自定义事件，对外传递
      this.$emit('ToEven',position);
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
