<template>
    <section class="notice">
        <header class="header">
            <router-link to="/info" tag="button" class="back">返回</router-link>
            <span class="information">通知信息</span>
        </header>
        <div class="comtainer">
            <ul>
                <li>
                    <div class="head">
                        <img src="../../../public/img/head.png" class="portrait"/>
                    </div>
                    <div class="center">
                        <span class="title">【秋冬穿搭】秋冬温暖清新的流行穿搭分享</span>
                        <p class="time">2018-11-01 19:58</p>
                        <img src="../../../public/img/head.png" class="img"/>
                    </div>
                </li>
                <li>
                    <div class="head">
                        <img src="../../../public/img/head.png" class="portrait"/>
                    </div>
                    <div class="center">
                        <span class="title">震惊！这款化妆品竟然有这样的来路</span>
                        <p class="time">2018-11-01 19:58</p>
                        <img src="../../../public/img/head.png" class="img"/>
                    </div>
                </li>
                <li>
                    <div class="head">
                        <img src="../../../public/img/head.png" class="portrait"/>
                    </div>
                    <div class="center">
                        <span class="title">他！男人看了很沉默，女人看了会流泪</span>
                        <p class="time">2018-11-01 19:58</p>
                        <img src="../../../public/img/head.png" class="img"/>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang="scss">
    @import '@/lib/reset.scss';
    .notice{
        @include rect(100%, 100%);
        overflow: auto;
        .header {
            @include rect(100%, 45px);
            @include background-color(#F4F4F4);
            position: fixed;
            .back{
                @include rect(44px,30px);
                border:0;
                @include background-color(#fff);
                margin-left:6px;
                line-height: 30px;
                margin-top:8px;
            }
            .information{
                margin:0 auto;
                margin-left: 127px;
                @include line-height(45px);
            }
        }
        .comtainer{
            width:100%;
            height:auto;
            ul{
                height:auto;
                margin-top:60px;
                li{
                    @include rect(100%,244px);
                    display: flex;
                    justify-content: space-around;
                    margin-top:10px;
                    .head{
                        display: block;
                        @include rect(44px,44px);
                        border-radius: 50%;
                        @include background-color(#FFDFDFDF);
                        .portrait{
                            @include rect(44px,44px);
                            display: block;
                            border-radius: 50%;
                        }
                    }
                    .center{
                        width:327px;
                        border-bottom:1px solid #FFBBBBBB;
                        .title{
                            @include font-size(12px);
                            color:#333;
                        }
                        .time{
                            @include font-size(12px);
                            color:#333;
                            margin-left:5px;
                        }
                        .img{
                            @include rect(325px,166px);
                            margin-top:10px;
                        }
                    }
                }
            }
        }
    }
</style>