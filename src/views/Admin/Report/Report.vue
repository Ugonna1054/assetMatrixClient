<template>
  <div class="main-container">
    <Headernav />
    <Sidenav />
    <div class="create-user">
      <div class="user-title mb-3 px-3">Transaction Summary</div>
      <!-- <br class="d-block d-sm-none" /> -->
      <div class="user-title px-3 py-3">
        <div class="d-flex justify-content-between mb-3" style="flex-wrap:wrap">
          <!-- <div class="date border mb-3 mb-lg-0"> -->
          <span class="mb-3 mb-md-0">
            <datetime
              class="borde"
              v-model="from"
              placeholder=" From : -DD-MM-YY-"
            />
          </span>
          <span class="mt- mt-sm-0 mb-sm-3 "
            ><datetime
              class="borde"
              v-model="to"
              placeholder=" To : -DD-MM-YY-"
            />
          </span>
          <!-- </div> -->
          <div class="btn btn-info py-2 mt-3 mt-md-0">Get Records</div>
        </div>
        <div class="recent-transactions table-responsive tab-contents">
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

            <tr v-for="(one, index) in 19" :key="index">
              <td>10393939</td>
              <td>Ugonna</td>
              <td>Ubaka</td>
              <td>Again</td>
              <td>Something</td>
              <td>Account</td>
              <td>30</td>
              <td>300</td>
              <td>300</td>
            </tr>
          </table>
        </div>
        <div class="download">
          <button class="btn btn-info">
            Download <i class="fa ml-1 fa-download"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../../../components/SideNav/SideNav1.vue";
import Headernav from "../../../components/HeaderNav/HeaderNav1.vue";
export default {
  name: "Report",
  components: {
    Sidenav,
    Headernav
  },
  data() {
    return {
      from: "",
      to: ""
    };
  },
  computed: {
    current() {
      return ["current"];
    },
    active1() {
      return ["tab"];
    }
  }
};
</script>

<style scoped>
.tab-contents {
  padding: 0px !important;
}

/* .user-title {
    max-height: 520px
} */
</style>
