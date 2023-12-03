<template>
  <div class="flex flex-col items-center gap-4">
    <h1 class="text-3xl">Call in progress</h1>
    <p class="text-4xl">{{ timer }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: new Date().getTime(),
      timerInterval: null,
      elapsedTime: 0,
    };
  },
  computed: {
    timer() {
      const seconds = Math.floor(this.elapsedTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;

      return `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`;
    },
  },
  mounted() {
    this.timerInterval = setInterval(() => {
      this.elapsedTime = new Date().getTime() - this.startTime;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timerInterval);
  },
};
</script>
