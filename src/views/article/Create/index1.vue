<template>
  <div class="create">
    <div class="create-left"><md-editor/></div>
    <div class="create-right"><aritcle-side/></div>
  </div>
</template>

<script>
  import MdEditor from "../cCmps/MdEditor";
  import AritcleSide from "../cCmps/AritcleSide";
  export default {
    name: "Create",
    components:{
      MdEditor,
      AritcleSide,
    }
  }
</script>

<style lang="scss">

.create{
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  height: auto;
  width: 100%;
  .create-left{
    flex: 6;
    background-color: red;
    height: 100%;
  }
  .create-right{
    flex:1;
    background-color: #334f6b;
    height: 100%;
  }
}
</style>
