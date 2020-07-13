<template>
    <dl>
        <dt>{{title}}</dt>
        <dd v-for="city in cityList" :key="city.id" @click="changeCity(city)">{{city.name}}</dd>
      </dl>
</template>
<script>
export default {
  props:['cityList','title'],
  methods:{
    changeCity(city){
      this.$store.commit('setPosition',{name:city.name});
      this.$router.push('/')
    }
  }
}
</script>