<template>
  <div class="main-container">
    <Headernav />
    <Sidenav />
    <div class="dashboard-container">
      <!-- <div class="side-content border"></div> -->
      <div class="main-content">
        <!-- <div class="content-wrapper"> -->
        <div class="dashboard-title row card mb-5">
          <div class="col-12">
            Dashboard
          </div>
        </div>
        <div class="dashboard-cards row mb-2 mt-n4 ">
          <div class=" card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:salmon">350</p>
            <p class="item2">Total Agents</p>
            <p class="line1"></p>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <div class="card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:limegreen">350</p>
            <p class="item2">Total Deposits</p>
            <p class="line2"></p>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <div class="card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:violet">350</p>
            <p class="item2">Total Loan Amount</p>
            <p class="line3"></p>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <!-- <div class="card-item col-md-3 col-12 mb-3">
            hhhhhhh
          </div> -->
          <!-- </div> -->
        </div>

        <!-- Performance -->
        <div class="dashboard-title row card mb-4 m">
          <div class="col-12">
            Performance
          </div>
        </div>

        <div class="dashboard-title performance-wrapper row card mb-4">
          <div class="col-12 mb-3">
            Monthly Performance
          </div>
          <div class="performance row">
            <div class="col-md-6 border-right">
              <p>Target on Deposit : N1,700,00</p>
              <p>Target on Account Created : 400</p>
              <p>MTD Deposit : N700,000</p>
              <p>MTD Account Created : 2,000</p>
              <p>Number of Agents : 80</p>
            </div>
            <div class="col-md-6">
              Gross Performance Bar

              <Chart />
            </div>
          </div>
        </div>

        <div class="dashboard-title row card mb-0">
          <div class="col-12">
            <p class="mb-3">Agent Individual Performance</p>
            <div class="recent-transactions table-responsive">
              <table>
                <tr>
                  <th>Agent ID</th>
                  <th>Name</th>
                  <th>MTD Deposit</th>
                  <th>Deposit Target</th>
                  <th>Account Created Target</th>
                  <th>MTD Account Created</th>
                  <th>Performance Bar</th>
                </tr>

                <tr v-for="(one, index) in 9" :key="index">
                  <td>10393939</td>
                  <td>Ugonna</td>
                  <td>Ubaka</td>
                  <td>Again</td>
                  <td>Something</td>
                  <td>Account</td>
                  <td>
                    <b-progress
                      :value="value"
                      :max="max"
                      show-progress
                      variant="info"
                      animated="true"
                    ></b-progress>
                  </td>
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
import Chart from "../../components/Chart/chart.vue";
import Sidenav from "../../components/SideNav/SideNav1.vue";
import Headernav from "../../components/HeaderNav/HeaderNav1.vue";
export default {
  name: "Dashboard",
  components: {
    Sidenav,
    Headernav,
    Chart
  },
  data() {
    return {
      value: 50,
      max: 100
    };
  }
};
</script>

<style></style>
