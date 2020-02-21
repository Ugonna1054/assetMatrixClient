<template>
  <div class="header-nav">
    <Loader :loading="loading" loading-text="please wait..." />
    <div>
      <b-navbar type="dark" class="navbar" variant="">
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div class="avatar-wrapper">
              <img
                v-if="USER_DATA"
                class="avatar img-fluid"
                alt="avatar"
                :src="USER_DATA.passport"

              />
              <img
                v-else
                class="avatar"
                src="../../assets/images/avatar.jpg"
                alt="avatar"
              />
            </div>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{ johndoe }}</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { userService } from "../../services/user.services";
import Loader from "../../utils/vue-loader/loader.vue";
import { mapState } from "vuex";

export default {
  name: "Headernav1",
  components: {
    Loader
  },
  data() {
    return {
      loading: false
    };
  },
  props: {
    johndoe: {
      type: String,
      default: "Admin"
    },
    passport: {
      type: String
    }
  },
  computed : {
    ...mapState ({
      USER_DATA : state => state.User.USER_DATA
    })
  },
  methods: {
    async logout() {
      this.loading = true;
      await userService
        .Logout()
        .then(res => {
          this.$toastr.s(res, "Logged out");
          this.$router.push("/Login");
        })
        .catch(err => {
          this.$toastr.e(err, "Failed");
        })
        .finally(() => {
          this.loading = false;
        });
    }
    // resolve_img_url: function(path) {
    //   let images = require.context("../assets/", false, /\.png$|\.jpg$/);
    //   return images("./" + path);
    // }
  }
};
</script>

<style></style>
