<template>
  <div>
    <el-row class="chooseLetter">
      <span class="title">按拼音首字母选择 :</span>
      <a v-for="letter in letters" :key="letter" :href="'#city-'+letter">{{letter}}</a>
    </el-row>
    <el-row v-for="(city,index) in citys" :key="index" class="citys-area" :id="'city-'+index">
      <el-col class="letter" :span="1">{{index}}</el-col>
      <el-col class="citys" :span="23">
        <span
          class="city"
          v-for="c in city"
          :key="c.id"
          @click="chooseCity(c)"
        >{{c.name}}</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      letters: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ],
      citys: {}
    };
  },
  mounted(){
    api.getCityList().then(res=>{
      var obj = {};
      res.data.forEach((item,index) => {
        if(!obj[item.firstChar.toUpperCase()]){
          obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)
      });
      this.citys = obj
    })
  },
  methods:{
    chooseCity(city){
      this.$store.dispatch('setPosition',city);
      this.$router.push('/');
      console.log(city)
    }
  }
};
</script>