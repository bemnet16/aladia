<template>
  <button :class="['my-button', buttonType]" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      default: "primary", // Default style
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.my-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.my-button.primary {
  background-color: #007bff; /* Blue */
}

.my-button.secondary {
  background-color: #6c757d; /* Gray */
}
</style>
