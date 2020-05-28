<template>
  <div class="logo">
    <img :src="logoSrc" alt="logo">
    <span v-if="!isCollapse">{{logolong}}</span>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Logo.Vue",
  computed: {
    ...mapState({
      isCollapse: state => state.isCollapse,
      logoSrc: state => state.logo,
      logolong: state => state.logolong
    }),
  }
}
</script>

<style scoped>
img{
  height: 54px;
  vertical-align: middle;
  border-radius: 50%;
}
.logo{
  display: flex;
  padding: 5px;
}
span{
  position: absolute;
  width: 70%;
  height: 100%;
  text-align: center;
  font-size: 22px;
  font-weight: bolder;
  color: aliceblue;
  top:16px;
  left: 56px;
}
</style>
