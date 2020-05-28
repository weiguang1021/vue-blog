<template>
  <div class="message">
    <i class="el-icon-message"/>
  </div>
</template>

<script>
export default {
  name: "Message"
}
</script>

<style scoped>
i{
  display: block;
  width: 30px;
  height: 30px;
  line-height: 31px;
  text-align: center;
  font-size: 15px;
  background-color: #fffbf6;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #888888;
}
i:hover{
  box-shadow: 1px 1px 2px #888888;
}
</style>
