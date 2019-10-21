<template>
    <section class="detail">
        <router-view name="header"></router-view>
        <div class="content content-detail">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) of prolist[id].img" :key = "item.id">
                    <img :src="item" alt="">
                </van-swipe-item>
            </van-swipe>
            <p class="price">￥{{ prolist[id].price }}</p>
            <div class="share">
                <div class="share-l">
                    <i>分享:</i>
                    <div class="icon">
                        <span class="iconfont icon-qq"></span>
                        <span class="iconfont icon-logo-wechat"></span>
                        <span class="iconfont icon-weibo"></span>
                    </div>
                </div>
                <div class="share-r">
                    <span class="iconfont icon-shoucang"></span>
                </div>
            </div>
            <!--优惠券-->
            <div class="coupon">
                <!-- 优惠券单元格 -->
                <van-coupon-cell
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    @click="showList = true"/>
                <!-- 优惠券列表 -->
                <van-popup v-model="showList" position="bottom">
                    <van-coupon-list
                        :coupons="coupons"
                        :chosen-coupon="chosenCoupon"
                        :disabled-coupons="disabledCoupons"
                        @change="onChange"
                        @exchange="onExchange"
                    />
                </van-popup>
            </div>

            <!--商品规格-->
            <van-sku
                v-model="show"
                :sku="sku"
                :goods="goods"
                :goods-id="goodsId"
                :quota="quota"
                :quota-used="quotaUsed"
                :hide-stock="sku.hide_stock"
                :message-config="messageConfig"
                @buy-clicked="buy"
                @add-cart="addGoods(prolist[id])"
            />

            <div class="true">
                <p>
                    &emsp;<span class="pro_true_font">100%</span>正品保证，<span class="pro_true_font">7</span>日退换货服务。<br>
                    &emsp;订购热线：400-600-6618
                </p>
            </div>
            <div class="proinfo1">
                <p class="pro-header">商品信息</p>
                <ul>
                    <li>
                        <span>品&nbsp;&nbsp;&nbsp;&nbsp;牌:</span>
                    </li>
                    <li>
                        <span>款&nbsp;&nbsp;&nbsp;&nbsp;式:</span>
                    </li>
                    <li>
                        <span>货&nbsp;&nbsp;&nbsp;&nbsp;号:</span>
                    </li>
                    <li>
                        <span>材&nbsp;&nbsp;&nbsp;&nbsp;质:</span>
                    </li>
                    <li>
                        <span>产&nbsp;&nbsp;&nbsp;&nbsp;地:</span>
                        <span>意大利</span>
                    </li>
                </ul>
            </div>
            <div class="proinfo2">
                <p class="pro-header">了解品牌</p>
                <div class="liaojie">
                    <p>了解品牌了解品牌了解品牌了解品牌了解品牌了解品牌了解品牌了解品牌了解品牌了解品牌了解品牌了解品牌了解品牌了解品牌</p>
                </div>
            </div>
        </div>
        <!--商品导航-->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="goCar" />
            <van-goods-action-button type="warning" color="#be99ff" text="加入购物车" @click="tanchu" />
            <van-goods-action-button type="danger" color="#7232dd" text="立即购买" @click="buy" />
        </van-goods-action>
    </section>
</template>
<script>
    import Vue from 'vue'
    import { Swipe, SwipeItem, Icon, CouponCell, CouponList, Sku, GoodsAction, GoodsActionIcon, GoodsActionButton  } from 'vant'
    import { mapState, mapGetters, mapActions } from 'vuex'
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(CouponCell).use(CouponList);
    Vue.use(Icon);
    Vue.use(Sku);
    Vue
        .use(GoodsAction)
        .use(GoodsActionIcon)
        .use(GoodsActionButton);
    import axios from 'axios'
    const coupon = {
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '苏哥的关爱',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
    };
    export default {
        data () {
            return {
                id: this.$route.params.id,
                weibo: 'https://weibo.com/',
                weixin: 'https://weixin.qq.com/',
                qq: 'https://www.qq.com/',
                // 优惠券
                showList:false,
                chosenCoupon: -1,
                coupons: [coupon],
                disabledCoupons: [coupon],
                // 商品规格
                show: false,    // 是否显示sku
                goodsId: this.$route.params.id,   // 商品id
                quota: 0,           // 限购数，0 表示不限购
                quotaUsed: 0,       // 已经购买过的数量
                sku: {
                    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                    tree: [
                        {
                            k: '颜色', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '100', // skuValueId：规格值 id
                                    name: '红色', // skuValueName：规格值名称
                                    imgUrl: 'https://gd2.alicdn.com/imgextra/i2/0/O1CN01y7NFMo2IgJuNP7H6r_!!0-item_pic.jpg_400x400.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                                },
                                {
                                    id: '101',
                                    name: '蓝色',
                                    imgUrl: 'https://gd4.alicdn.com/imgextra/i4/269499315/O1CN018XTvva2IgJrg8cqkX_!!269499315.jpg_400x400.jpg'
                                }
                            ],
                            k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        },
                        {
                            k: '容量',
                            v: [
                                {
                                    id: '200',
                                    name: '100ml',
                                    },
                                {
                                    id: '201',
                                    name: '300ml',
                                    }
                            ],
                            k_s: 's2'
                        }
                    ],
                    // 所有 sku 的组合列表
                    list: [
                        {
                            id: 2259, // skuId，下单时后端需要
                            price: 10000, // 价格（单位分）
                            s1: '100', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '200', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                            stock_num: 200 // 当前 sku 组合对应的库存
                        },
                        {
                            id: 2260,
                            price: 20000,
                            s1: '101',
                            s2: '201',
                            s3: '0',
                            stock_num: 110
                        },
                        {
                            id: 2261,
                            price: 15000,
                            s1: '100',
                            s2: '201',
                            s3: '0',
                            stock_num: 1000
                        }
                    ],
                    price: '2000.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                        // 商品留言
                        datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                        multiple: '1', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                        name: '留言', // 留言名称
                        type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                        required: '0', // 是否必填 '1' 表示必填
                        placeholder: '' // 可选值，占位文本
                    }
                ],
                hide_stock: false // 是否隐藏剩余库存
            },
                goods: {
                    // 商品标题
                    title: '测试商品',
                    // 默认商品 sku 缩略图
                    picture: 'https://gd2.alicdn.com/imgextra/i2/0/O1CN01y7NFMo2IgJuNP7H6r_!!0-item_pic.jpg_400x400.jpg'
                },
                messageConfig: {
                    // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
                    uploadImg: () => {
                        return new Promise((resolve) => {
                            setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
                        });
                    },
                    // 最大上传体积 (MB)
                    uploadMaxSize: 3,
                    // placeholder 配置
                    placeholderMap: {
                        text: 'xxx',
                        tel: 'xxxxxxxxxxx',
                    }
                },
                prolist : [
                    {
                        id: 0,
                        name: '兰蔻全新精华肌底液第二代全新小黑瓶',
                        type:'保湿修护淡纹',
                        price: 1200,
                        url:'https://gd2.alicdn.com/imgextra/i2/0/O1CN01y7NFMo2IgJuNP7H6r_!!0-item_pic.jpg_400x400.jpg',
                        inventory:53,
                        num:1,
                        img: [
                            'https://gd2.alicdn.com/imgextra/i2/0/O1CN01y7NFMo2IgJuNP7H6r_!!0-item_pic.jpg_400x400.jpg',
                            'https://gd4.alicdn.com/imgextra/i4/269499315/O1CN018XTvva2IgJrg8cqkX_!!269499315.jpg_400x400.jpg',
                            'https://gd3.alicdn.com/imgextra/i3/269499315/O1CN01Jy0RAB2IgJrg8eBs0_!!269499315.jpg_400x400.jpg',
                        ]
                    },
                    {
                        id: 1,
                        name: '兰蔻小黑瓶新精华肌底液30ml',
                        type:'抗初老收毛孔修复',
                        price: 2150,
                        url:'https://gd3.alicdn.com/imgextra/i1/269499315/O1CN01CIkNmI2IgJuP349zv_!!269499315.jpg_400x400.jpg',
                        inventory:15,
                        num:1,
                        img: [
                            'https://gd3.alicdn.com/imgextra/i1/269499315/O1CN01CIkNmI2IgJuP349zv_!!269499315.jpg_400x400.jpg',
                            'https://gd3.alicdn.com/imgextra/i3/269499315/O1CN01IpMuo72IgJuLVMlZY_!!269499315.jpg_400x400.jpg',
                            'https://gd3.alicdn.com/imgextra/i3/269499315/O1CN01CfKxjR2IgJsrFSH8P_!!269499315.jpg_400x400.jpg'
                        ]
                    },
                    {
                        id: 2,
                        name: '兰蔻精华肌底液兰蔻小黑瓶100ml',
                        type:'补水保湿抗初老修复精华',
                        price: 1150,
                        url:'https://gd1.alicdn.com/imgextra/i4/2201219332387/O1CN01bIPHVT1TVHxeUwKXO_!!2201219332387.jpg_400x400.jpg',
                        inventory:5,
                        num:1,
                        img: [
                            'https://gd1.alicdn.com/imgextra/i4/2201219332387/O1CN01bIPHVT1TVHxeUwKXO_!!2201219332387.jpg_400x400.jpg',
                            'https://gd2.alicdn.com/imgextra/i2/2201219332387/O1CN01RBDXjV1TVHxizVUkq_!!2201219332387.jpg_400x400.jpg',
                            'https://gd4.alicdn.com/imgextra/i4/2201219332387/O1CN01E0KoMM1TVHxgtfixq_!!2201219332387.jpg_400x400.jpg'
                        ]
                    },
                    {
                        id: 3,
                        name: '云健倍润嫩肤肌底液',
                        type:'修复收缩毛孔精华补水保湿淡斑淡化细纹敏感肌',
                        price: 3150,
                        url:'https://gd3.alicdn.com/imgextra/i4/0/O1CN01WNxuW21YMeZlI5BVM_!!0-item_pic.jpg_400x400.jpg',
                        inventory:5,
                        num:1,
                        img: [
                            'https://gd3.alicdn.com/imgextra/i4/0/O1CN01WNxuW21YMeZlI5BVM_!!0-item_pic.jpg_400x400.jpg',
                            'https://gd1.alicdn.com/imgextra/i1/2200790043045/O1CN0105u6g81YMeYjAUmXj_!!2200790043045.jpg_400x400.jpg',
                            'https://gd3.alicdn.com/imgextra/i3/2200790043045/O1CN01b8aMYK1YMeYxqa9mO_!!2200790043045.jpg_400x400.jpg'
                        ]
                    }
                ]
            }
        },
        computed: {
            ...mapState(['shopList'])
        },
        methods: {
            ...mapActions(['addGoods']), //使用action对象中addGoods方法
            tanchu () {
                this.show= true;
            },
            goCar () {
                this.$router.push('/car');
            },
            /*addCar (id) {
                if (localStorage.getItem('isLogin') === 'ok') {/!*
                    this.carlist.push(this.prolist[id])*!/
                } else {
                    this.$router.push('/login')
                }
            },*/
            buy () {
                if (localStorage.getItem('isLogin') === 'ok') {
                    console.log('立即购买');
                    this.$router.push('/car')
                } else {
                    this.$router.push('/login')
                }
            },
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            },
            onClickIcon() {
                // Toast('点击图标');
            },
            /*onClickButton() {
                Toast('点击按钮');
            }*/
        },
        mounted () {
            /*const { $route: { params: { id } } } = this
            axios.get('https://www.daxunxun.com/detail?id=' + id).then(res => {
                this.title = res.data[0].images.small
            })*/

        }
    }
</script>
<style lang="scss">
    @import '@/lib/reset.scss';
    .detail {
        @include overflow(auto);
        .content-detail{
            .coupon {
                .van-cell {
                    @include background-color(#FF7F00);
                    @include color(#FFF);
                    span {
                        @include color(#FFF);
                    }
                    .van-field__control {
                        @include color(#FFF);
                    }
                }
            }
            van-sku {
                @include rect(100%, 6rem);
            }
            .van-swipe-item {
                img {
                    width:90%;
                    height:300px;
                    text-align:center;
                    display:block;
                    margin:0 auto;
                }
            }
            p.price{
                @include rect(100%,.3rem);
                @include text-align(center);
                @include color(#8e0c3a);
                @include font-size(.2rem);
                margin-top:.2rem;
            }
            .share{
                @include flexbox();
                @include justify-content(space-between);
                @include rect(100%,.5rem);
                @include line-height(.5rem);
                border-top:1px solid #ccc;
                border-bottom: 1px solid #ccc;
                margin-top: .1rem;
                .share-l{
                    @include rect(.4,.4rem);
                    @include flexbox();
                    @include justify-content(space-between);
                    i {
                        @include display(block);
                        @include rect(.5rem, .4rem);
                        @include font-weight(700);
                    }
                    .icon {
                        @include rect(2rem, .4rem);
                        @include flexbox();
                        span {
                            @include display(block);
                            @include font-size(.2rem);
                            &:nth-child(2) {
                                @include margin(0 .1rem);
                            }
                        }
                    }


                }
                .share-r{
                    @include rect(.4rem,.4rem);
                    @include flexbox();
                    span {
                        @include font-size(.2rem);
                    }
                }
            }
            .true{
                @include rect(100%,.4rem);
                margin-top: 6px;
                .pro_true_font{
                    color: #de166c;
                }
            }
            .proinfo1{
                @include rect(100%, 1.5rem);
                @include flexbox();
                margin-top: 10px;
                flex-direction: column;
                .pro_true_font{
                    color: #de166c;
                }
                p.pro-header{
                    @include rect(97%, .24rem);
                    background: #eee;
                    margin:0 auto;
                    line-height: 24px;
                    text-indent: 1em;
                }
                .liaojie{
                    @include rect(100%, auto);
                    text-indent:2em;
                }
                ul{
                    @include rect(100%, auto);
                    text-indent: 1em;
                    margin-top: 10px;
                    li{
                        @include rect(100%,.22rem);
                        width: 100% !important;
                        @include flex();
                        @include flexbox();
                    }
                }
            }
            .proinfo2 {
                @include rect(100%, 4rem);
                @include flexbox();
                margin-top: 10px;
                flex-direction: column;
                .pro_true_font{
                    color: #de166c;
                }
                p.pro-header{
                    @include rect(97%, .24rem);
                    background: #eee;
                    margin:0 auto;
                    line-height: 24px;
                    text-indent: 1em;
                }
                .liaojie{
                    @include rect(100%, auto);
                    text-indent:2em;
                }
                ul{
                    @include rect(100%, auto);
                    text-indent: 1em;
                    margin-top: 10px;
                    li{
                        @include rect(100%,.22rem);
                        width: 100% !important;
                        @include flex();
                        @include flexbox();
                    }
                }
            }
        }

    }

</style>
