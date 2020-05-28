<template>
  <div class="ham" @click="hamClick">
    <i class="el-icon-s-fold" :class="{ active: isCollapse }" />
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    hamClick() {
      this.$store.commit("TOGGLE_SIDEBAR");
    }
  }
}
</script>

<style scoped>
.active {
  transform: rotate(180deg);
}
.ham{
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  background-color: #fffbf6;
  box-shadow: 2px 2px 2px #888888;
}
i{
  line-height: 30px;
  font-size: 15px;
}
.ham:hover{
  box-shadow: 1px 1px 2px #888888;
}
</style>
