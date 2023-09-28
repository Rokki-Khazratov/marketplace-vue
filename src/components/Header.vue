<template>
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <a href="index.html">LOGO</a>
            </div>
            <nav>
                <ul id="MenuItems">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="account.html">Account</a></li>

                </ul>
            </nav>
            <a href="cart.html"><img src="images/cart.png" width="30px" height="30px"></a>
            <img src="images/menu.png" class="menu-icon" onClick="menutoggle()">
        </div>

    </div>
</template>
 
<script>

export default {
    name: 'HeaderComponent',
};

</script>

<style>
</style>