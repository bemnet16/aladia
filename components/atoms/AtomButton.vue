<template>
  <button
    :class="[
      'flex items-center justify-center gap-4 rounded  py-1.5 transition-all active:scale-95',
      buttonVariant,
      sizeClass,
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["default", "destructive", "outline", "ghost"].includes(value);
      },
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => {
        return ["sm", "md", "lg"].includes(value);
      },
    },
  },
  computed: {
    buttonVariant() {
      switch (this.variant) {
        case "destructive":
          return "bg-red-600 text-white border-transparent hover:bg-red-700";
        case "outline":
          return "border-gray-500 text-gray-500 hover:bg-gray-100";
        case "ghost":
          return "bg-transparent text-gray-500 hover:bg-gray-100";
        default:
          return "bg-black text-white  border-transparent hover:bg-gray-800";
      }
    },
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "text-sm px-2 py-1";
        case "lg":
          return "text-lg px-4 py-2";
        default:
          return "text-md px-3 py-1.5";
      }
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
