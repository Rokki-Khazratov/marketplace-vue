<template>
    <div>
        <HeaderComponent></HeaderComponent>


        <div class="small-container">
            <div class="row row-2">
                <h2>All Products</h2>
                <select>
                    <option>Default sorting</option>
                    <option>Sort by price</option>
                    <option>Sort by popularity</option>
                    <option>Sort by rating</option>
                    <option>Sort by sale</option>
                </select>
            </div>
            <div class="row">
                <div class="col-4 product-item">
                </div>
            </div>

            <div class="page-btn">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>&#8594;</span>
            </div>
        </div>

        <FooterComponent></FooterComponent>
    </div>
</template>
  

<script>
// import './assets/css/style.css';
import FooterComponent from '../components/Footer.vue';
import HeaderComponent from '../components/Header.vue';

export default {
    name: 'ProductsView',
    components: {
        FooterComponent, 
        HeaderComponent, 
    },
};
</script>

<style scoped></style>