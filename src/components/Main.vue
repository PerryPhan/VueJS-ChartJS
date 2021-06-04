<template>
  <main >
        <div class="container-fuild px-3">
            <div class="row">
                <div class="col-4 table component p-0 m-0 bg-white">
                    <!-- 1 ------------------- COMPONENT : TABLE ----------------- -->
                    <div class="table-container p-3">
                        <div class="table">
                            <!--1.1 ---------------COMPONENT : HEADER OF THE TABLE------------- -->
                              <div class="theader">
                                <div >Date</div>
                                <div >Current price</div>
                                <div >Predicted price</div>
                              </div>
                              <hr>
                            <!--1.2 ---------------COMPONENT : BODY OF THE TABLE------------- -->
                              <div class="tbody">
                                <div v-for="col in tableData" :key="col.id"> <!-- FETCH HERE -->
                                    <div class="tr" :class="col.optionClass">
                                        <div>{{col.date}}</div>
                                        <div>{{formatter.format(col.currentPrice)}}</div>
                                        <div>{{formatter.format(col.predictPrice)}}</div>
                                    </div>
                                    <hr>
                                </div>
                              </div>

                          </div>
                    </div>
                </div><!-- col -->

                <div class="col-8">
                    <!-- 2 ------------------- COMPONENT : CHART ----------------- -->
                    <div class="chart-container component h-100 bg-white">
                        <div class="chart ">
                            <div class="row">
                               <!-- 2.1 ------------------- COMPONENT : LINECHART ----------------- -->
                                <div class="col">
                                    <line-chart :chartdata="data" :options="chartOptions"/>
                                </div>
                            </div>
                        </div>
                        <!-- 2.2 ------------------- COMPONENT : GOTOWWW----------------- -->
                        <div class="text-container mt-3 pt-3 pl-2 d-flex align-items-center">
                            <div class="text appear">
                                {{this.information}}
                            </div>
                            <a :href="link" class="btn btn-danger appear"  >See more</a>
                        </div>
                    </div>
                </div><!-- col -->
                
            </div><!-- row -->
        </div><!-- container-fuild -->
    </main>
</template>

<script>
import LineChart from './LineChart.vue';
export default {
  components: { LineChart },
    name: "Main",
    props: ['detail'],
    data: function(){
        return{
            id: '',
            name: "",
            image: "",
            information:'',
            // Table
            tableData: [],  // <- Whole data of the table
            // Formatter 
            formatter:null, // <- Format int to Money String, need this line to call in v-for as item
            // Chart Generator Params
            formattedLabels: [],
            currentPrices: [], // <- Without it, won't update
            predictPrices: [], // <- Without it, won't update
                            // test: [70, 95, 100, 120, 257, 271, 300, 321, 383, 450], // <- Test case
                            // 70, 80, 111, 129, 135, 209, 247, 372, 400, 426          // <- Test case
            // Chart Generator
            data:{
                labels: // <- X Axis
                [],
                datasets: [ // <- Y Axis
                    {
                        data: [],
                        label: 'Current price',
                        borderColor: '#3e95cd',
                        fill: false,
                        tension: 0.1,
                    }, {
                        
                        data: [],
                        label: 'Predicted price',
                        borderColor: '#8e5ea2',
                        fill: false,
                        tension: 0.1,
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,  
            }
        }
    },
    created(){
        if( !this.detail ) return;
        // For easy call 
        
        this.moneyFormatterInit();
        this.id = this.detail.id ;
        this.name = this.detail.name;
        this.image = this.detail.image;
        this.tableData = this.detail.tableData;
        this.information = this.detail.information;
        this.link = this.detail.link;
    },
    async mounted(){
        // DO these things to config data, later will pass to LineChart, / 1000 because it has limit.
        // ---------------------------------------------------------------------------------
        this.currentPrices = await this.tableData.map( (obj) => obj.currentPrice/1000 ); 
        await this.setDataSet('Current price',this.currentPrices);
        this.predictPrices = await this.tableData.map( (obj) => obj.predictPrice/1000 ); 
        await this.setDataSet('Predicted price',this.predictPrices);
        this.setLabels(['1/6/2021','2/6/2021','3/6/2021','4/6/2021','5/6/2021','6/6/2021']);
        // ---------------------------------------------------------------------------------
        await setTimeout(() => { this.data = this.getData(); }, 1000);
         // <- Update Data Array.
    },
    methods: {
        moneyFormatterInit : function(){
            this.formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                // 2 more option :
                //minimumFractionDigits: 0, // try to know how it work 
                //maximumFractionDigits: 0, // try to know how it work 
            });
        },
        setLabels : function( labels , needUpdate ){
            this.formattedLabels = labels;
            if(needUpdate) this.data=this.getData();
        },
        setDataSet : function( label , newDataArray , needUpdate ){
            if( !label || label.trim() === "" ) return;
            this.data.datasets.find( (obj) => obj.label === label ).data = newDataArray
            if(needUpdate) this.data=this.getData();
        },
        getData : function(){
            return  {   
                labels: this.formattedLabels,
                datasets: [
                ...this.data.datasets, 
                ]
            };
        }
    },
}
</script>

<style>

</style>