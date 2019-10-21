<template>
    <footer class="footer">
        <ul>
            <router-link to="/home" tag="li">
                <span class="iconfont icon-shouyeshouye"></span>
                <p>首页</p>
            </router-link>
            <router-link to="/store" tag="li">
                <span class="iconfont icon-weishangchen"></span>
                <p>商城</p>
            </router-link>
            <router-link to="/add" tag="li" class="liAdd">
                <span class="add"></span>
            </router-link>
            <router-link to="/info" tag="li">
                <span class="iconfont icon-xiaoxi"></span>
                <p>消息</p>
            </router-link>
            <router-link to="/user/0" tag="li">
                <span class="iconfont icon-wode"></span>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .footer {
        @include rect(100%, 0.5rem);
        @include color(#000);
        border-top:.01rem solid #A8A8A8;
        ul {
            @include rect(100%, 0.5rem);
            @include flexbox();
            @include justify-content(space-around);
            position: relative;
            li{
                @include flex();
                @include align-items();
                @include flex-direction(column);
                @include justify-content();
                @include text-align();
                @include rect(1rem, .5rem);
                h1 {
                    @include font-size(0.3rem);
                }
                span {
                    @include font-size(0.2rem);
                    &.add {
                        background: url("./../../public/img/icons/add.png") no-repeat;
                        @include rect(.5rem, .5rem);
                        @include display(block);
                        @include background-size(.5rem);
                        @include border-radius(.08rem);

                    }
                    // CSS3实现
                    /*&.add{
                        @include rect(1rem, .5rem);
                        @include background-color(#ff004a);
                        position: relative;
                        left: 50%;
                        top: 50%;
                        &.add::after {
                            content: '';
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            height: .4rem;
                            margin-left: -.04rem;
                            margin-top: -.2rem;
                            border-left: .08rem solid;
                            @include color(#FFF);
                        }
                        &.add::before {
                             content: '';
                             position: absolute;
                             left: 50%;
                             top: 50%;
                             width: .4rem;
                             margin-left: -.2rem;
                             margin-top: -.05rem;
                             border-top: .08rem solid;
                            @include color(#FFF);
                         }
                    }*/
                }
                p {
                    @include font-size(0.15rem);
                }
                &.router-link-active {
                    @include color(#FFF);
                    @include background-color(#f10180);
                    @include font-weight(700);
                }
                &.liAdd {
                    @include flexbox();
                }
            }
        }
    }
</style>
