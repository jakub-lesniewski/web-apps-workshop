<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
  props: {
    onClick: Function,
  },
};
</script>
