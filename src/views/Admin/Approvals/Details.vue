<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <Headernav />
    <Sidenav />
    <div class="create-user">
      <div>
        <b-tabs class="ml-n3" pills no-body :active-nav-item-class="current">
          <!-- Account approvals tab -->
          <b-tab
            :active="account"
            class="ml-3 mb-5"
            :title-link-class="active1"
            title="Account Approval"
          >
            <div class="user-title card mt-5">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Account Request Details</div>
                </div>
                <div class="table-responsive">
                  <table class="table1">
                    <tr class="row">
                      <td class="col-6 col-md-2">Name</td>
                      <td class="col-6 col-md-4">
                        {{ customer.firstname }} {{ customer.middlename }}
                        {{ customer.lastname }}
                      </td>
                      <td class="col-6 col-md-2">Email Address</td>
                      <td class="col-6 col-md-4">{{ customer.email }}</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Phone Number</td>
                      <td class="col-md-4 col-6">{{ customer.phone }}</td>
                      <td class="col-md-2 col-6">Account Number</td>
                      <td class="col-md-4 col-6">
                        {{ customer.account.accounts[0].number }}
                      </td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Gender</td>
                      <td class="col-md-4 col-6">{{ customer.gender }}</td>
                      <td class="col-md-2 col-6">Home Address</td>
                      <td class="col-md-4 col-6">{{ customer.address }}</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Date of Birth</td>
                      <td class="col-md-4 col-6">{{ customer.dob }}</td>
                      <td class="col-md-2 col-6">Date Applied</td>
                      <td class="col-md-4 col-6">{{ customer.createdAt }}</td>
                    </tr>
                  </table>
                </div>
                <!-- Button -->
                <div class=" mt-3 d-flex justify-content-between">
                  <div style="flex-grow:5"></div>
                  <div
                    class="d-flex justify-content-around"
                    style="flex-grow:1"
                  >
                    <div class="btn btn-outline-success" @click="updateApprove">
                      Approve
                    </div>
                    <div
                      class="btn btn-outline-danger mr-md-2"
                      @click="updateDecline"
                    >
                      Decline
                    </div>
                    <div></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </b-tab>

           <!-- Transactions approvals tab -->
          <b-tab
            :active="transaction"
            class="ml-3 mb-5"
            :title-link-class="active1"
            title="Transactions Approval"
          >
            <div class="user-title card mt-5">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Account Request Details</div>
                </div>
                <div class="table-responsive">
                  <table class="table1">
                    <tr class="row">
                      <td class="col-6 col-md-2">Name</td>
                      <td class="col-6 col-md-4">
                        {{ customer.firstname }} {{ customer.middlename }}
                        {{ customer.lastname }}
                      </td>
                      <td class="col-6 col-md-2">Email Address</td>
                      <td class="col-6 col-md-4">{{ customer.email }}</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Phone Number</td>
                      <td class="col-md-4 col-6">{{ customer.phone }}</td>
                      <td class="col-md-2 col-6">Account Number</td>
                      <td class="col-md-4 col-6">
                        {{ customer.account.accounts[0].number }}
                      </td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Gender</td>
                      <td class="col-md-4 col-6">{{ customer.gender }}</td>
                      <td class="col-md-2 col-6">Home Address</td>
                      <td class="col-md-4 col-6">{{ customer.address }}</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Date of Birth</td>
                      <td class="col-md-4 col-6">{{ customer.dob }}</td>
                      <td class="col-md-2 col-6">Date Applied</td>
                      <td class="col-md-4 col-6">{{ customer.createdAt }}</td>
                    </tr>
                  </table>
                </div>
                <!-- Button -->
                <div class=" mt-3 d-flex justify-content-between">
                  <div style="flex-grow:5"></div>
                  <div
                    class="d-flex justify-content-around"
                    style="flex-grow:1"
                  >
                    <div class="btn btn-outline-success" @click="updateApprove">
                      Approve
                    </div>
                    <div
                      class="btn btn-outline-danger mr-md-2"
                      @click="updateDecline"
                    >
                      Decline
                    </div>
                    <div></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </b-tab>

          <!-- Loan Approval Tab -->
          <b-tab
            class="ml-3"
            :active="loan"
            :title-link-class="active1"
            title="Loan Approval"
          >
            <div class="user-title card mt-5">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Loan Request Details</div>
                </div>
                <div class="table-responsive">
                  <table class="table1">
                    <tr class="row">
                      <td class="col-6 col-md-2">Name</td>
                      <td class="col-6 col-md-4">Ugonna Ubaks</td>
                      <td class="col-6 col-md-2">Email Address</td>
                      <td class="col-6 col-md-4">Transgehhhnnr@gmail.com</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Phone Number</td>
                      <td class="col-md-4 col-6">09093939333</td>
                      <td class="col-md-2 col-6">Account Number</td>
                      <td class="col-md-4 col-6">636363636</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Gender</td>
                      <td class="col-md-4 col-6">Ugonna Ubaks</td>
                      <td class="col-md-2 col-6">Home Address</td>
                      <td class="col-md-4 col-6">1, Amechi street</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Date of Birth</td>
                      <td class="col-md-4 col-6">July, 13 2020</td>
                      <td class="col-md-2 col-6">Date Applied</td>
                      <td class="col-md-4 col-6">Sept, 20, 2019</td>
                    </tr>
                  </table>
                </div>
                <!-- Button -->
                <div class=" mt-3 d-flex justify-content-between">
                  <div style="flex-grow:5"></div>
                  <div
                    class="d-flex justify-content-around"
                    style="flex-grow:1"
                  >
                    <div class="btn btn-outline-success">Approve</div>
                    <div class="btn btn-outline-danger mr-md-2">Decline</div>
                    <div></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </b-tab>

          <!-- Investment Approval Tab -->
          <b-tab
            class="ml-3"
            :title-link-class="active1"
            title="Investment Approval"
            :active="investment"
          >
            <div class="user-title card mt-5">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Investment Request Details</div>
                  <div></div>
                </div>
                <div class="recent-transactions table-responsive">
                  <table class="table1">
                    <tr class="row">
                      <td class="col-6 col-md-2">Name</td>
                      <td class="col-6 col-md-4">Ugonna Ubaks</td>
                      <td class="col-6 col-md-2">Email Address</td>
                      <td class="col-6 col-md-4">Transgehhhnnr@gmail.com</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Phone Number</td>
                      <td class="col-md-4 col-6">09093939333</td>
                      <td class="col-md-2 col-6">Account Number</td>
                      <td class="col-md-4 col-6">636363636</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Gender</td>
                      <td class="col-md-4 col-6">Ugonna Ubaks</td>
                      <td class="col-md-2 col-6">Home Address</td>
                      <td class="col-md-4 col-6">1, Amechi street</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Date of Birth</td>
                      <td class="col-md-4 col-6">July, 13 2020</td>
                      <td class="col-md-2 col-6">Date Applied</td>
                      <td class="col-md-4 col-6">Sept, 20, 2019</td>
                    </tr>
                  </table>
                </div>
                <!-- Button -->
                <div class=" mt-3 d-flex justify-content-between">
                  <div style="flex-grow:5"></div>
                  <div
                    class="d-flex justify-content-around"
                    style="flex-grow:1"
                  >
                    <div class="btn btn-outline-success">Approve</div>
                    <div class="btn btn-outline-danger mr-md-2">Decline</div>
                    <div></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../../../components/SideNav/SideNav1.vue";
import Headernav from "../../../components/HeaderNav/HeaderNav1.vue";
import Loader from "../../../utils/vue-loader/loader.vue";
import { adminService } from "../../../services/AdminServices/admin.services";
import { mapState } from "vuex";
export default {
  name: "Details",
  components: {
    Sidenav,
    Headernav,
    Loader
  },
  data() {
    return {
      loading: false,
      account: true,
      loan: false,
      transaction:false,
      investment: false
    };
  },
  computed: {
    current() {
      return ["current"];
    },
    active1() {
      return ["tab", "disabled"];
    },
    routeQuery() {
      return this.$route.query.p;
    },
    ...mapState({
      customer: state => state.User.USER_DETAILS
    })
  },
  methods: {
    async updateApprove() {
      this.loading = true;
      await adminService
        .updateApprove({
          id: this.customer._id
        })
        .then(res => {
          this.$toastr.s(res.message, "Fetched Succesfully");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async updateDecline() {
      this.loading = true;
      await adminService
        .updateDecline({
          id: this.customer._id
        })
        .then(res => {
          this.$toastr.s(res.message, "Fetched Succesfully");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    if (this.routeQuery == 1) return (this.transaction = true);
    if (this.routeQuery == 2) return (this.loan = true);
    if (this.routeQuery == 3) return (this.investment = true);
  }
};
</script>

<style lang="scss" scoped>
.action:hover {
  text-decoration: underline;
  cursor: pointer;
}
td:nth-child(odd) {
  color: grey;
}
</style>
