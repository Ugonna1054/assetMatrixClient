<template>
  <div>
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="login-page">
      <div class="logo">
        <div class="logo_image_wrapper">
          <img class="logo-image" src="../../assets/images/logo.png" alt="" />
        </div>
      </div>
      <div>
        <b-card
          title="Welcome Back!"
          sub-title="Login to your profile"
          class="mb-2  card-width"
        >
          <b-card-text>
            <ValidationObserver v-slot="{ passes }">
              <form action="" @submit.prevent="passes(login)">
                <div class="form-group mt-3">
                  <ValidationProvider
                    name="kk"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="email" class="login-label">Email</label>
                    <div class="input-group">
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fas fa-user"></i>
                        </div>
                      </div>
                      <input
                        name="email"
                        id="email"
                        v-model="email"
                        placeholder="Email"
                        type="email"
                        class="form-control"
                      />
                    </div>
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]"><i class="fas fa-ban"></i></span>
                      {{ errors[0] }}</span
                    >
                  </ValidationProvider>
                </div>
                <div class="form-group mt-3">
                  <ValidationProvider
                    name="password"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="password" class="login-label">Password</label>
                    <div class="input-group">
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-lock"></i>
                        </div>
                      </div>
                      <input
                        id="password"
                        name="password"
                        v-model="password"
                        placeholder="password"
                        type="password"
                        class="form-control"
                      />
                    </div>
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]"><i class="fas fa-ban"></i></span>
                      {{ errors[0] }}</span
                    >
                  </ValidationProvider>
                </div>
                <b-button type="submit" class="login-btn">Login</b-button>
              </form>
            </ValidationObserver>
          </b-card-text>
          <div class="outer-form">
            <div class="line mb-3"></div>
            <div class="forgot-password">
              <p class="h6">Forgot password?</p>
              <p>
                click
                <span class="here" @click="$router.push('Login')">here</span> to
                reset
              </p>
            </div>
            <div class="line mb-3"></div>
            <div class="account">
              <p class="h6">Don't have an account yet?</p>
              <p class="here">SIGNUP</p>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Loader from "../../utils/vue-loader/loader.vue";
export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider,
    Loader
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  methods: {
    login() {
      this.$router.push("Admin/Dashboard");
    }
  }
};
</script>

<style></style>
