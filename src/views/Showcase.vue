<template>
  <div class="grid mx-8">
    <div class="justify-self-end">
      <BaseButton label="Adicionar Produto" @onClick="openCreateProductModal"></BaseButton>
    </div>
    <div class="justify-self-center">
      <Product v-for="product in dataProducts" :key="product.id" :product="product" @openModal="openEditProductModal"/>
      <BrandModal :active="activeBrandModal" @onClose="closeBrandModal" />
      <ProductModal :active="activeProductModal" @onClose="closeProductModal" :product="dataProduct" />
    </div>
  </div>
</template>

<script>
import { getProducts } from "@/service/ProductApi.js";
import BrandModal from "@/components/BrandModal.vue";
import ProductModal from "@/components/ProductModal.vue";
import Product from "@/components/Product.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BrandModal,
    Product,
    ProductModal,
    BaseButton,
  },
  data: () => ({
    activeBrandModal: false,
    activeProductModal: false,
    dataProducts: null,
    dataProduct: null,
  }),
  created(){
    this.loadDataProducts();
  },
  methods:{
    closeBrandModal(){
      this.activeBrandModal = false;
    },
    openBrandModal(){
      this.activeBrandModal = true;
    },
    closeProductModal(){
      this.activeProductModal = false;
    },
    openCreateProductModal(){
      this.activeProductModal = true;
    },
    openEditProductModal(params){
      this.activeProductModal = true;
      this.dataProduct = params.product;
    },
    loadDataProducts() {
      getProducts()
        .then((response) => {
          this.dataProducts = response.data.products;
        })
        .catch((e) => {
          console.log("error", e); //TODO: tratar esse error
        });
    },
  }
};
</script>
