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
            tableData: [
              {
                id: 1,
                date: "10/06/2021",
                currentPrice: 80000,
                predictPrice: 90000,
                optionClass: "up",
              },
              {
                id: 2,
                date: "11/06/2021",
                currentPrice: 90000,
                predictPrice: 120000,
                optionClass: "up",
              },
              {
                id: 3,
                date: "12/06/2021",
                currentPrice: 120000,
                predictPrice: 130000,
                optionClass: "up",
              },

              {
                id: 4,
                date: "13/06/2021",
                currentPrice: 130000,
                predictPrice: 80000,
                optionClass: "down",
              },
              {
                id: 5,
                date: "14/06/2021",
                currentPrice: 80000,
                predictPrice: 70000,
                optionClass: "down",
              },
              {
                id: 6,
                date: "15/06/2021",
                currentPrice: 70000,
                predictPrice: 90000,
                optionClass: "up",
              },

              {
                id: 7,
                date: "16/06/2021",
                currentPrice: 90000,
                predictPrice: 110000,
                optionClass: "up",
              },
              {
                id: 8,
                date: "17/06/2021",
                currentPrice: 130000,
                predictPrice: 100000,
                optionClass: "down",
              },
              {
                id: 9,
                date: "18/06/2021",
                currentPrice: 100000,
                predictPrice: 120000,
                optionClass: "up",
              },
            ],
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
  methods: {},
  created() {},
};
</script>

<style>
</style>