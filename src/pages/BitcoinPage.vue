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
      id: "coin-01",
      headerDetail: {
        coinInfor:
          // BitCoin Information
          {
            id: "coin-01",
            name: "BitCoin",
            shortname: "BTC",
            image: "icon_bitcoin.png",
            pricearea: {
              title: "Price",
              value: "$37,498.00",
            },
            grossarea: {
              title: "Gross",
              value: "3.19%",
            },
            switchcoin: {
              appendClass: "ethereum",
              name: "Ethereum",
              next_image: "icon_ethereum.png",
              route: "/ethereum",
            },
          },
      },
      mainDetail: {
        coinInfor:
          // BitCoin Information
          {
            id: "coin-01",
            name: "BitCoin",
            image: "icon_bitcoin.png",
            tableData: [
              {
                id: 1,
                date: "01/06/2021",
                currentPrice: 120000,
                predictPrice: 90000,
                optionClass: "down",
              },
              {
                id: 2,
                date: "02/06/2021",
                currentPrice: 110000,
                predictPrice: 120000,
                optionClass: "up",
              },
              {
                id: 3,
                date: "03/06/2021",
                currentPrice: 80000,
                predictPrice: 110000,
                optionClass: "up",
              },

              {
                id: 4,
                date: "04/06/2021",
                currentPrice: 89000,
                predictPrice: 80000,
                optionClass: "down",
              },
              {
                id: 5,
                date: "05/06/2021",
                currentPrice: 110000,
                predictPrice: 89000,
                optionClass: "down",
              },
              {
                id: 6,
                date: "06/06/2021",
                currentPrice: 130000,
                predictPrice: 110000,
                optionClass: "down",
              },

              {
                id: 7,
                date: "07/06/2021",
                currentPrice: 50000,
                predictPrice: 130000,
                optionClass: "up",
              },
              {
                id: 8,
                date: "08/06/2021",
                currentPrice: 80000,
                predictPrice: 50000,
                optionClass: "down",
              },
              {
                id: 9,
                date: "09/06/2021",
                currentPrice: 70000,
                predictPrice: 80000,
                optionClass: "up",
              },
            ],
            information: `Bitcoin was the first cryptocurrency to successfully record transactions on a secure, 
            decentralized blockchain-based network. Launched in early 2009 by its pseudonymous creator Satoshi Nakamoto, 
            Bitcoin is the largest cryptocurrency measured by market capitalization and amount of data stored on its blockchain...`,
            link : 'https://www.coindesk.com/price/bitcoin',
          },
      },
      footerDetail: {
        coinInfor: {
          id: "coin-01",
          message: "Bitcoin page was designed and created by Phan Dai ",
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