<template>
<div class="view-bar">
  <div class="bar-left">
    <div class="btn"><i class="el-icon-arrow-left" /></div>
    <div class="view-item" v-for="(item,index) in tablist" :key="index" :class="{linkclass : index==activetab}">
      <router-link :to="item.fullPath">
        <div class="pathname" @click="isclick(index)">{{item.meta.text}}</div>
        <div class="el-icon-close" @click="removeTab(index)" :class="{closeremove : item.meta.affix==true}"></div>
      </router-link>
    </div>
  </div>
  <div class="bar-right">
    <div class="btn"><i class="el-icon-arrow-right" /></div>
  </div>
</div>
</template>

<script>
  export default {
    methods: {
      removeTab(targetName) {
        let tabs = this.tablist;
        let activeName = this.active;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.$store.commit("REMVOE_TAB",targetName)
      },
      isclick(index){
        this.$store.commit("UPDATE_ACTIVE",index)
      }
    },
    computed:{
      tablist(){
        return this.$store.state.tabList
      },
      activetab(){
        return this.$store.state.activetab
      }
    },

  }
</script>

<style scoped>

.view-bar{
  display: flex;
  align-items: center;
  padding: 2px 5px;
  background-color: #ffd594;
  height: 34px;
  justify-content: space-between;
}
.bar-left, .bar-right{
  display: flex;
}
.bar-left>.btn, .bar-right>.btn{
  text-align: center;
  padding: 0;
  margin: 0 6px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  width: 18px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #888888;
  background-color: #fffbf6;
}
.view-item{
  display: block;
  padding: 2px 10px;
  line-height: 23px;
  height: 24px;
  font-size: 12px;
  border-radius: 5px;
  background-color: #fffbf6;
  box-shadow: 2px 2px 2px #888888;
  margin: 0px 6px;
}
.view-item:hover{
  box-shadow: 1px 1px 2px #888888;
}
.closeremove{
  display: none;
}
.linkclass {box-shadow: 1px 1px 2px #888888; background-color: #ffeed4;}
a{display: flex; align-items: center;justify-content: space-between;color: #334f6b; text-decoration: none}

  .pathname{
    margin: 0 5px;
  }
</style>
