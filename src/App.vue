<template>
  <div id="app">
    <!-- <Loader :loading="loading" loading-text="please wait..." /> -->
    <!-- <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div> -->
     <router-view />
  
  </div>
</template>

<style lang="scss">
//@import url("./assets/css/matrix.css");
@import url("./assets/fontawesome/css/all.css");
</style>

<script>
//import Loader from "./utils/vue-loader/loader.vue";
export default {
  name: "App",
  components: {
    //Loader
  },
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    //this.$toastr.e("error.status", "Validation Failed!");
  }
};
</script>
