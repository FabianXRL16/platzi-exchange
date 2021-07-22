<template>
  <button
    @click="onClick()"
    class="border border-yellow-500 text-yellow-500 font-medium px-4 py-2 rounded-full"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PxButtom",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
