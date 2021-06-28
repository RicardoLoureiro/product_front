<template>
  <div>
    <div :class="classesModal">
      <div class="relative w-full my-6 mx-auto max-w-6xl">
        <!--content-->
        <div :class="classesContent">
          <!--header-->
          <div :class="classesHeader">
            <slot name="header"></slot>
          </div>
          <!--body-->
          <div class="relative px-6 py-3 flex-auto">
            <slot name="body" />
          </div>
          <!--footer-->
          <div class="p-6">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  props:{
  },
  computed: {
    classesModal() {
      return {
        "overflow-x-hidden": true,
        "overflow-y-auto": true,
        fixed: true,
        "inset-0": true,
        "z-50": true,
        "outline-none": true,
        "focus:outline-none": true,
        "justify-center": true,
        "items-center": true,
        flex: true,
      };
    },
    classesContent() {
      return {
        "border-0": true,
        "rounded-lg": true,
        "shadow-lg": true,
        relative: true,
        flex: true,
        "flex-col": true,
        "w-full": true,
        "bg-white": true,
        "outline-none": true,
        "focus:outline-none": true,
      };
    },
    classesHeader() {
      return {
        "px-6": true,
        "pt-6": true,
        "border-solid": true,
        "border-blueGray-200": true,
      };
    },
    classesBody() {
      return {
        "border-0": true,
        "rounded-lg": true,
        "shadow-lg": true,
        relative: true,
        flex: true,
        "flex-col": true,
        "w-full": true,
        "bg-white": true,
        "outline-none": true,
        "focus:outline-none": true,
      };
    },
    classesFooter() {
      return {
        flex: true,
        "items-center": true,
        "justify-end": true,
        "p-6": true,
        "border-t": true,
        "border-solid": true,
        "border-blueGray-200": true,
        "rounded-b": true,
      };
    },
  },
};
</script>
