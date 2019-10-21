<template>
    <div class="goods_item">

        <div class="goods_item_content">

            <div class="goods_item_radio">
                <img style="width:60px;height:60px" :src="good.url" alt="">
            </div>

            <div class="goods_item_title">
                <div class="goods_item_name" >{{good.name}}</div>
                <div class="goods_item_name" style="color: gray" >库存: {{good.inventory}}</div>
                <div class="goods_item_name" style="color: red">￥{{good.price|toFixed(2)}}
                    <div class="goods_item_detail"><button class="btn-left" @click="addGoods(good)">加入购物车</button></div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'    //引入action对象

    export default{
        data(){
            return {

            }

        },
        props:['good'],
        methods: {
            ...mapActions(['addGoods']) //使用action对象中addGoods方法
        },
        computed: {
            ...mapState(['shopList'])
        },
        mounted() {/*
            console.log(this.good)*/
        }
    }
</script>

<style scoped>

    .goods_item {
        margin: 10px auto;
        width: 94%;
        height: auto;
    }

    .goods_item_content {
        display: flex;
    }

    .goods_item_radio {
        flex: 1;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .goods_item_title {
        flex: 9;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 8px;
    }

    .goods_item_name {
        margin-top: 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .goods_item_detail {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }

    .btn-left{
        padding: 2px;
        background:#eeeeee;
        border-radius: 5px;
    }

    .goods_item_num button:active {
        background: #bbbec4;
    }

</style>