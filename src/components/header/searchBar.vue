<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" @focus="focus" @blur="blur" @input="onInput"/>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-show="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="item in hotList" :key="item" class="hotSearch">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-show="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link
            :to="{name:'goods',params:{name:item}}"
            v-for="item in suggestList"
            :key="item"
          >{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotList: [],
      suggestList: [],
      searchList: []
    };
  },
  computed: {
    isHotPlace() {
      return !this.searchWord && this.isFocus;
    },
    isSearchList() {
      return this.searchWord && this.isFocus;
    }
  },
  mounted() {
    api.searchHotWords().then(res => {
      if (res.status === "success") {
        this.hotList = res.data;
        this.suggestList = res.data;
      } else {
        console.log(res.msg);
      }
    });
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    onInput(){
      api.getSearchList().then(res=>{
        this.searchList = res.data.list.filter(item=>{
          return item.indexOf(this.searchWord) > -1
        })
      })
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
