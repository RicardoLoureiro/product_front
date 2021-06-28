<template>
  <button type="button" :class="btnClass" @click.prevent="eventButton">
    <label :class="labelClass">
      {{ label }}
    </label>
  </button>
</template>

<script>

export default {
  components: {
  },
  props: {
    label: {
      type: String,
    },
  },
  computed: {
    btnClass: () => ({
      "bg-herbal": true,
      "hover:bg-herbal-hover": true,
      "focus:ring-herbal": true,
      "rounded-lg": true,
      "p-2": true,
      "cursor-pointer": true,
    }),
    labelClass: () => ({
      "text-lg": true,
      "font-bold": true,
      "text-white": true,
      "cursor-pointer": true,
    }),
  },
  methods: {
    eventButton(){
      this.$emit("onClick");
    }
  }
};
</script>
