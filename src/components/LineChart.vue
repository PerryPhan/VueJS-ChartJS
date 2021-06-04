<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: ["chartdata","options"],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  watch: {
    chartdata: function() {
      this.renderChart(this.chartdata, this.options)
    }
  },
  methods: {
    renderLineChart: function() {
      this.renderChart(this.chartdata, this.options) 
    }
  },
}
</script>