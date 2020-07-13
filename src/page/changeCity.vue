<template>
  <div class="changeCity-wrapper">
    <el-row class="op-area">
        <province />
    </el-row>
    <el-row class="citylist">
       <hot-city title="热门城市：" :cityList="hotCity"/>
    </el-row>
    <el-row class="citylist">
       <hot-city title="最近访问：" :cityList="recentCitys"/>
    </el-row>
    <div class="citys-wrapper">
       <category />
    </div>
  </div>
</template>
<script>
import api from '@/api/index'
import province from '../components/changeCity/province';
import hotCity from '../components/changeCity/hotCity';
import category from '../components/changeCity/category';
export default {
  components:{
    province,
    hotCity,
    category
  },
  data(){
    return{
      hotCity: [],
      recentCitys:[]
    }
  },
  created(){
    api.getHotCity().then(res=>{
      this.hotCity = res.data
    })
    api.getRecentCity().then(res=>{
      this.recentCitys = res.data;
    })
  }
};
</script>
<style lang="scss">
@import '../assets/css/changecity/index.scss';
</style>