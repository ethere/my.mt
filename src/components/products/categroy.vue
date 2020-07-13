<template>
  <div class="categroy">
    <div class="list-wrapper">
      <div class="title">分类</div>
      <div class="all">全部</div>
      <div class="list">
        <ul>
          <li
            v-for="item in typeList"
            :key="item.type"
            @mouseenter="item.isActive=true"
            @mouseleave="item.isActive=false"
          >
            {{item.title}}
            <i class="el-icon-caret-bottom"></i>
            <my-select
              :subList="item.subList"
              :title="item.title"
              :class="{
              active:item.isActive
            }"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="list-wrapper">
      <div class="title">区域</div>
      <div class="all">
        <span>全部</span>
      </div>
      <div class="list">
        <ul>
          <li
            v-for="item in areaList"
            :key="item.title"
            @mouseenter="item.isActive=true"
            @mouseleave="item.isActive=false"
          >
            {{item.title}}
            <i class="el-icon-caret-bottom"></i>
            <my-select
              :subList="item.subList"
              :title="item.title"
              :class="{
              active:item.isActive
            }"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/index";
import MySelect from "./select";
export default {
  components: {
    MySelect
  },
  data() {
    return {
      typeList: [],
      areaList: [
        {
          title: "推荐商圈",
          isActive: false,
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        },
        {
          title: "南岗区",
          isActive: false,
          subList: [
            {
              name: "中央大街",
              id: 123
            },
            {
              name: "西客站",
              id: 11
            },
            {
              name: "花园街",
              id: 222
            },
            {
              name: "通乡街/果园街",
              id: 21
            },
            {
              name: "爱建社区",
              id: 1
            },
            {
              name: "学府路",
              id: 34
            }
          ]
        }
      ]
    };
  },
  created() {
    api.getClassifyList().then(res => {
      this.typeList = res.data.map(item => {
        item.isActive = false;
        return item;
      });
    });
    api.getAreaList().then(res => {
      // console.log(JSON.parse(res))
      // console.log(res)
      // // this.areaList = res.map(item=>{
      // //   item.isActive = false;
      // //   return item
      // // });
    });
  }
};
</script>
<style lang="scss">
@import "../../assets/css/products/categroy.scss";
.subList {
  display: none;
  &.active {
    display: block;
  }
}
</style>

