<template>
    <HeaderComponent></HeaderComponent>

    <div class="small-container single-product">


    <h2 class="title" >Featured Products</h2>
    <div class="row">
        <div class="col-3 images-div">
            <p>Home / Shoes</p>
            <img src="images/product-11.jpg" width="100%" id="productImg">


            <div class="small-img-row">
                <div class="small-img-col">
                    <img src="images/product-11.jpg" width="100%" class="small-img">
                </div>
                <div class="small-img-col">
                    <img src="images/product-5.jpg" width="100%" class="small-img">
                </div>
                <div class="small-img-col">
                    <img src="images/product-11.jpg" width="100%" class="small-img">
                </div>
                <div class="small-img-col">
                    <img src="images/product-5.jpg" width="100%" class="small-img">
                </div>
            </div>
        </div>

        <div class="col-2 information-div">
            <h1>Product name</h1>
            <h4>$50.00</h4>
            <h5 class="discount-price" style="text-decoration: line-through;">$38.40</h5>

            <h2>Size : </h2>
            <div class="size-options">
                <label><input type="radio" name="size" value="S"> S</label>
                <label><input type="radio" name="size" value="M"> M</label>
                <label><input type="radio" name="size" value="L"> L</label>
                <label><input type="radio" name="size" value="XL"> XL</label>
            </div>
            <a href="cart.html" class="btn">Add to Cart</a>
            <a href="cart.html" class="btn">Add to Favorites</a>
            <h3>Product Details <i class="fa fa-indent"></i></h3>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci ex quam perspiciatis esse
                temporibus quas at numquam, quidem id, reprehenderit ratione aliquid nobis repudiandae rerum? Perferendis
                explicabo voluptas corporis!</p>
        </div>

    </div>
    </div>

    <FooterComponent></FooterComponent>
</template>
  

<script>
// import './assets/css/style.css';
import FooterComponent from '../components/Footer.vue';
import HeaderComponent from '../components/Header.vue';

export default {
    name: 'ProductDetailView',
    components: {
        FooterComponent,
        HeaderComponent,
    },
};
</script>

<style scoped></style>