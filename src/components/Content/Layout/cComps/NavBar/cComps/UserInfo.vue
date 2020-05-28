<template>
  <el-dropdown trigger="click" class="user-info">
    <span class="el-dropdown-link">
      <img src="https://static.hdslb.com/images/akari.jpg" alt="user.jpg">
      <span>下拉菜单</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-user-solid">Profile</el-dropdown-item>
      <el-dropdown-item icon="el-icon-s-tools">Setting</el-dropdown-item>
      <el-dropdown-item icon="el-icon-switch-button">Logout</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 2px 2px 2px #888888;
  margin: 0 6px 0 0;
}
.el-dropdown-link{
  display: flex;
  align-items: center;
}
</style>
