<template>
    <van-popup
        v-model="show"
        :style="{ width: '100%',height: '100%' }"
    >
        <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <div class="boom">
            <img src="./../../../public/img/404.png" alt="">
        </div>
    </van-popup>
</template>
<script>
    import Vue from 'vue'
    import { NavBar, Popup } from 'vant'
    Vue.use(NavBar)
    Vue.use(Popup)
    export default {
        data () {
            return {
                show: true
            }
        },
        methods: {
            showPopup () {
                this.show = true
            },
            onClickLeft () {
                this.show = false
                this.$router.push('/home')
            },
            onClickRight () {
                console.log('确认')
                this.show = false
            }
        }
    }
</script>
<style lang="scss">
    @import '@/lib/reset.scss';
    .boom {
        margin-left: -150px;
        margin-top: 100px;
        @include flexbox();
        @include justify-content(center);
        @include text-align(center);
        img {
            @include display(block);
            width: 50%;
        }
    }
</style>
