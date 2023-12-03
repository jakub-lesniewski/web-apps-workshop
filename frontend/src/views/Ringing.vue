<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl">You are about to be connected with a consultant.</h1>
    <div class="loader"></div>
    <button
      @click="this.$router.push(`/`)"
      class="border p-2 text-xl tracking-wider transition-all hover:bg-black hover:text-white"
    >
      Abort
    </button>
  </div>
</template>
