<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <Headernav :johndoe="name" />
    <Sidenav />
    <div class="dashboard-container">
      <!-- <div class="side-content border"></div> -->
      <div class="main-content">
        <!-- <div class="content-wrapper"> -->
        <div class="dashboard-title row card mb-5">
          <div class="col-12">
            Account Summary
          </div>
        </div>
        <div class="dashboard-cards row mb-2 mt-n4 ">
          <div class=" card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:salmon">
              &#8358; {{ formatAmount(USER_DATA.account.accounts[0].balance) }}
            </p>
            <p class="item2">Account Balance</p>
            <p class="line1"></p>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <div class="card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:limegreen">&#8358; 0</p>
            <p class="item2">Loan Running</p>
            <p class="line2"></p>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <div class="card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:violet">&#8358; 0</p>
            <p class="item2">Investment Running</p>
            <p class="line3"></p>
          </div>
        </div>

        <div class="dashboard-title row card mb-0">
          <!-- Main Table -->
          <div class="col-12">
            <div class="px-1 py-3 summary-top">
              <p class="mb-3">Recent Transactions</p>
              <!-- <div class="d-flex justify-content-between flex-wrap mb-3">
                <div class="select-input mb-3 mb-md-0">
                  <select
                    class="browser-default custom-select"
                    v-model="Account"
                    name="Repayment Mode"
                  >
                    <option value=""> -- Select Account -- </option>
                    <option
                      v-for="(account, index) in USER_DATA.account.accounts"
                      :key="index"
                      :value="account.number"
                      >{{ account.number }}
                    </option>
                  </select>
                </div>
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
                <div class="btn btn-info py-2 mt-3 mt-md-0">Get Records</div>
              </div> -->
            </div>
            <div class="recent-transactions table-responsive">
              <table>
                <tr>
                  <th>Reference Number</th>
                  <th>Account</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Agent</th>
                  <th>Date</th>
                  <!-- <th>Performance Bar</th> -->
                </tr>

                <tr v-for="(transaction, index) in Transactions" :key="index">
                  <td>{{ truncString(transaction._id) }}</td>
                  <td>{{ transaction.account }}</td>
                  <td>{{ transaction.type }}</td>
                  <td>&#8358; {{ formatAmount(transaction.amount) }}</td>
                  <td>
                    {{ transaction.agent.firstname }}
                    {{ transaction.agent.lastname }}
                    {{ transaction.agent.middlename }}
                  </td>
                  <td>{{ moment(transaction.createdAt) }}</td>
                  <!-- <td>
                    <b-progress
                      :value="value"
                      :max="max"
                      show-progress
                      variant="info"
                      animated="true"
                    ></b-progress>
                  </td> -->
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="side-content2 border"></div> -->
    </div>
  </div>
</template>

<script>
//import Chart from "../../../components/Chart/chart.vue";
import Sidenav from "../../../components/SideNav/SideNav2.vue";
import Headernav from "../../../components/HeaderNav/HeaderNav1.vue";
import { clientService } from "../../../services/ClientServices/client.services";
import { mapState } from "vuex";
import Loader from "../../../utils/vue-loader/loader.vue";
import moment from "moment";

export default {
  name: "Dashboard",
  components: {
    Sidenav,
    Headernav,
    Loader
    //Chart
  },
  data() {
    return {
      value: 50,
      max: 100,
      Account: "",
      Transactions: [],
      price: "",
      loading: true
    };
  },
  computed: {
    name() {
      return `${this.USER_DATA.firstname} ${this.USER_DATA.lastname}`;
    },
    ...mapState({
      USER_DATA: state => state.User.USER_DATA,
      token: state => state.User.AUTH_TOKEN
    })
  },
  methods: {
    //format amount
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    //moment
    moment(date) {
      return moment(date);
    },

    truncString(str) {
      return str.substring(3, 13);
    },
    async getTransaction() {
      this.loading = true;
      await clientService
        .getTransaction()
        .then(res => {
          this.Transactions = res;
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.getTransaction();
    this.$store.dispatch("AUTHORISE_USER", this.token);
  }
};
</script>

<style></style>
