<template>
  <div>
    <Header :detail="headerDetail.coinInfor"></Header>
    <Main :detail="mainDetail.coinInfor"></Main>
    <Footer :detail="footerDetail.coinInfor"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import axios from "axios"
export default {
  components: { Header, Main, Footer },
  data: function () {
    return {
      id: "coin-02",
      headerDetail: {
        coinInfor:
          // EthereumCoin Information
          {
            id: "coin-02",
            name: "Ethereum",
            shortname: "ETC",
            image: "icon_ethereum.png",
            pricearea: {
              title: "Price",
              value: "$35,888.00",
            },
            grossarea: {
              title: "Gross",
              value: "4.29%",
            },
            switchcoin: {
              appendClass: "bitcoin",
              name: "BitCoin",
              next_image: "icon_bitcoin.png",
              route: "/bitcoin"
            },
          },
      },
      mainDetail: {
        coinInfor:
          // EthereumCoin Information
          {
            id: "coin-02",
            name: "Ethereum",
            image: "icon_ethereum.png",
            tableData: [],
            information: `Ether is the cryptocurrency built 
            on top of the open source Ethereum blockchain, 
            which runs smart contracts. The cryptocurrency acts 
            as a fuel that allows smart contracts to run unlike 
            bitcoin, which is meant to be a unit of currency on a 
            peer-to-peer payment network... `,
            link : 'https://www.coindesk.com/price/ethereum',
          },
      },
      footerDetail: {
        coinInfor: {
          id: "coin-02",
          message: "Ethereum page was designed and created by Phan Dai ",
        },
      },
    };
  },
  methods: {
    init : async function(){
    let cloneData = axios.get('http://112.78.4.49/api/getDataETH');
    let result = cloneData.then(response =>response.data);
    let list = this.mainDetail.coinInfor.tableData;

    await result.then(function(response){
      response.forEach(element => {
        list.push({
          id: element.id,
          date: element.datetime_eth,
          currentPrice: element.closing_price,
          predictPrice: element.predict_hybrid_arima_lstm == null ? null : element.predict_hybrid_arima_lstm *10000,
          optionClass: "",
        });
      });
    })
    }

  },
  created() {
    this.init();
  },
  mounted() {
   
  },
};
</script>

<style>
</style>