<template>
    <section class="store">
        <Header>
            <div slot="left">
                <span class="iconfont icon-fenlei" @click="gokind"></span>
                <!--左侧弹出框-->
                <van-popup v-model="show" :overlay="true" position="left" :style="{ height: '100%',width:'50%'}" >
                    <div class="box">
                        <router-link to="/home" tag="span" @click="onClose">首页</router-link>
                        <router-link to="/all" tag="span" @click="onClose">全部商品</router-link>
                        <router-link to="/newshops"  tag="span" @click="onClose">新品</router-link>
                        <router-link to="/tries" tag="span" @click="onClose">男装</router-link>
                        <router-link to="/dress" tag="span" @click="onClose">女装</router-link>
                        <router-link to="/shoes" tag="span" @click="onClose">鞋履</router-link>
                        <router-link to="/sales" tag="span" @click="onClose">特惠</router-link>
                        <router-link to="/accessories" tag="span" @click="onClose">配饰</router-link>
                    </div>
                </van-popup>
            </div>
            <div slot="center">
                <!--输入框-->
                <div class="input">
                    <input type="text" placeholder="大家都在搜“玩转万圣节派对">
                </div>
            </div>
        </Header>
        <!--导航-->
        <div class="content">
            <ul class="nav">
                <router-link tag="li" to="store-recommend">推荐</router-link>
                <router-link tag="li" to="store-skincare">护肤</router-link>
                <router-link tag="li" to="store-cosmetics">彩妆</router-link>
            </ul>
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
import Header from '@/components/Header'
import Vue from 'vue'
import {List, Swipe, SwipeItem, Lazyload,  Popup, Button, Search, Icon } from 'vant'
Vue.use(List);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Button);
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
export default {
    data () {
        return {
            show: false,
            activeName: '1',
            overlay: false,
            value: ''

        }
    },
    methods: {
        gokind () {
            console.log('tanchu');
            this.show = true
        },
        onSearch () {
            console.log('搜索')
        },
        onClose () {
            console.log('关闭遮罩');
            this.show = false
        }
    },
    components: {
        Header
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
        margin-top: .05rem;
        input {
            @include rect(3.33rem, 0.29rem);
            background:rgba(248, 248, 248, 1) url(./../../../public/img/icons/search.png) no-repeat .1rem;
            background-size: .2rem;
            @include border-radius(0.05rem);
            border: 0;
        }
    }

    .store {
        @include rect(100%, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include overflow(auto);
        position:relative;
        /*.header {
            @include rect(100%, 0.45rem);
            @include background-color(rgba(248, 248, 248, 1));
            @include flexbox();
            @include justify-content(center);
            .input {
                @include background-color(#f8f8f8);
            }
            i img{
                @include rect(100%, 100%);
            }
            .icon-fenlei {
                position: relative;
                @include line-height();
                @include font-size(0.2rem);
            }

            .choice {
                @include rect(auto, 0.45rem);
                @include flexbox();
                @include justify-content(center);
                li {
                    @include margin(0.12rem);
                    @include font-size(0.16rem);
                    &.router-link-active {
                        @include color(red);
                    }
                }


            }
            .van-overlay {
                position: absolute;
                @include rect(100%, 100%);
                @include background-color(rgba(85,85,85,0.5))
            }
            .van-popup {
                @include rect(80%, 100%);
                @include background-color(#37393e);
                @include flexbox();
                @include flex-direction(column);
                position: absolute;
                left:0;
                @include color(#FFF);
                form {
                    .van-search {
                        height: 0.6rem;
                    }

                    .van-field {
                        height: 0.4rem;
                    }

                    .van-icon-search {
                        @include flexbox();
                    }

                    i::before {
                        height: 0.4rem;
                        line-height: 0.3rem;
                    }

                    .van-field__control {
                        height: 0.3rem;
                        line-height: 0.3rem;
                    }
                }
                .box {
                    @include rect(100%, 100%);
                    @include flexbox();
                    @include flex-direction(column);
                    margin-top:.2rem;
                    span {
                        @include display(block);
                        @include rect(100%, .4rem);
                        @include rect(100%, .4rem);
                        @include line-height(.4rem);
                        @include display(block);
                        padding-left: 15px;
                        border-bottom: .01rem solid #FFF;
                        &:nth-child(1) {
                            margin-top:.4rem;
                        }
                    }
                }
                .van-icon {
                    @include rect(90%, .4rem);
                    @include line-height(.4rem);
                    @include font-size(.16rem);
                }
            }
        }*/
        .content {
            .nav {
                @include flexbox();
                @include justify-content(space-around);
                @include background-color(#fff);
                @include text-align(center);
                padding:.1rem 0;
                li {
                    @include rect(.6rem, .2rem);
                    &.router-link-active {
                        @include color(red);
                        @include background-color(#f8f8f8);
                    }
                }
            }
        }

    }


</style>