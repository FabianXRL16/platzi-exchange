<template>
  <button
    @click="onClick()"
    class="border border-yellow-500 text-yellow-500 font-medium px-4 py-2 rounded-full"
  >
    <beat-loader :loading="isLoading" :color="'#F59E0B'" :size="8" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PxButtom",
  props:{
    isLoading:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
