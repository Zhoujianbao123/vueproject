<template>
    <section class="letter">
        <header class="header">
            <router-link to="/info" tag="button" class="back">返回</router-link>
            <span>私信</span>
            <router-link to="/launch" tag="button" class="launch">发起私信</router-link>
        </header>
        <div class="comtainer">
            <ul>
                <li>
                    <div class="head"></div>
                    <div class="center">
                        <span class="stranger">陌生人消息</span>
                        <p class="dialogue">是三三啊：在吗？</p>
                    </div>
                    <div class="right">
                        <span class="time">1分钟前</span>
                        <p class="small"></p>
                    </div>
                </li>
                <li>
                    <div class="head"></div>
                    <div class="center">
                        <span class="stranger">陌生人消息</span>
                        <p class="dialogue">是思思啊：有事没？</p>
                    </div>
                    <div class="right">
                        <span class="time">1分钟前</span>
                        <p class="read">已读</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang='scss'>
    @import '@/lib/reset.scss';
    .back{
        @include rect(44px,30px);
        border:0;
        @include background-color(#fff);
        margin-left:6px;
        line-height: 30px;
    }
    .letter {
        @include rect(100%,100%);
        .header{
            @include rect(100%,45px);
            @include background-color(#F4F4F4);
            @include flexbox();
            justify-content: space-between;
            align-items: center;

            .launch{
                @include rect(77px,30px);
                border:0;
                @include background-color(#fff);
                margin-right:7px;
                line-height: 30px;
            }
        }
        .comtainer{
            ul{
                @include rect(100%,auto);
                margin-top:10px;
                li{
                    @include rect(100%,72px);
                    @include background-color(#F4F4F4);
                    @include flexbox();
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom:10px;
                    .head{
                        @include rect(44px,44px);
                        border-radius: 50%;
                        @include background-color(#DFDFDF);
                        margin-left:16px;
                    }
                    .center{
                        @include flexbox();
                        @include flex-direction(column);
                        margin-right:155px;
                        .stranger{
                            @include font-size(14px);
                            color:#575656;
                        }
                        .dialogue{
                            @include font-size(12px);
                            color:#C1BDBD;
                            margin-top:3px;
                        }
                    }
                    .right{
                        .time{
                            @include font-size(12px);
                            color:#C1BDBD;
                            margin-right:8px;
                        }
                        .small{
                            display: block;
                            @include rect(10px,10px);
                            @include background-color(#FFCECECE);
                            border-radius: 50%;
                            margin:4px 0 0 27px;
                        }
                        .read{
                            @include font-size(12px);
                            color:#FFC1BDBD;
                            margin-left:16px;
                        }
                    }
                }
            }
        }
    }
</style>