import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from './mutation-types'

import mutationTypes from './mutation-types.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: '',
    list: [1, 2, 3, 4, 5, 6],
    kindlist: [],
    carlist: [],
    shopList:[],//购物车列表
  },
  getters: {
    // 计算总价
    totalPrice(state){
      let totalPrice = 0;
      for(let i =0;i<state.shopList.length;i++){
        totalPrice += parseInt(state.shopList[i].price * state.shopList[i].num*100)/100;
      }
      return totalPrice;
    },
    // 计算总数
    totalCount(state){
      let totalCount = 0;
      for(let i =0;i<state.shopList.length;i++){
        totalCount += parseInt(state.shopList[i].num);
      }
      return totalCount;
    }
  },
  mutations: {
    [mutationTypes.ADD_GOODS](state, info) {
      let isOwn = state.shopList.some(function(item){
        if(item.id == info.id){
          if(item.inventory!=0){
            item.num++;
            item.inventory--;
          }
          return true;
        }else{
          return false;
        }
      });

      if(!isOwn){
        state.shopList.push({id:info.id,name:info.name,price:info.price,inventory:info.inventory-1,num:1,url:info.url});
        console.log(state.shopList);
      }
    },
    [mutationTypes.ADD_NUM](state, index) {
      if(state.shopList[index].inventory!=0){
        state.shopList[index].num++;
        state.shopList[index].inventory--;
      }
    },
    [mutationTypes.REDUCE_NUM](state, index) {
      if(state.shopList[index].num == 0){
        state.shopList.splice(index,1);
      }else{
        state.shopList[index].num--;
        state.shopList[index].inventory++;
      }
    },
    [mutationTypes.DELETE_GOODS](state, index) {
      state.shopList.splice(index,1);
    },
    [mutationTypes.CLEAR_SHOP_CART](state) {
      state.shopList = [];
    }
  },
  actions: {
    addGoods({commit},params){ //params对应mutation对象中参数info
      commit(mutationTypes.ADD_GOODS,params);
    },
    addNum({commit},params){
      console.log("addNum");
      commit(mutationTypes.ADD_NUM,params);
    },
    reduceNum({commit},params){
      commit(mutationTypes.REDUCE_NUM,params);
    },
    deleteGoods({commit},params){
      commit(mutationTypes.DELETE_GOODS,params);
    },
    clearShopCart({commit}){
      commit(mutationTypes.CLEAR_SHOP_CART);
    }
  }
})
