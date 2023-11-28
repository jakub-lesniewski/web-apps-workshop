<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl">Call ended</h1>

    <button
      @click="$router.push(`/`)"
      class="border p-2 text-xl tracking-wider transition-all hover:bg-black hover:text-white"
    >
      Try again
    </button>
  </div>
</template>
