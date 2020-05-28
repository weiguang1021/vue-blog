<template>
  <el-menu
    default-active="5"
    background-color="#6e7074"
    text-color="#eeeeee"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    active-text-color="#d7ab82"
    :unique-opened="true"
    router

  >
    <Logo />
    <side-bar-item v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
import SideBarItem from "./cCmps/SideBarItem";
import Logo from "./cCmps/Logo";

export default {
  components: {
    SideBarItem,
    Logo
  },
  methods: {
    //这两个方法是必须的
    handleOpen() {
    },
    handleClose() {
    },
  },
  computed: {
    ...mapState({
      isCollapse: state => state.isCollapse,
    }),
    isClose() {
      return { collapse: this.isCollapse };
    },
    routes() {
      return this.$router.options.routes.filter(item => item.layout == "Main");
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
</style>
