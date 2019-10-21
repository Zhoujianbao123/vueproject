<template>

  <div id="app">
    <transition name="fade">
      <!--内容-->
      <router-view></router-view>
      <!--购物车入口-->
    </transition>
    <router-view name="car"></router-view>
        <!--页脚-->
    <router-view name="footer"></router-view>

  </div>

</template>

<script>
import Header from '@/components/Header'
import Vue from 'vue'
import { List, Popup, Button, Search, Icon } from 'vant'
import axios from 'axios'
Vue.use(List);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Button);
export default {
  data (){
    return{
      show: false,
      activeName: '1',
      overlay: false,
      value: '',
    }
  }

}
</script>
<style lang="scss">
  @import '@/lib/reset.scss';

  html, body, #app{
    // width: 100%;height: 100%;
    @include rect(100%, 100%);
  }

  #app {
    @include flexbox();
    @include flex-direction(column);
  }

  //bounce(动画)
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  //3
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }

  //4 透明度
  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }


</style>
