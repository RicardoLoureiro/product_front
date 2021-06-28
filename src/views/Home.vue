<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <BrandModal />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BrandModal from "@/components/AppBrandModal.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    BrandModal,
  },
};
</script>
