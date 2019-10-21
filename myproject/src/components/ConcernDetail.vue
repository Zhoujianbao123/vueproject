<template>
    <section class="concern-detail">
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
        <div class="box">
            <div class="info">
                <div class="info-l">
                    <span class="img"><img :src="arr[id].head_img"/></span>
                    <span class="user">{{ arr[id].username }}</span>
                </div>
                <div class="info-r">
                    <span class="operation">关注</span>
                    <span class="operation">分享</span>
                </div>
            </div>
            <div class="map"><img :src="arr[id].show_img" alt=""></div>
            <p>{{ arr[id].content }}</p>
            <div class="bottom">
                <div class="bottom-l">
                    <span class="operation">转发</span>
                </div>
                <div class="bottom-r">
                    <span class="operation">收藏</span>
                    <span class="operation">评论</span>
                    <span class="operation">点赞</span>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import Header from '@/components/Header'
    // import axios from 'axios'
    export default {
        data () {
            return {
                title: '',
                id: this.$route.params.id,
                arr : [
                    {
                        id: 0,
                        username: '苏晨',
                        title:'苏氏集团期待你的加盟！I want you！',
                        content:'苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！苏氏集团期待你的加盟！I want you！',
                        head_img: 'http://img95.699pic.com/element/40153/0227.png_300.png',
                        show_img: 'http://img95.699pic.com/photo/40127/8288.jpg_wh300.jpg'
                    },
                    {
                        id: 1,
                        username: '姜浩南',
                        title:'发工资了，老板！',
                        content:'发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！发工资了，老板！',
                        head_img: 'http://img95.699pic.com/element/40087/3598.png_300.png',
                        show_img: 'http://img95.699pic.com/photo/50073/3299.jpg_wh300.jpg'
                    },
                    {
                        id: 2,
                        username: '杭洪宗',
                        title:'没钱来找我！',
                        content:'没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！没钱来找我！',
                        head_img: 'http://img95.699pic.com/photo/50077/0235.jpg_wh300.jpg',
                        show_img: 'http://img95.699pic.com/photo/50060/1440.jpg_wh300.jpg'
                    },
                    {
                        id: 3,
                        username: '袁建军',
                        title:'今天又被老板骂了，糟心！',
                        content:'今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！今天又被老板骂了，糟心！',
                        head_img: 'http://img95.699pic.com/element/40155/3689.png_300.png',
                        show_img: 'http://img95.699pic.com/photo/50063/3906.jpg_wh300.jpg'
                    }
                ]
            }
        },
        mounted () {
            console.log(this.$route.params.id);
            const { $route: { params: { id } } } = this;
            /*axios.get('https://www.daxunxun.com/detail?id=' + id).then(res => {
                console.log(res.data[0])
                this.title = res.data[0].title
            })*/
        },
        components: {
            Header
        }
    }
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .concern-detail{
        @include flexbox();
        @include flex();
        @include flex-direction(column);
        @include rect(100%, auto);
        @include overflow(auto);
        @include align-items(center);
        .box {
            @include flexbox();
            @include flex-direction(column);
            @include justify-content(center);
            @include align-items(center);
            .operation {
                @include rect(.41rem, .3rem);
                @include background-color(#eee);
                @include font-size(.14rem);
                @include line-height(.3rem);
                @include color(gray);
                @include text-align(center);
            }
            .info {
                @include rect(100%, .44rem);
                @include flexbox();
                @include justify-content(space-around);
                margin-top:.45rem;
                .info-l {
                    @include flexbox();
                    @include rect(1rem, .44rem);
                    @include justify-content(space-between);
                    .img{
                        @include display(block);
                        @include rect(.44rem, .44rem);
                        @include border-radius(50%);
                        img {
                            @include rect(100%, 100%);
                            @include border-radius(50%);
                        }
                    }
                    .user{
                        @include font-size(.14rem);
                        @include line-height(.44rem);
                    }
                }
                .info-r {
                    @include flexbox();
                    @include rect(1rem, .44rem);
                    @include justify-content(space-between);
                    @include align-items(center);

                }

            }
            .map {
                @include rect(100%, 2.4rem);
                margin-top:.2rem;
                @include flexbox();
                @include justify-content(center);
                @include align-items(center);
                img {
                    width:80%;
                }
            }
            p {
                @include rect(80%, auto);
                text-indent: .25rem;
                margin: .2rem 0;
            }
            .bottom {
                @include flexbox();
                @include rect(100%, .44rem);
                @include justify-content(space-around);
                .bottom-l {
                    @include rect(1rem, .44rem);
                    @include flexbox();
                }
                .bottom-r {
                    @include rect(2rem, .44rem);
                    @include flexbox();
                    @include justify-content(space-around);
                }
            }
        }

    }
</style>
