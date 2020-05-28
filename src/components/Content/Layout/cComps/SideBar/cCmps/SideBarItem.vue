<template>
  <div :v-if="!route.meta.HideInSidebar">
    <template v-if="hasChild">
      <el-submenu :index="route.path">
        <template slot="title">
          <item :icon="route.meta.icon" :text="route.meta.text" />
        </template>
        <side-bar-item
          v-for="item in routes"
          :key="item.path"
          :route="item"
          :basePath="basicPath"
        />
      </el-submenu>
    </template>
    <el-menu-item v-else :index="route.name" :route="{ path: fullPath }" @click="routeClick(route,fullPath)" >
      <item :icon="route.meta.icon" :text="route.meta.text" />
    </el-menu-item>
  </div>
</template>

<script>

import SideBarItem from "./SideBarItem";
import path from "path";
import Item from "./Item";

export default {
  components: {
    SideBarItem,
    Item
  },
  props: {
    route: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  name: "SideBarItem",
  methods:{
    routeClick(route,fullPath){
      this.$store.commit("ROUTE_CLICK", {
        ...route,fullPath
      })
    }
  },
  computed: {
    hasChild() {
      if (!("children" in this.route)) {
        return false;
      } else if ("layout" in this.route) {
        return this.route.children.filter(item => item.meta.HideInSidebar == false).length > 1;
      } else {
        return this.route.children.filter(item => item.meta.HideInSidebar == false).length > 0;
      }
    },
    routes() {
      if (!("children" in this.route)) {
        return false;
      } else {
        return this.route.children.filter(
          item => item.meta.HideInSidebar == false
        );
      }
    },
    basicPath() {
      //根据状态返回路由前缀
      if ("layout" in this.route) {
        // 初级子菜单
        return path.resolve("", this.route.path);
      } else if (this.hasChild) {
        //下级子菜单
        return path.resolve(this.basePath, this.route.path);
      } else {
        //叶子路径
        return this.basePath;
      }
    },
    fullPath() {
      // 组成全路径放于el-menu-item的router中用于导航
      return path.resolve(this.basePath, this.route.path);
    }
  },
  mounted() {
    this.$store.commit("INIT_VIEW", {
      ...this.route,
      fullPath:this.fullPath
    })
  },
};
</script>
