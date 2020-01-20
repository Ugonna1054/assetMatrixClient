<template>
  <div class="main-container">
    <Headernav />
    <Sidenav />
    <div class="create-user">
      <div class="user-title   mb-5">
        <div class="col-12">
          <span class="create mr-4 mr-sm-5" @click="create"> Create User</span>
          <span class="manage" :class="{ active: true }" @click="manage">
            Manage User</span
          >
        </div>
      </div>
      <div class="row  mb-5">
        <div class="col-12">
          <b-tabs pills no-body :active-nav-item-class="current">
            <!-- Agent Tab -->
            <b-tab :title-link-class="active1" title="Agent">
              <div class="line mb-3 mt-3"></div>
              <div class="tab-c">
                <div class="user-title  card mb-0">
                  <div class="col-12 tab-contents1">
                    <p class="mb-3">Agent Individual Performance</p>
                    <div class="recent-transactions table-responsive">
                      <table>
                        <tr style="background:#14899b; color:whitesmoke">
                          <th>Agent ID</th>
                          <th>Agent Name</th>
                          <th>Wallet Balance</th>
                          <th>Today Deposit</th>
                          <th>MTD Deposit</th>
                          <th>Deposit Target</th>
                          <th>Account Created</th>
                          <th>Account Created Target</th>
                          <th>MTD Account Created</th>
                        </tr>

                        <tr v-for="(one, index) in 9" :key="index">
                          <td>10393939</td>
                          <td>Ugonna</td>
                          <td>Ubaka</td>
                          <td>Again</td>
                          <td>Something</td>
                          <td>Account</td>
                          <td>30 </td>
                          <td>300 </td>
                          <td>300 </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>

            <!-- Customer Tab -->
            <b-tab :title-link-class="active1" title="Customer">
              <!-- <div class="line mb-3"></div> -->
              <div class="tab-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid, voluptatibus! Optio culpa totam id dignissimos
                voluptas. Earum, tempore reiciendis. Nesciunt doloremque iste
                nostrum possimus, atque magni voluptatum accusamus voluptates
                in?
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../../components/SideNav/SideNav1.vue";
import Headernav from "../../components/HeaderNav/HeaderNav1.vue";
export default {
  name: "Dashboard",
  components: {
    Sidenav,
    Headernav
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    current() {
      return ["current"];
    },
    active1() {
      return ["tab"];
    }
  },
  methods: {
    create() {
      this.$router.push("/Admin/User/Create");
    },
    manage() {
      this.$router.push("/Admin/User/Manage");
    }
  }
};
</script>

<style lang="scss"></style>
