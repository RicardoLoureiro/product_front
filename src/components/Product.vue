<template>
  <div :class="divClass">
    <div>
      <label class="font-bold">
        {{ this.product.name }}
      </label>
    </div>
    <div>
      <label>
        R$ {{ this.product.price }}
      </label>
    </div>
    <div>
      <label>
        Qtd. {{ this.product.quantity }}
      </label>
    </div>
    <div>
      <label>
        {{ this.product.brand.name }} 
      </label>
    </div>
    <div>
      <BaseButton label="Edit" @onClick="openModal"></BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  components:{
    BaseButton,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {
          id: "1",
          name: "Product Default Name",
          price: "1500,00",
          quantity: "5",
          brand: {"name": "Xiaomi"},
        };
      },
    },
  },
  computed: {
    divClass: () => ({
      "w-full": true,
      "h-28": true,
      "hover:shadow-box": true,
      "rounded-xl": true,
      "grid": true,
      "grid-cols-5": true,
      "gap-4": true,
      "content-center": true,
      "p-6": true,
      "flex": true,
      "shadow-lg": true,
      "hover:shadow-2xl": true,
      "border": true,
      "border-gray-300": true,
      "items-center": true,
      "m-4": true,
      "max-w-screen-md": true,
    }),
  },
  methods: {
    openModal(){
      this.$emit("openModal", { product: this.product, edit: true });
    }
  }
}

</script>
