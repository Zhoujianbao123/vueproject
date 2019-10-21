<template>
    <section class="content-nearby">
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
                <ul class="choice">
                    <router-link to="/home/concern" tag="li">关注</router-link>
                    <router-link to="/home/find" tag="li">发现</router-link>
                    <router-link to="/home/nearby" tag="li">附近</router-link>
                </ul>
            </div>
        </Header>
        <!--输入框-->
        <div class="input">
            <input type="text" placeholder="大家都在搜“玩转万圣节派对">
        </div>
        <!--商品列表-->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="list">
            <li v-for="(item, index) in prolist" :key="item.id">
                <img :src="item.images.small" class="show"/>
                <h4>{{ item.title }}</h4>
                <div class="content-b">
                    <div class="content-b-l">
                        <img src="./../../../public/img/head.png"/>
                        <span>AI-fisher</span>
                    </div>
                    <div class="content-b-r">
                        <span>点赞</span>
                    </div>
                </div>
            </li>
        </van-list>

    </section>
</template>

<script>
import Header from '@/components/Header'
import Vue from 'vue'
import { List, Popup, Button, Search, Icon  } from 'vant'
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Button);
import axios from'axios';
export default {
    data () {
        return {
            show: false,
            activeName: '1',
            overlay: false,
            value: '',

            prolist: [],
            pageCode: 1,
            loading: false,
            finished: false
        }
    },
    mounted () {
        axios.get('/api/douban').then(res => {
            this.prolist = res.data;
        })
    },
    methods: {
        onLoad () {
            this.loading = true;// 表示可以加载数据了
            axios.get('https://www.daxunxun.com/douban?count=20&start=' + this.pageCode * 20).then(res => {
                this.loading = false; // 表示本次请求已经结束
                this.pageCode++; // 表示页码 +1
                if (res.data.length === 0) {
                    this.finished = true // 表示所有的数据都已加载完毕了
                } else {
                    this.prolist = [...this.prolist, ...res.data]
                }
            })
        },
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
    },
    components: {
        Header
    }
}
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .container{
        @include flexbox();
        @include flex-direction(column);
        @include flex();
        @include rect(100%, auto);
        .content-nearby{
            position:relative;
            @include flex();
            @include rect(100%, 100%);
            @include flexbox();
            @include flex-direction(column);
            @include overflow(auto);
            .list {
                @include flexbox();
                @include justify-content(space-around);
                @include flex-wrap(wrap);
                @include rect(100%,100%);
                margin-top: .05rem;
                li {
                    @include flexbox();
                    @include rect(1.75rem, auto);
                    @include flex-direction(column);
                    border-bottom: 1px solid rgba(187, 187, 187, 1);
                    @include padding(.1rem 0);
                    .show {
                        @include rect(1.75rem, 2.14rem);
                    }
                    h4 {
                        margin:.2rem 0;
                        @include color(rgba(140, 140, 140, 1));
                    }
                    .content-b {
                        @include flexbox();
                        @include justify-content(space-between);
                        .content-b-l {
                            @include rect(1.1rem, 100%);
                            @include flexbox();
                            @include justify-content(space-between);
                            @include align-items(center);
                            img {
                                @include rect(.44rem, .44rem);
                                @include border-radius(50%);
                            }
                        }
                        .content-b-r {
                            @include flexbox();
                            @include align-items(center);
                            span {
                                @include display(block);
                                @include rect(0.41rem, 0.3rem);
                                @include font-size(0.14rem);
                                @include line-height(0.3rem);
                                @include text-align(center);
                                @include color(rgba(140, 140, 140, 1));
                                @include background-color(rgba(248, 248, 248, 1));
                                &:nth-child(2) {
                                    margin: 0 0.1rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>