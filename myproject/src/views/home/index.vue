<template>
    <section class="container">
        <router-view></router-view>
    </section>
</template>

<script>
import Vue from 'vue'
import { Popup, Button, Search, Icon } from 'vant'
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Button);
export default {
    data () {
        return {
            show: false,
            activeName: '1',
            overlay: true,
            value: ''
        }
    },
    methods: {
        gokind () {
            console.log('tanchu')
            this.show = true
        },
        onSearch () {
            console.log('搜索')
        },
        onClose () {
            console.log('关闭遮罩')
            this.show = false
        }
    }

}
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .input {
        @include rect(100%, 0.29rem);
        @include flexbox();
        @include justify-content(center);
        @include background-color(#fff);
        input {
            @include rect(3.33rem, 0.29rem);
            background:rgba(248, 248, 248, 1) url(./../../../public/img/icons/search.png) no-repeat .1rem;
            background-size: .2rem;
            @include border-radius(0.05rem);
            text-indent: .4rem;
            border: 0;
        }
    }

</style>
