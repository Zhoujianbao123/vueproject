<template>
    <div class="container" style="overflow: auto">
        <div class="content" v-if="shopList.length > 0">
            <ul class="addshops">
                <li class="allshops" v-for="(item, index) of shopList" :key="item.id">
                    <ul>
<!--                        <van-icon name="cross"  @click="deleteItem(index)"/>-->
                        <li>
                            <!--          选框-->
                            <input type="checkbox" v-model="item.flag">
                            <img :src="item.url" alt="" class="carting">
                            <div class="biao">
                                <span>标题 {{ item.name }}</span>
                                <span>商品价格:￥{{ item.price }}</span>
                                <div>
                                    <button @click="item.num >= 2 ? item.num -= 1 : item.num = 1">-</button>
                                    {{ item.num }}
                                    <button @click="item.num += 1">+</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="allprices">
                <span>总数量:{{ totalCount }}</span>
                <span>总价:{{ totalPrice }}</span>
                <span class="jie">结算</span>
            </div>
        </div>
        <div class="content" v-else>
            <div class="box">
                <router-link to="/all" class="nono" tag="div">
                    <img class="noshop" src="http://bpic.588ku.com/element_origin_min_pic/17/07/03/8ec5518c1a4220fa4837e290c64f3886.jpg" alt="">
                </router-link>
                <h3>您的购物车为空,请前往商城购买~</h3>
            </div>
        </div>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { mapState, mapGetters } from 'vuex'
    import { Swipe, SwipeItem, Icon } from 'vant'
    Vue.use(Swipe).use(SwipeItem)
    Vue.use(Icon)
    export default {
        computed: {
            ...mapState(['shopList']),
            ...mapGetters(['totalCount','totalPrice'])
        },
        methods: {
        },
        mounted () {
            console.log(this.shopList)
        },
        /*// 判断当用户点击购物车时是否处于登录状态
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const { $store: { state: { loginState } } } = vm
                if (loginState === 'ok') {
                    next()
                } else {
                    next('./login')
                }
            })
        }*/
    }
</script>
<style lang="scss">
    @import '@/lib/reset.scss';
    .container {
        @include rect(100%, 100%);
        .content {
            @include rect(100%, 100%);
            @include flexbox();
            @include flex-direction(column);
            .addshops {
                @include flex();
                @include flexbox();
                @include flex-direction(column);
                @include align-items(center);
                @include rect(100%, auto);
                .allshops {
                    margin-top: 0.1rem;
                    width: 95%;
                    @include border-radius(.15rem);
                    @include border(.01rem solid #dfdddd);
                    @include flexbox();
                    @include flex-direction(column);
                    @include align-items(center);
                    ul {
                        width: 95%;
                        @include margin(0.1rem 0 0 0.1rem);
                    }
                    li {
                        @include flexbox();
                        @include justify-content(space-between);
                        @include align-items(center);
                        img {
                            width:30%
                        }
                    }
                    .biao {
                        @include rect(50%, 1rem);
                        width: 50%;
                        height: 100px;
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        button {
                            border: none;
                            width: 25px;
                            height: 25px;
                        }
                    }
                }
            }
            .allprices {
                margin-top: 0.1rem;
                margin-left: 0.1rem;
                margin-bottom: 0.1rem;
                width: 95%;
                height: 0.5rem;
                background-color: brown;
                color: #fff;
                border-radius: 25px;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: space-between;
                .jie {
                    border-radius: 25px;
                    line-height: 50px;
                    height: 50px;
                    background-color: #fff;
                    font-weight: bold;
                    color: brown;
                }
                span {
                    width: 30%;
                }
            }
            .box {
                color: darkslateblue;
                width: 100%;
                height: 100%;
                background-color: #f3faff;
                display: flex;
                flex-direction: column;
                align-items: center;
                .nono {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-bottom: 10px;
                    margin-top: 100px;
                    .noshop {
                        width: 100%;
                    }
                }
                h3 {
                    margin-top: 30px;
                }
            }
        }
    }

</style>
