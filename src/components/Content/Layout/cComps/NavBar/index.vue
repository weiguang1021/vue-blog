<template>
  <div class="nav-bar">
    <Hamburger/>
    <ul class="top-nav">
      <li><message/></li>
      <li><user-info/></li>
    </ul>
  </div>
</template>

<script>
import Hamburger from "./cComps/Hamburger";
import UserInfo from "./cComps/UserInfo";
import Message from "./cComps/Message";

export default {
  components:{
    Hamburger,
    UserInfo,
    Message
  },
};
</script>

<style>
.nav-bar{
  display: flex;
  height: 40px;
  background-color: #ffe7c2;
  /*NavbarBGC*/
  padding: 8px;
  justify-content: space-between;
  align-items: center;
}
.nav-bar>ul{
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  align-items: center;
}
.nav-bar>ul>li{
  padding: 0 15px 0 0;
}
.nav-bar>ul>li:last-child
{
  padding: 0;
}
</style>
