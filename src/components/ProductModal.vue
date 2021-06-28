<template>
  <BaseModal v-if="active">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start text-lg font-bold">
          Produto
        </div>
        <div class="justify-self-end">
          <button class="rounded-full w-8 h-8 border-black border" type="button" @click.prevent="close">X</button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-rols-2">
        <div class="grid grid-cols-2">
          <div>
            <label class="text-gray-500 font-bold">
              Nome do Produto
            </label>
            <input type="text" :class="inputClass" v-model="form.name" />
          </div>
          <div>
            <label class="text-gray-500 font-bold">
              Marca
            </label>
            <select :class="inputClass" v-model="form.brand_id">
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div>
            <label class="text-gray-500 font-bold">
              Preço
            </label>
            <input type="text" :class="inputClass" v-model="form.price" />
          </div>
          <div>
            <label class="text-gray-500 font-bold">
              Quantidade em Estoque
            </label>
            <input type="text" :class="inputClass" v-model="form.quantity" />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <BaseButton label="Teste Button" />
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue'
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseModal,
    BaseButton,
  },
  props:{
    active: {
      type: Boolean,
      default: false,
    },
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
  data: () => ({
    form: {
      "name": '',
      "brand_id": '',
      "price": '',
      "quantity": '',
    }
  }),
  computed: {
    inputClass: () => ({
      "rounded": true,
      "w-full": true,
      "border": true,
      "border-black": true,
      "px-3": true,
    }), 
  },
  methods: {
    close(){
      this.$emit("onClose", false);
    },
    submit(){
      
    }
  }
}
</script>