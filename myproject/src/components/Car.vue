<template>
    <div class="car" @click="goCar">
        <span class="iconfont icon-gouwuchekong"></span>
    </div>
</template>

<script>
    export default {
        methods: {
            goCar () {
                this.$router.push('/car')
            }
        }
    }
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .car {
        position:absolute;
        left:.4rem;
        bottom:1rem;
        @include text-align(center);
        @include rect(.5rem, .5rem);
        @include border-radius(50%);
        @include background-color(#252931);
        opacity: 0.7;
        span {
            @include font-size(.3rem);
            @include line-height(.5rem);
            @include color(#FFF);
        }
    }
</style>