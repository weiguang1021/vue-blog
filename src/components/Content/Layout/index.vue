<template>
  <div class="main" :class="isClose">
    <side-bar class="sidebar"></side-bar>
    <div class="container">
      <nav-bar></nav-bar>
      <view-bar-horizon/>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from "./cComps/AppMain/index";
import NavBar from "./cComps/NavBar/index";
import SideBar from "./cComps/SideBar/index";
import ViewBarHorizon from "./cComps/ViewBarHorizon/index";

import {mapState} from "vuex";

export default {
  components: {
    AppMain,
    NavBar,
    SideBar,
    ViewBarHorizon
  },
  computed:{
    ...mapState({
      isCollapse: state => state.isCollapse
    }),
    isClose() {
      return { collapse: this.isCollapse };
    },
  },
  methods:{}
};
</script>

<style>
.sidebar {
  width: 230px !important;
  transition: width 0.24s ease-in;
  /*background-color: #304654*/
}
.collapse>.sidebar{
  width: 64px !important;
  transition: width 0.24s ease-in;
}

.collapse>.container{
  flex: 1;
  transition: width 0.24s ease-in;
}
.a {
  width: 100px;
  /*transition: width 0.24s ease-in;*/
  /*background-color: #304654*/
}
.container{
  flex: 1;
  background-color: #fef8ef;
  transition: width 0.24s ease-in;
}
.main{
  height: 100%;
  display: flex;
}

.collapse .el-menu-item > span {
  display: none;
}

.collapse   .el-menu .el-submenu > .el-submenu__title > span {
  display: none;
}

.collapse   .el-menu .el-submenu > ul {
  display: none;
}
.collapse .logo>span{
  display: none;
}

.collapse
  .el-menu
.el-submenu
> .el-submenu__title
> .el-submenu__icon-arrow {
  display: none;
}

.el-icon-d-arrow-left.active {
  transform: rotate(180deg);
}
</style>
