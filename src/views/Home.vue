<template>
        <HeaderComponent></HeaderComponent>
        <h1>Hello Home</h1>
        <FooterComponent></FooterComponent>
</template>
  

<script>
// import './assets/css/style.css';
import FooterComponent from '../components/Footer.vue';
import HeaderComponent from '../components/Header.vue';

export default {
    name: 'HomeView',
    components: {
        FooterComponent, 
        HeaderComponent, 
    },
};
</script>

<style scoped></style>