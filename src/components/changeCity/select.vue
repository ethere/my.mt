<template>
  <div class="choose-wrap"
  @click="openPanel"
  >
      <span>{{name}}</span>
      <i class="el-icon-caret-bottom"></i>
    <div 
    class="choose-panel"
    :class="{
        active:panelLock
    }"
    >
      <span class="triangle"></span>
      <div 
      class="choose-data"
      :class="className?className:''"
      >
        <p class="title">{{title}}</p>
        <dl>
          <dd 
          v-for="(data,index) in datas" 
          :key="index"
          @click="choose($event,data)"
          :class="{
              selected:name===data.name
          }"
          >{{data.name}}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["datas", "title","name","panelLock","className"],
  methods:{
      choose(e,data){
          this.$emit('change',data.name);
          this.$emit('open-panel',false);
          e.cancelBubble = true
      },
      openPanel(e){
          this.$emit('open-panel',true);
          e.cancelBubble = true
      }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
