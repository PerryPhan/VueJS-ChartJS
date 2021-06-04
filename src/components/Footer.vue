<template>
    <footer class="container-fluid d-flex justify-content-center font-bold">
        {{this.message}}
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: ['detail'],
    data : function(){
        return{
            id: '',
            message: '',
        }
    },
    created(){
        if( !this.detail ) return;
        this.id = this.detail.id;
        this.message = this.detail.message;
    }
}
</script>

<style>

</style>