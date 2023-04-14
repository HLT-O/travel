<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
  export default{
  components: {
    Nav,
    Footer
  }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
</style>
