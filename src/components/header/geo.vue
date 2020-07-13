<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      <span>{{$store.state.position.name}}</span>
      <router-link class="changeCity" :to="{name:'changeCity'}" tag="button">切换城市</router-link>[
      <a href="#" v-for="(item, index) in nearCity" :key="index"> {{item.name}} </a>
      ]
    </div>
    <div class="m-user" v-show="!$store.state.userName">
      <router-link :to="{name: 'login'}" class="login">立即登录</router-link>
      <router-link :to="{name: 'register'}" class="register">注册</router-link>
    </div>
  </div>
</template>
<script>
import api from "@/api/index";
export default {
  data() {
    return {
      nearCity: []
    };
  },
  watch: {
    "$store.state.position": function() {
      this.nearCity = this.$store.state.position.nearCity;
    }
  },
  created() {
    api.getCurPosition().then(res => {
      this.$store.dispatch("setPosition", res.data);
      this.nearCity = res.data.nearCity;
    });
  }
};
</script>
<style scoped>
.changeCity {
  outline: none;
}
</style>
