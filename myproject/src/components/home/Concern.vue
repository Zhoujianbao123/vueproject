<template>
    <section class="content-concern">
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
        <!--朋友圈列表-->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" class="list">
            <li v-for="(item, index) in arr" :key="item.id">
                <div class="show"><img :src="item.show_img" @click="goDetail(item.id)"/></div>
                <h4>{{ item.title }}</h4>
                <div class="content-b">
                    <div class="content-b-l">
                        <img :src="item.head_img" @click="goUser(item.id)"/>
                        <span>{{ item.username }}</span>
                    </div>
                    <div class="content-b-r">
                        <span>收藏</span>
                        <span>评论</span>
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
    import { List, Popup, Button, Search, Icon } from 'vant'
    import axios from 'axios'
    Vue.use(List);
    Vue.use(Icon);
    Vue.use(Popup);
    Vue.use(Search);
    Vue.use(Button);
    export default {
        data() {
            return {
                show: false,
                activeName: '1',
                overlay: false,
                value: '',

                prolist: [],
                pageCode: 1,
                loading: false,
                finished: true,
                // arr: [],
                arr : [
                    {
                        id: 0,
                        username: '苏晨',
                        title:'苏氏集团期待你的加盟！I want you！',
                        head_img: 'http://img95.699pic.com/element/40153/0227.png_300.png',
                        show_img: 'http://img95.699pic.com/photo/40127/8288.jpg_wh300.jpg'
                    },
                    {
                        id: 1,
                        username: '姜浩南',
                        title:'发工资了，老板！',
                        head_img: 'http://img95.699pic.com/element/40087/3598.png_300.png',
                        show_img: 'http://img95.699pic.com/photo/50073/3299.jpg_wh300.jpg'
                    },
                    {
                        id: 2,
                        username: '杭洪宗',
                        title:'没钱来找我！',
                        head_img: 'http://img95.699pic.com/photo/50077/0235.jpg_wh300.jpg',
                        show_img: 'http://img95.699pic.com/photo/50060/1440.jpg_wh300.jpg'
                    },
                    {
                        id: 3,
                        username: '袁建军',
                        title:'今天又被老板骂了，糟心！',
                        head_img: 'http://img95.699pic.com/element/40155/3689.png_300.png',
                        show_img: 'http://img95.699pic.com/photo/50063/3906.jpg_wh300.jpg'
                    }
                ]
            }
        },
        /*mounted(){
            axios.get('/userInfo/public/userInfo.json').then(res=>{
                console.log(res.data)

            })
        },*/
        methods: {
            goDetail (id) {
                this.$router.push({ path: '/home/' + id });

            },
            goUser (id) {
                if(localStorage.getItem('isLogin')  === 'ok'){
                    this.$router.push({ path:'/user/' + id} )
                } else {
                    this.$router.push('/login');
                }
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
        @include overflow(auto);
        .content-concern{
            position:relative;
            @include rect(100%, auto);
            .list {
                @include flexbox();
                @include flex-direction(column);
                @include justify-content(center);
                @include background-color(#fff);
                @include rect(100%, auto);
                @include overflow(auto);
                li {
                    @include flexbox();
                    @include flex-direction(column);
                    @include align-items(center);
                    @include justify-content(center);
                    border-bottom: 1px solid rgba(187, 187, 187, 1);
                    margin-top:.2rem;
                    @include rect(100%, 3.5rem);
                    .show {
                        @include flexbox();
                        @include align-items(center);
                        @include justify-content(center);
                        img{
                            width:85%;
                        }
                    }
                    h4 {
                        @include margin(0 .2rem);
                        @include font-size(.14rem);
                        @include line-height(.5rem);
                        @include rect(100%, .5rem);
                        text-indent: .25rem;
                        @include color(rgba(140, 140, 140, 1));
                    }
                    .content-b {
                        @include flexbox();
                        @include rect(100%,.5rem);
                        @include justify-content(space-between);
                        padding-right: 0.23rem;
                        .content-b-l {
                            @include rect(1.4rem, .44rem);
                            @include flexbox();
                            @include align-items(center);
                            img {
                                margin: 0 .1rem 0 .28rem;
                                @include rect(.44rem, .44rem);
                                @include border-radius(50%);
                            }
                            span {
                                @include font-size(.14rem);
                                @include font-weight(700);
                                @include color(#A8A8A8);
                            }
                        }
                        .content-b-r {
                            @include flexbox();
                            @include align-items(center);
                            @include rect(1.5rem,100%);
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