<template>
  <div class="main-container">
     <Loader :loading="loading" loading-text="please wait..." />
    <Headernav />
    <Sidenav />
    <div class="create-user">
      <div class="">
        <b-tabs class="ml-n3" pills no-body :active-nav-item-class="current">
          <b-tab
            class="ml-3 mb-5"
            :title-link-class="active1"
            title="Account Approval"
          >

          <div class="line mt-3"></div>
            <div class="user-title card mt-3">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Account Request</div>
                  <div>
                    <div class="input-group float-right">
                      <input
                        type="search"
                        placeholder="Search Account"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr style="background:#14899b; color:whitesmoke">
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email Address</th>
                      <th>Status</th>
                      <th>Details</th>
                    </tr>

                    <tr v-for="(customer, index) in Customers" :key="index">
                      <td>{{ customer.firstname }} {{ customer.lastname }}</td>
                      <td>{{ customer.phone }}</td>
                      <td>{{ customer.email }}</td>
                      <td>{{ customer.status }}</td>
                      <td class="text-primary action" @click="Account(index)">
                        View
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </b-tab>
          <!-- Loan Approval Tab -->
          <b-tab class="ml-3" :title-link-class="active1" title="Loan Approval">
               <div class="line mt-3 mb-3"></div>
            <div class="user-title card mt-3">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Loan Request</div>
                  <div>
                    <div class="input-group float-right">
                      <input
                        type="search"
                        placeholder="Search Loan"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr style="background:#14899b; color:whitesmoke">
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Duration</th>
                      <th>Status</th>
                      <th>Date Applied</th>
                      <th>View</th>
                      <th>Delete</th>
                    </tr>

                    <tr v-for="(one, index) in 9" :key="index">
                      <td>Ubaka Ugonna</td>
                      <td>N 3,000</td>
                      <td>6 Months</td>
                      <td>Pending</td>
                      <td>Something</td>
                      <td class="text-primary action"  @click="Loan">View</td>
                      <td class="text-danger  action">Delete</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </b-tab>

          <!-- Investment Approval Tab -->
          <b-tab
            class="ml-3"
            :title-link-class="active1"
            title="Investment Approval"
          >
            <div class="line mt-3 mb-0"></div>
            <div class="user-title card mt-3">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Investment Request</div>
                  <div>
                    <div class="input-group float-right">
                      <input
                        type="search"
                        placeholder="Search Investment"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr style="background:#14899b; color:whitesmoke">
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Duration</th>
                      <th>Status</th>
                      <th>Date Applied</th>
                      <th>View</th>
                      <th>Delete</th>
                    </tr>

                    <tr v-for="(one, index) in 9" :key="index">
                      <td>Ubaka Ugonna</td>
                      <td>N 3,000</td>
                      <td>6 Months</td>
                      <td>Pending</td>
                      <td>Something</td>
                      <td class="text-primary action"  @click="Investment">View</td>
                      <td class="text-danger  action">Delete</td>
                    </tr>
                  </table>
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
import { clientService } from "../../../services/ClientServices/client.services";
import Loader from "../../../utils/vue-loader/loader.vue";
export default {
  name: "Approvals",
  components: {
    Sidenav,
    Headernav,
    Loader
  },
  data() {
    return {
      loading: false,
      Customers: []
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
    Account(index) {
      let customer = this.Customers[index];
      this.$store.commit("SET_USER_DETAILS", customer)
      this.$router.push("/Admin/Approvals/Details");
    },
    Loan() {
      this.$router.push("/Admin/Approvals/Details?p=2");
    },
    Investment() {
      this.$router.push("/Admin/Approvals/Details?p=3");
    },
     //get all customers
    async getCustomers() {
      this.loading = true;
      await clientService
        .getCustomers()
        .then(res => {
          this.$toastr.s("Fetched Succesfully");
          this.Customers = res;
          window.console.log(this.Customers);
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
    this.getCustomers();
  }
};
</script>

<style lang="scss">
.action:hover {
  text-decoration: underline;
  cursor: pointer;
}

.modal-head {
  color: green;
}
</style>
