<template>
    <sction class="cerma">
        <header class="header">
            <router-link tag="div" to="/home" class="iconfont icon-close"></router-link>
            <div class="iconfont icon-shuaxin"></div>
        </header>
        <div class="photo"><img src="./../../../public/img/head.png" alt=""></div>
        <div class="button"><span></span></div>
        <div class="options">
            <div class="box">
                <div class="choice">相册</div>
                <div class="choice">拍照</div>
                <div class="choice">拍视频</div>
            </div>
        </div>
    </sction>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .cerma {
        @include flex();
        @include flexbox();
        @include flex-direction(column);
        @include rect(100%, auto);
        .header {
            @include rect(100%, .5rem);
            @include flexbox();
            @include justify-content(space-between);
            padding: 0 .2rem;
            @include box-sizing(border-box);
            .iconfont {
                @include font-size(.24rem);
            }
        }
        .photo {
            @include rect(100%, 3.8rem);
            @include flexbox();
            @include justify-content(center);
            @include margin(.4rem 0);
            img {
                width:80%;
            }
        }
        .button {
            @include rect(100%, .76rem);
            margin: .35rem 0;
            span {
                @include display(block);
                @include rect(.76rem, .76rem);
                @include border(.01rem solid rgb(187, 187, 187) 100%);
                @include margin(0 auto);
                &::after {
                    @include border-radius(50%);
                }
            }
        }
        .options {
            @include margin(0 auto);
            .box {
                @include flexbox();
                @include justify-content(space-around);
                .choice {
                    @include text-align(center);
                    @include color(rgba(140, 140, 140, 1));
                    @include rect(1rem, .4rem);
                    @include font-size(.2rem);
                    @include line-height(.4rem);
                }

            }
        }
    }
</style>