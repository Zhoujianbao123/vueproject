<template>
    <ul>
        <li v-for="(good,index) in shopList" :key="good.id" :data-index="index">
            <div class="goods_item">

                <div class="goods_item_content">
                    <div class="goods_item_title">
                        <div class="goods_item_name">{{good.name}}</div>
                        <div class="goods_item_name" style="color: gray">库存: {{good.inventory}}</div>
                        <div class="goods_item_name" style="color: red">￥{{good.price|toFixed(2)}}</div>
                        <div class="goods_item_detail">
            <span class="goods_item_num" v-show="good.num>=0">
               <button class="btn-left" @click="reduceNum(index)">-</button>
               <input type="number" readonly style="width:30px;text-align:center;" v-model="good.num">
               <button class="btn-right" @click="addNum(index)">+</button>
            </span>
                        </div>

                        <div class="goods_item_name" @click="deleteGoods(index)">
<!--                            <img src="../assets/images/common/delete-icon.jpg"/>-->
                        </div>

                    </div>

                </div>

            </div>
        </li>
    </ul>

</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default{
        name: 'shopCartList',
        data(){
            return {}

        },
        props: ['shopList'],
        methods: {
            ...mapActions(['addNum', 'reduceNum', 'deleteGoods'])
        },
        mounted() {
            console.log(this.shopList);
        }
    }
</script>

<style scoped>

    li {
        border-bottom: 1px solid #eeeeee;
        border-top: 0.1px solid #eeeeee;
        background: #fff;
    }

    .goods_item {
        margin: 10px auto;
        width: 94%;
        height: auto;
    }

    .goods_item_content {
        display: flex;
    }

    .goods_item_title {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 8px;
    }

    .goods_item_name {
        flex: 1;
        display: flex;
        justify-content: space-around;
    }

    .goods_item_detail {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-left: 8px;
    }

    .goods_item_num {
        flex: 0.8;
        display: flex;
        justify-content: center;
        font-size: 12px;
    }

    .goods_item_num .btn-left {
        width: 20px;
        background: #eeeeee;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }

    .goods_item_num .btn-right {
        width: 20px;
        background: #eeeeee;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }

    .goods_item_num button:active {
        background: #bbbec4;
    }

</style>