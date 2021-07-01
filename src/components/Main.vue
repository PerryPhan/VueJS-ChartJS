<template>
  <main>
    <div class="container-fuild px-3">
      <div class="row">
        <div class="col-4 table component p-0 m-0 bg-white">
          <!-- 1 ------------------- COMPONENT : TABLE ----------------- -->
          <div class="table-container p-3">
            <div class="table">
              <!--1.1 ---------------COMPONENT : HEADER OF THE TABLE------------- -->
              <div class="theader">
                <div>Date</div>
                <div>Current price</div>
                <div>Predicted price</div>
              </div>
              <hr />
              <!--1.2 ---------------COMPONENT : BODY OF THE TABLE------------- -->
              <div class="tbody">
                <div v-for="col in tableData" :key="col.id">
                  <!-- FETCH HERE -->
                  <div class="tr" :class="col.optionClass">
                    <div>{{ col.date }}</div>
                    <div>{{ col.currentPrice == null ? null : formatter.format(col.currentPrice) }}</div>
                    <div>{{ col.predictPrice == null ? null : formatter.format(col.predictPrice)  }}</div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- col -->

        <div class="col-8">
          <!-- 2 ------------------- COMPONENT : CHART ----------------- -->
          <div class="chart-container component h-100 bg-white">
            <div class="chart ">
              <div class="row">
                <!-- 2.1 ------------------- COMPONENT : LINECHART ----------------- -->
                <div class="col appear">
                  <line-chart :chartdata="data" :options="chartOptions" />
                </div>
              </div>
            </div>
            <!-- 2.2 ------------------- COMPONENT : GOTOWWW----------------- -->
            <div
              class="text-container mt-3 pt-3 pl-2 d-flex align-items-center"
            >
              <div class="text appear">
                {{ this.information }}
              </div>
              <a :href="link" class="btn btn-danger appear">See more</a>
            </div>
          </div>
        </div>
        <!-- col -->
      </div>
      <!-- row -->
    </div>
    <!-- container-fuild -->
  </main>
</template>

<script>
import LineChart from "./LineChart.vue";
export default {
  components: { LineChart },
  name: "Main",
  props: ["detail"],
  data: function() {
    return {
      id: "",
      name: "",
      image: "",
      information: "",
      // Table
      tableData: [], // <- Whole data of the table
      displayData: [],
      // Formatter
      formatter: null, // <- Format int to Money String, need this line to call in v-for as item
      // Chart Generator Params
      formattedLabels: [],
      currentPrices: [], // <- Without it, won't update
      predictPrices: [], // <- Without it, won't update
    //   test: [10000, 50000, 60000, 70000, 60000, 10000, 'null', 10000, 'null' ], // <- Test case null
      // 70, 80, 111, 129, 135, 209, 247, 372, 400, 426          // <- Test case
      // Chart Generator
      data: {
        // <- X Axis
        labels: [],
        datasets: [
          {
            data: [], // <- Y Axis
            label: "Current price",
            borderColor: "#3e95cd",
            fill: false,
            tension: 0.1,
          },
          {
            data: [],
            label: "Predicted price",
            borderColor: "#8e5ea2",
            fill: false,
            tension: 0.1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
      },
    };
  },
  created() {
    if (!this.detail) return;
    // For easy call
    this.moneyFormatterInit();
    // Easy call
    this.id = this.detail.id;
    this.name = this.detail.name;
    this.image = this.detail.image;
    this.tableData = this.detail.tableData; // <- Watching

    this.information = this.detail.information;
    this.link = this.detail.link;
  },
  mounted() {
    // this.displayData = this.tableData;
    // this.displayData.reverse();
    // this.update();
  },
  methods: {
    moneyFormatterInit: function() {
      this.formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        // 2 more option :
        //minimumFractionDigits: 0, // try to know how it work
        //maximumFractionDigits: 0, // try to know how it work
      });
    },
    setLabels: function(labels, needUpdate) {
      this.formattedLabels = labels;
      if (needUpdate) this.data = this.getData();
    },
    setDataSet: function(label, newDataArray, needUpdate) {
      if (!label || label.trim() === "") return;
      this.data.datasets.find((obj) => obj.label === label).data = newDataArray;
      if (needUpdate) this.data = this.getData();
    },
    getData: function() {
      return {
        labels: this.formattedLabels,
        datasets: [...this.data.datasets],
      };
    },
    update: async function() {
      // DO these things to config data, later will pass to LineChart, / 1000 because it has limit.
      var ratio = 1;
      this.displayData = [... this.tableData ];
      this.displayData.reverse();
      
      // ---------------------------------------------------------------------------------
      this.currentPrices = await this.displayData.map(
        (obj) => obj.currentPrice = obj.currentPrice!=null ? obj.currentPrice / ratio : null
      );
      this.predictPrices = await this.displayData.map(
        (obj) => obj.predictPrice = obj.predictPrice!=null ? obj.predictPrice / ratio : null
      );
      console.log( this.predictPrices );
      // ---------------------------------------------------------------------------------
      await this.setDataSet("Current price", this.currentPrices);
      await this.setDataSet("Predicted price", this.predictPrices);
      this.setLabels(this.displayData.map((obj) => obj.date));
      // ---------------------------------------------------------------------------------
      await setTimeout(() => {
        this.data = this.getData();
      }, 1000);
      // <- Update Data Array.
    },
  },
  watch: {
    tableData: async function() {
      this.update();
    },
  },
};
</script>

<style></style>
