<template>
    <!--头部-->
    <header class="header">
        <ul>
            <li><slot name="left"></slot></li>
            <li><slot name="center"></slot></li>
            <li><slot name="right"></slot></li>
        </ul>
    </header>
</template>

<script>
import Vue from 'vue'
import { Popup, Button, Search, Icon } from 'vant'
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Button);
export default {
    data () {
        return {
            show: false,
            activeName: '1',
            overlay: false,
            value: ''
        }
    },
    methods: {
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
    }
}
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .header{
        @include rect(100%, 0.45rem);
        @include flexbox();
        @include justify-content(center);
        padding:.05rem 0;
        i img{
            @include rect(100%, 100%);
        }
        .icon-fenlei {
            position:absolute;
            left:0.1rem;
            top: 0.1rem;
            @include font-size(0.2rem);
        }

        .choice {
            @include rect(auto, 0.45rem);
            @include flexbox();
            @include justify-content(center);
            li {
                @include margin(0.12rem);
                @include font-size(0.16rem);
                &.router-link-active {
                    @include color(#ff004a);
                    @include font-weight(700);
                }
            }
        }
        .van-overlay {
            position: absolute;
            @include rect(100%, 100%);
            @include background-color(rgba(85,85,85,0.5))
        }
        .van-popup {
            @include rect(80%, 100%);
            @include background-color(#37393e);
            @include flexbox();
            @include flex-direction(column);
            position: absolute;
            left:0;
            @include color(#FFF);
            form {
                .van-search {
                    height: 0.6rem;
                }

                .van-field {
                    height: 0.4rem;
                }

                .van-icon-search {
                    @include flexbox();
                }

                i::before {
                    height: 0.4rem;
                    line-height: 0.3rem;
                }

                .van-field__control {
                    height: 0.3rem;
                    line-height: 0.3rem;
                }
            }
            .box {
                @include rect(100%, 100%);
                @include flexbox();
                @include flex-direction(column);
                margin-top:.2rem;
                span {
                    @include display(block);
                    @include rect(100%, .4rem);
                    @include rect(100%, .4rem);
                    @include line-height(.4rem);
                    @include display(block);
                    padding-left: 15px;
                    border-bottom: .01rem solid #FFF;
                    &:nth-child(1) {
                        margin-top:.4rem;
                    }
                }
            }
            .van-icon {
                @include rect(90%, .4rem);
                @include line-height(.4rem);
                @include font-size(.16rem);
            }
        }
    }


</style>