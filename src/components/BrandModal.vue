<template>
  <BaseModal v-if="active">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          Cadastrar Nova Marca
        </div>
        <div class="justify-self-end">
          <button type="button" @click.prevent="close">X</button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <input type="text" name="name" />
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
      default: true,
    },
  },
  computed: {
  },
  methods: {
    close(){
      this.$emit("onClose");
    },
  }
}
</script>