<template>
  <div class="urd">
    <div class="urd-left"><md-editor/></div>
    <div class="urd-right"></div>
  </div>
</template>

<script>
  import MdEditor from "../cCmps/MdEditor";
  export default {
    name: "articleURD",
    components:{
      MdEditor,
    }
  }
</script>

<style lang="scss">

.urd{
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  height: auto;
  width: 100%;
  .urd-left{
    flex: 6;
    background-color: red;
    height: 100%;
  }
  .urd-right{
    flex:1;
    background-color: #334f6b;
    height: 100%;
  }
}
</style>
