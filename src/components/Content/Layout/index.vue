<template>
  <el-container>
    <el-aside>
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header style="">
        <nav-bar></nav-bar>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppMain from "./cComps/AppMain";
import NavBar from "./cComps/NavBar";
import SideBar from "./cComps/SideBar";

export default {
  components: {
    AppMain,
    NavBar,
    SideBar
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
