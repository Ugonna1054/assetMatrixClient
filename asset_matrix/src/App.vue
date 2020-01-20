<template>
  <div id="app">
    <div class="div">
      hello div
      <span class="span">
        hello span
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
  @import url("./assets/css/matrix.scss");
// .div {
//   color: blue;
//   .span {
//     color: red;
//   }
// }
</style>
