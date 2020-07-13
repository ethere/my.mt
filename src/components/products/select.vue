<template>
  <div class="subList">
    <i class="triangle"></i>
    <h4 class="title">{{title}}</h4>
    <dl>
      <dd v-for="item in subList" :key="item.id">{{item.name}}</dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["subList", "title"]
};
</script>
<style lang="scss">
.subList {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  position: absolute;
  padding: 10px;
  top: 25px;
  left: 0;
  z-index: 2;
  .title {
    color: #ccc;
    font-size: 16px;
  }
  dl {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
    width: auto;
    dd {
      cursor: pointer;
      font-size: 12px;
      color: #666;
      box-sizing: border-box;
      height: 20px;
      padding: 1px 8px;
      margin: 6px 5px;
      display: inline-block;
    }
  }
  .triangle {
    position: absolute;
    top: -7px;
    left: 26px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #e5e5e5;
    border-top: 0;

    &::after {
      content: "";
      position: absolute;
      top: 2px;
      left: -6px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #fff;
      border-top: 0;
    }
  }
}
</style>
