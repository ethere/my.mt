<template>
  <div v-document-click="cancelPanel">
    <el-col :span="10" class="chooseProvince">
      <span>按省份选择 :</span>
      <my-select
        title="省份"
        :datas="provinceList"
        class="province-choose"
        @change="selectedProvince=$event"
        :name="selectedProvince?selectedProvince:'省份'"
        :panelLock="isProvincePanel"
        @open-panel="changeProvincePanel"
      />
      <my-select
        title="城市"
        :datas="getCitys"
        class="city-choose"
        name="城市"
        @change="cityChange"
        :panelLock="isUrbanPanel"
        @open-panel="changeUrbanPanel"
        :class="{
          disabled : !selectedProvince
        }"
      />
    </el-col>
    <el-col :span="8" class="search">
      <!-- <span class="l-attr">直接搜索</span>
      <input
        type="text"
        placeholder="请输入城市中文或拼音"
        class="search-text"
        @focus="onFocus"
        @blur="onBlur"
        v-model="searchWord"
      />
      <div class="suggest-city-container" v-show="searchWord&&inputPanel">
        <span class="triangle"></span>
        <ul class="suggest-city-wrapper">
          <li @click="cityChange">上海</li>
        </ul>
      </div>-->

      <span>直接搜索:</span>
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option 
        v-for="item in searchList" 
        :key="item" :label="item" 
        :value="item"
        ></el-option>
      </el-select>
    </el-col>
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
      provinceList: [],
      selectedProvince: "",
      selectedCity: "",
      isProvincePanel: false,
      isUrbanPanel: false,
      searchWord: "",
      inputPanel: false,
      loading: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"]
    };
  },
  computed: {
    getCitys() {
      if (!this.selectedProvince) {
        return [];
      }
      const result = this.provinceList.filter(item => {
        return item.name === this.selectedProvince;
      });
      return result[0].cityInfoList;
    }
  },
  created() {
    api.getProvinceList().then(res => {
      this.provinceList = res.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  methods: {
    onFocus() {
      this.isProvincePanel = false;
      this.isUrbanPanel = false;
      this.inputPanel = true;
    },
    onBlur() {
      this.inputPanel = false;
    },
    cityChange(city) {
      console.log(city)
      this.selectedCity = city;
      this.$store.commit("setPosition", { name: city });
      this.$router.push("/");
    },
    changeProvincePanel(flag) {
      this.isProvincePanel = flag;
      if (flag) {
        this.isUrbanPanel = false;
        this.inputPanel = false;
      }
    },
    changeUrbanPanel(flag) {
      this.isUrbanPanel = flag ? (this.selectedProvince ? flag : false) : false;
      this.isProvincePanel = false;
      this.inputPanel = false;
    },
    cancelPanel() {
      this.isProvincePanel = false;
      this.isUrbanPanel = false;
      this.inputPanel = false;
    },
    remoteMethod(val) {
        // 请求后端接口
        console.log(document.cookie, localStorage)
    }
  }
};
</script>