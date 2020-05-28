import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false,
    logolong: "博客管理系统",
    logo: "https://static.hdslb.com/images/akari.jpg",
    tabList: [],
    activetab: 0
  },
  getters: {
    tab() {
      if (this.tabList.length === 0) {
        return null
      } else {
        this.tabList[this.tabList.length - 1]
      }
    }
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.isCollapse = !state.isCollapse;
    },
    ROUTE_CLICK(state, payload) {
      if (!state.tabList.map(tab => tab.fullPath).includes(payload.fullPath)) {
        state.tabList.push(payload)
        state.activetab=state.tabList.length-1
      }
    },
    REMVOE_TAB(state, payload) {
      state.tabList.splice(payload, 1)
    },
    INIT_VIEW(state, payload) {
      if (payload.meta.affix==true && !state.tabList.map(tab => tab.fullPath).includes(payload.fullPath)) {
        state.tabList.push(payload)
      }
    },
    UPDATE_ACTIVE(state, payload) {
      state.activetab=payload
    }
  },
  actions: {}
  ,
  modules: {}
})
;
