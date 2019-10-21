<template>
    <section class="info">
        <Header>
            <div slot="left">
                <router-link to="/home" class="btn" tag="button">菜单</router-link>
            </div>
            <div slot="center">
                <span>消息</span>
            </div>
        </Header>
        <!--<header class="header">
            <router-link to="/home" class="btn" tag="button">菜单</router-link>
            <span>消息</span>
        </header>-->
        <ul>
            <router-link to="/fabulous" tag="li" class="infoLi">收到的赞和收藏</router-link>
            <router-link to="/comment" tag="li" class="infoLi" style="border:0">收到的评论和 @</router-link>
            <router-link to="/newfollow" tag="li" class="infoLi" style="border-bottom:0">新增关注</router-link>
            <router-link to="/notice" tag="li" class="infoLi">通知信息</router-link>
            <router-link to="letter" tag="li" class="infoLi last">私信</router-link>
        </ul>
    </section>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        components: {
            Header
        }
    }
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .info{
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
                top:10px;
            }
            span{
                display: block;
                margin: 0 auto;
            }
        }
        ul{
            @include rect(100%,320px);
            @include margin(18px 0 0 0);
            .infoLi{
                @include rect(100%,50px);
                @include background-color(#FFE6E3E3);
                @include line-height(50px);
                @include color(#888);
                text-indent:8px;
                border-top:1px solid #bbbbbb;
                border-bottom:1px solid #bbb;
            }
            .last{
                @include margin(20px 0 0 0);
                border-top:1px solid #bbbbbb;
                border-bottom:1px solid #bbb;
            }
        }
    }
</style>
