<template>
  <header class="component bg-white">
        <div class="container-fuild px-3">
            <div class="row">
                <!-- 1 ------------------- COMPONENT : COININFOR ----------------- -->
                <div class="col-3">
                    <div class="logobrand d-flex align-items-center">
                        <div class="logo">
                            <img src="../assets/img/logo.png" width="80px" alt="Logo">
                        </div>
                        <div class="brand">ManyCoins</div>
                    </div>     
                    <div class="coininfor d-flex align-items-center">
                        <img width="50px" :src="require(`@/assets/img/${image}`)">
                        <div class="name">{{this.name}}</div>
                        <div class="shortname">{{this.shortname}}</div>
                    </div>
                </div>
                
                <!-- 2 ------------------- COMPONENT : PRICEAREA ----------------- -->
                <div class="col-3 area pricearea">
                    <div class="title">{{this.pricearea.title}}</div>
                    <div class="value">{{this.pricearea.value}}</div>
                </div>
                
                <!-- 3 ------------------- COMPONENT : GROSSAREA ----------------- -->
                <div class="col-3 area grossarea">
                    <div class="title">{{this.grossarea.title}}</div>
                    <div class="value">{{this.grossarea.value}}</div>
                </div>
                
                <!-- 4 ------------------- COMPONENT : SWITCHCOIN ----------------- -->
                <div class="switchcoin d-flex align-items-center" :class="this.switchcoin.appendClass">
                    <button class="btn w-100 appear" @click="$router.push(switchcoin.route)">
                        <div class=" d-flex align-items-center">
                            <div class="logo"> 
                                <img :src="require(`@/assets/img/${this.switchcoin.next_image}`)" width="50px" alt="another_logo" >
                            </div>
                            <div class="name">{{this.switchcoin.name}}</div>
                        </div>
                    </button>
                </div>

            </div><!-- row -->
        </div><!-- container -->
  </header>
</template>

<script>
export default {
    name : "Header",
    props: ["detail"],
    data: function(){
      return{
          id: "",
          name: "",
          shortname: "",
          image: "",
          pricearea: {},
          grossarea: {},
          switchcoin: {},
      }  
    },
    created(){
        if( !this.detail ) return;
        this.id = this.detail.id;
        this.name = this.detail.name;
        this.shortname = this.detail.shortname;
        this.image = this.detail.image;
        this.pricearea = this.detail.pricearea;
        this.grossarea = this.detail.grossarea;
        this.switchcoin = this.detail.switchcoin;
    }
}
</script>

<style>

</style>