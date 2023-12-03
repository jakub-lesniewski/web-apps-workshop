<template>
  <div class="flex items-center gap-2 tracking-wider text-red-600">
    <img src="../../public/error.svg" class="w-4" /> {{ errorMessage }}
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: String,
  },
};
</script>
