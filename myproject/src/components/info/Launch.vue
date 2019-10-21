<template>
    <section class="launch">
        <header class="header">
            <router-link to="/info" tag="button" class="back">返回</router-link>
            <span>发起私信</span>
            <button class="launch"></button>
        </header>
        <div class="comtainer">
            <p class="friend">我关注的好友</p>
            <ul>
                <li>
                    <div class="circular"></div>
                    <div class="center">
                        <p>是三三啊</p>
                    </div>
                </li>
                <li>
                    <div class="circular"></div>
                    <div class="center">
                        <p>是思思啊</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang="scss">
    @import '@/lib/reset.scss';
    .launch {
        @include rect(100%, 100%);
        .header{
            @include rect(100%,45px);
            @include background-color(#F4F4F4);
            @include flexbox();
            justify-content: space-between;
            align-items: center;
            .back{
                @include rect(44px,30px);
                border:0;
                @include background-color(#fff);
                margin-left:6px;
                line-height: 30px;
            }
            .launch{
                @include rect(70px,30px);
                border:0;
                border-radius: 4px;
                @include background-color(#F4F4F4);
                margin-right:6px;
            }
        }
        .comtainer{
            @include rect(100%,100%);
            .friend{
                margin:7px 0 5px 16px;
                font-size:12px;
                color:#FF8C8C8C;
            }
            ul{
                @include rect(100%,auto);
                li{
                    @include rect(auto,79px);
                    @include flexbox();
                    align-items: center;
                    margin:0 auto;
                    @include background-color(#F4F4F4);
                    margin-bottom:10px;
                    .circular{
                        @include rect(44px,44px);
                        border:1px solid #FFFFFF;
                        border-radius: 50%;
                        @include background-color(#F8F8F8);
                        margin:0 12px 0 16px;
                    }
                    .center{
                        @include flex-direction(column);
                        p{
                            font-size:14px;
                            color:#333;
                            margin-bottom:17px;
                        }
                        span{
                            font-size:12px;
                            color:#C1BDBD;
                        }
                    }
                }
            }
        }
    }
</style>