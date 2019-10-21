<template>
    <section class="sotre-skincare">
        <router-view name="input"></router-view>
        <!--商品列表-->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="list">
            <li v-for="(item, index) in prolist" :key="item.id" @click="goDetail(item.id)">
                <img :src="item.images.small" class="show"/>
                <h4>{{ item.title }}</h4>
                <div class="content-b">
                    <div class="content-b-l">
                        <span>AI-fisher</span>
                    </div>
                </div>
            </li>
        </van-list>

    </section>
</template>

<script>
    import Vue from 'vue'
    import { List } from 'vant'
    import axios from'axios';

    Vue.use(List);
    export default {data () {
            return {
                prolist: [],
                pageCode: 1,
                loading: false,
                finished: false
            }
        },
        mounted () {
            axios.get('/api/douban').then(res => {
                this.prolist = res.data;
            })
        },
        methods: {
            onLoad () {
                this.loading = true;// 表示可以加载数据了
                axios.get('https://www.daxunxun.com/douban?count=20&start=' + this.pageCode * 20).then(res => {
                    this.loading = false; // 表示本次请求已经结束
                    this.pageCode++; // 表示页码 +1
                    if (res.data.length === 0) {
                        this.finished = true // 表示所有的数据都已加载完毕了
                    } else {
                        this.prolist = [...this.prolist, ...res.data]
                    }
                })
            },
            goDetail (id) {
                /**
                 * 编程式跳转就是使用js跳转
                 * this.$router
                 *  类似于数组，每push一个，新添加了一个元素，每replace一个，替换了数组当前元素
                 *  .back()
                 *  .push() 追加一个新的路由
                 *  .replace() 替换当前的路由
                 */
                this.$router.push({ path: '/detail/' + id })
            }
        }
    }
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .sotre-skincare{
        @include flex();
        @include rect(100%, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include overflow(auto);
        .list {
            @include flexbox();
            @include justify-content(space-around);
            @include flex-wrap(wrap);
            @include rect(100%,100%);
            li {
                @include flexbox();
                @include rect(1.75rem, auto);
                @include flex-direction(column);
                border-bottom: 1px solid rgba(187, 187, 187, 1);
                margin-bottom: .1rem;
                .show {
                    @include rect(1.75rem, 2.14rem);
                }
                h4 {
                    margin:.1rem 0;
                    @include color(rgba(140, 140, 140, 1));
                }
                .content-b {
                    @include flexbox();
                    @include justify-content(space-between);
                    .content-b-l {
                        @include rect(1.1rem, 100%);
                        @include flexbox();
                        @include justify-content(space-between);
                        @include align-items(center);
                        img {
                            @include rect(.44rem, .44rem);
                            @include border-radius(50%);
                        }
                    }
                    .content-b-r {
                        @include flexbox();
                        @include align-items(center);
                        span {
                            @include display(block);
                            @include rect(0.41rem, 0.3rem);
                            @include font-size(0.14rem);
                            @include line-height(0.3rem);
                            @include text-align(center);
                            @include color(rgba(140, 140, 140, 1));
                            @include background-color(rgba(248, 248, 248, 1));
                            &:nth-child(2) {
                                margin: 0 0.1rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>