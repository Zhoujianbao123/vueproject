<template>
    <section class="store-recommend">
        <!--轮播图-->
        <div class="banner">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <!--活动入口-->
        <div class="activity">
            <div class="activity-l"></div>
            <div>
                <h4>双十一来啦</h4>
                <h1>抢双十一特惠</h1>
            </div>
            <div class="activity-r">GO</div>
            <!--            <img src="./../../../public/img/head.png" alt="">-->
        </div>
        <!--限时-->
        <div class="limit">
            <div class="limit-l">
                <h4>双11同价限时购</h4>
                <div class="limit-x-b">
                    <img src="http://img95.699pic.com/photo/50094/4649.jpg_wh300.jpg" alt="">
                    <img src="http://img95.699pic.com/photo/50104/7900.jpg_wh300.jpg" alt="">
                </div>
            </div>
            <div class="limit-r">
                <h4>双11同价限时购</h4>
                <div class="limit-x-b">
                    <img src="http://img95.699pic.com/photo/40011/6758.jpg_wh300.jpg" alt="">
                    <img src="http://img95.699pic.com/photo/50059/7843.jpg_wh300.jpg" alt="">
                </div>
            </div>
        </div>
        <!--人气-->
        <div class="pop">
            <div class="pop-x">
                <h4>超值特惠</h4>
                <img src="http://img95.699pic.com/photo/50027/7234.jpg_wh300.jpg" alt="">
            </div>
            <div class="pop-x">
                <h4>人气产品</h4>
                <img src="http://img95.699pic.com/photo/40101/6558.jpg_wh300.jpg" alt="">
            </div>
            <div class="pop-x">
                <h4>小红店</h4>
                <img src="http://img95.699pic.com/photo/50060/1440.jpg_wh300.jpg" alt="">
            </div>
        </div>
        <!--商品列表-->
        <ul class="prolist">
            <li v-for="(item, index) in proList" :key="item.id" @click="goDetail(item.id)">
                <img :src="item.img[0]" alt="">
                <h3>{{ item.title }}</h3>
                <h4>{{ item.type }}</h4>
                <span>￥{{ item.price }}</span>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                images: [
                    'http://www.carslan.com.cn/media/2885/%E5%AE%98%E7%BD%91%E7%84%A6%E7%82%B9%E8%BD%AE%E6%92%AD-1900x700px-1.jpg',
                    'http://www.carslan.com.cn/media/3059/pc-kv-1900x700px.jpg',
                    'http://www.carslan.com.cn/media/2884/%E5%AE%98%E7%BD%91%E7%84%A6%E7%82%B9%E8%BD%AE%E6%92%AD-1900x700px.jpg'
                ],
                proList : [
                    {
                        id: 0,
                        title: '兰蔻全新精华肌底液第二代全新小黑瓶',
                        type:'保湿修护淡纹',
                        price: 1200,
                        img: [
                            'https://gd2.alicdn.com/imgextra/i2/0/O1CN01y7NFMo2IgJuNP7H6r_!!0-item_pic.jpg_400x400.jpg',
                            'https://gd4.alicdn.com/imgextra/i4/269499315/O1CN018XTvva2IgJrg8cqkX_!!269499315.jpg_400x400.jpg',
                            'https://gd3.alicdn.com/imgextra/i3/269499315/O1CN01Jy0RAB2IgJrg8eBs0_!!269499315.jpg_400x400.jpg',
                        ]
                    },
                    {
                        id: 1,
                        title: '兰蔻小黑瓶新精华肌底液30ml',
                        type:'抗初老收毛孔修复',
                        price: 2150,
                        img: [
                            'https://gd3.alicdn.com/imgextra/i1/269499315/O1CN01CIkNmI2IgJuP349zv_!!269499315.jpg_400x400.jpg',
                            'https://gd3.alicdn.com/imgextra/i3/269499315/O1CN01IpMuo72IgJuLVMlZY_!!269499315.jpg_400x400.jpg',
                            'https://gd3.alicdn.com/imgextra/i3/269499315/O1CN01CfKxjR2IgJsrFSH8P_!!269499315.jpg_400x400.jpg'
                        ]
                    },
                    {
                        id: 2,
                        title: '兰蔻精华肌底液兰蔻小黑瓶100ml',
                        type:'补水保湿抗初老修复精华',
                        price: 1150,
                        img: [
                            'https://gd1.alicdn.com/imgextra/i4/2201219332387/O1CN01bIPHVT1TVHxeUwKXO_!!2201219332387.jpg_400x400.jpg',
                            'https://gd2.alicdn.com/imgextra/i2/2201219332387/O1CN01RBDXjV1TVHxizVUkq_!!2201219332387.jpg_400x400.jpg',
                            'https://gd4.alicdn.com/imgextra/i4/2201219332387/O1CN01E0KoMM1TVHxgtfixq_!!2201219332387.jpg_400x400.jpg'
                        ]
                    },
                    {
                        id: 3,
                        title: '云健倍润嫩肤肌底液',
                        type:'修复收缩毛孔精华补水保湿淡斑淡化细纹敏感肌',
                        price: 3150,
                        desc: '绿色',
                        num: 1,
                        img: [
                            'https://gd3.alicdn.com/imgextra/i4/0/O1CN01WNxuW21YMeZlI5BVM_!!0-item_pic.jpg_400x400.jpg',
                            'https://gd1.alicdn.com/imgextra/i1/2200790043045/O1CN0105u6g81YMeYjAUmXj_!!2200790043045.jpg_400x400.jpg',
                            'https://gd3.alicdn.com/imgextra/i3/2200790043045/O1CN01b8aMYK1YMeYxqa9mO_!!2200790043045.jpg_400x400.jpg'
                        ]
                    }
                ]
            }

        },
        methods: {
            goDetail (id) {
                this.$router.push('/detail/' + id)
            }
        }
    }
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .header {
        padding-bottom:.11rem;
        @include box-sizing(border-box);
    }
    .store-recommend {
        @include flexbox();
        @include flex-direction(column);
        @include align-items(center);
        @include background-color(#fff);
        .banner {
            @include rect(3.75rem, 1.9rem);
            @include overflow(hidden);
            .van-swipe {
                @include rect(100%, 2rem);
                @include overflow(hidden);
                position:relative;
                img {
                    width:130%;
                }
                .van-swipe__track{
                    @include rect(100%, 100%);
                    @include flexbox();
                }

            }
        }
        .activity {
            @include flexbox();
            @include justify-content(space-around);
            @include align-items(center);
            @include rect(3.75rem, 1rem);
            @include border-radius(.06rem);
            @include color(#FFF);
            @include background-color(#b943db);
            .activity-l {
                @include rect(.83rem, .83rem);
                background-image: url(./../../../public/img/head.png);
                background-size: .83rem .83rem;
            }
            .activity-r {
                @include text-align(center);
                @include font-size(.14rem);
                @include line-height(.6rem);
                @include rect(.6rem, .6rem);
                @include background-color(#fff);
                @include border-radius(50%);
                @include color(#000);
                @include font-weight(700);
            }
        }
        /*限时*/
        .limit {
            @include flexbox();
            @include rect(3.72rem, 1rem);
            @include justify-content(space-between);
            @include color(#000);
            margin-top: .1rem;
            .limit-l {
                @include rect(1.74rem, 1rem);
                @include background-color(#f7dfdf);
                @include border-radius(.05rem);
                @include align-items(center);
                padding:0 .2rem;
            }
            .limit-r {
                @include rect(1.74rem, 1rem);
                @include background-color(#e4ecfc);
                @include border-radius(.05rem);
                @include align-items(center);
                padding:0 .2rem;
            }
            h4 {
                @include font-size(.14rem);
                @include line-height(.3rem);
                @include display(inline-block);
            }
            .limit-x-b {
                @include flexbox();
                @include justify-content(space-around);
                img {
                    @include rect(.6rem, .5rem);
                }
            }
        }
        /*人气*/
        .pop {
            @include flexbox();
            @include rect(3.72rem, 1rem);
            @include justify-content(space-between);
            @include text-align(center);
            margin-top: .1rem;
            .pop-x {
                @include rect(1.12rem, 1rem);
                @include background-color(rgba(248, 248, 248, 1));
                @include flexbox();
                @include flex-direction(column);
                @include align-items(center);
                @include justify-content(center);
            }
            h4 {
                @include font-size(.14rem);
                @include line-height(.2rem);
            }
            img {
                @include rect(.6rem, .6rem);
            }
        }
        /*商品列表*/
        .prolist {
            @include rect(3.72rem, auto);
            @include flexbox();
            @include flex-wrap(wrap);
            @include justify-content(space-around);
            margin-top: .2rem;
            li {
                @include rect(1.55rem, 2.4rem);
                @include font-size(.14rem);
                @include flexbox();
                @include flex-direction(column);
                img {
                    @include rect(1.55rem, 1.2rem);
                }
                h3 {
                    @include margin(.1rem 0);
                }
                h4 {
                    @include color(#A8A8A8);
                }
                span {
                    @include margin(.1rem 0);
                }
            }
        }
    }
</style>