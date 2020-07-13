<template>
  <div class="product-list-wrapper">
    <ul class="nav-list clearFix">
      <li v-for="item in nav" :key="item.key" :class="{active:item.active}">{{item.name}}</li>
    </ul>
    <ul class="product-list">
      <li v-for="item in productList" :key="item.title">
          <item :meta="item"/>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index'
import Item from "./item";
export default {
  components: {
    Item
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: []
    };
  },
  created(){
    api.getProductsList().then(res=>{
      this.productList = res.data
    })
  }
};
</script>
<style lang="scss">
@import '@/assets/css/products/list.scss';
.product-list-wrapper{
  margin-top: 10px;
  padding: 15px;
  background-color: #fff;
  border:1px solid #e5e5e5;
  .clearFix::after{
    display: block;
    content: '';
    clear: both;
  }
  .nav-list{
    padding-bottom: 15px;
    >li{
      float: left;
      margin: 5px 10px;
    }
  }
}
</style>
