<template>
  <div class="sidenav-wrapper">
    <div ref="mySideNav" class="sidenav_client">
      <div class="logo-wrapper border">
        <div class="logo ml-2" @click="$router.push('/Login')">
          <div
            :class="{
              logo_image_wrapper: content,
              image_display: ham_pos
            }"
            ref="image_display"
          >
            <img class="logo-image" src="../../assets/images/logo.png" alt="" />
          </div>
        </div>
        <div
          :class="{ hamburger: true, ham_pos: ham_pos }"
          @click="toggle"
          class="d-block d-xl-none"
        >
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
        </div>
        <div class="hamburger d-none d-xl-block"></div>
      </div>
      <div class="main-navs">
        <b-nav :small="small" vertical class="" v-for="i in 1" :key="i">
          <b-nav-text
            class="nav-texts"
            @click="$router.push('/Admin/Dashboard')"
          >
            <span class="nav-icons">
              <i class="fa fa-home"></i>
            </span>
            <span class="nav-items" ref="nav_items"> Dashboard</span>
          </b-nav-text>
          <b-nav-text
            class="nav-texts"
            @click="$router.push('/Admin/User/Create')"
          >
            <span class="mrr-2 nav-icons">
              <i class="fa fa-user"></i>
            </span>
            <span class="nav-items" ref="nav_items"> User Management</span>
          </b-nav-text>
          <b-nav-text class="nav-texts">
            <span class="nav-icons">
              <i class="fa fa-check"></i>
            </span>
            <span class="nav-items" ref="nav_items"> Approvals</span>
          </b-nav-text>
          <b-nav-text class="nav-texts">
            <span class="nav-icons">
              <i class="fa fa-clock"></i>
            </span>
            <span class="nav-items" ref="nav_items"> Reports</span>
          </b-nav-text>
        </b-nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidenav1",
  components: {},
  data() {
    return {
      small: true,
      isOpen: true,
      content: true,
      ham_pos: false,
      image_display: true
      //mySideNav:false
    };
  },
  methods: {
    screensize() {
      let size = screen.width;
      if (size >= 768) return (this.small = false);
      this.small = true;
      return size;
    },
    toggle() {
      if (this.isOpen) return this.closeNav();

      return this.openNav();
    },
    openNav() {
      this.isOpen = true;
      this.content = true;
      this.ham_pos = false;
      this.mySideNav = false;
      this.$refs.mySideNav.style.width = "240px";
      this.$refs.nav_items.forEach(i => (i.style.display = "inline-block"));
      this.$refs.nav_items.forEach(item => (item.style.marginLeft = "6px"));
    },

    closeNav() {
      this.isOpen = false;
      this.content = false;
      this.ham_pos = true;
      this.mySideNav = true;
      this.$refs.mySideNav.style.width = "60px";
      this.$refs.nav_items.forEach(item => (item.style.display = "none"));
    }
  },
  mounted() {
    this.screensize();
    if (screen.width <= 768) this.closeNav();
  }
};
</script>

<style lang="scss">
.image_display {
  display: none;
}

.ham_pos {
  margin: 0px 17px;
}

.nav-icons {
  margin: 0px 5px;
}

.mrr-2 {
  margin-right: 8px;
}
</style>
