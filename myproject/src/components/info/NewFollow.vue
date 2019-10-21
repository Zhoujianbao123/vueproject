<template>
    <section class="newfollow">
        <header class="header">
            <router-link tag="button" class="btn" to="/info">返回</router-link>
            <span>新增关注</span>
        </header>
        <div class="comtainer">
            <ul>
                <li>
                    <div class="circular"></div>
                    <div class="center">
                        <p>***** 开始关注你了</p>
                        <span>今天 12:11</span>
                    </div>
                    <button class="follow">关注</button>
                </li>
                <li>
                    <div class="circular"></div>
                    <div class="center">
                        <p>***** 开始关注你了</p>
                        <span>今天 11:20</span>
                    </div>
                    <button  class="follow">已关注</button>
                </li>
                <li>
                    <div class="circular"></div>
                    <div class="center">
                        <p>***** 开始关注你了</p>
                        <span>今天 15:55</span>
                    </div>
                    <button class="follow">关注</button>
                </li>
                <li>
                    <div class="circular"></div>
                    <div class="center">
                        <p>***** 开始关注你了</p>
                        <span>今天 12:09</span>
                    </div>
                    <button class="follow">关注</button>
                </li>
            </ul>
            <b>没有更多新消息了</b>
        </div>
    </section>
</template>
<style lang="scss">
    @import '@/lib/reset.scss';
    .newfollow {
        @include rect(100%,100%);
        .header{
            @include rect(100%,45px);
            @include background-color(#F4F4F4);
            @include text-align(center);
            .btn{
                @include rect(44px,30px);
                border:0;
                border-radius: 4px;
                @include background-color(#fff);
                position: absolute;;
                left:6px;
                top:8px;
            }
            span{
                @include line-height(45px);
                @include font-size(18px);
            }
        }
        .comtainer{
            @include rect(100%,100%);
            ul{
                @include rect(100%,auto);
                li{
                    @include rect(385px,79px);
                    @include flexbox();
                    border-bottom:1px solid #BBBBBB;
                    align-items: center;
                    justify-content: space-between;
                    margin:0 auto;
                    .circular{
                        @include rect(44px,44px);
                        border:1px solid #FFFFFF;
                        border-radius: 50%;
                        @include background-color(#F8F8F8);
                    }
                    .center{
                        @include flex-direction(column);
                        margin-left:-123px;
                        p{
                            font-size:14px;
                            color:#101010;
                        }
                        span{
                            font-size:12px;
                            color:#C1BDBD;
                        }
                    }
                    .follow{
                        @include rect(60px,25px);
                        @include background-color(#F8F8F8);
                        border-radius: 20px;
                        border:1px solid #bbb;
                        font-size:14px;
                    }
                }
            }
            b{
                @include margin(65px 0 0 0);
                @include display(block);
                @include flexbox();
                @include justify-content(center);
            }
        }
    }
</style>