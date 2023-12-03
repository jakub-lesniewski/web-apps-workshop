<template>
  <div
    class="fixed -right-52 top-1/4 flex cursor-default items-center transition-transform duration-300 ease-in-out hover:-translate-x-52"
  >
    <div class="border border-r-0 p-5 text-2xl">&larr;</div>
    <div class="flex flex-col items-center gap-3 border p-5">
      <h1 class="text-center text-xl font-semibold tracking-wider">
        Call History
      </h1>

      <ul
        class="mt-5 flex max-h-64 w-40 cursor-pointer flex-col items-center overflow-y-auto border-t text-lg"
      >
        <li
          class="border p-1"
          v-for="(call, index) in numbersList"
          :key="index"
        >
          {{ call }}
        </li>
      </ul>
      <button
        type="button"
        class="border p-2 text-center text-xl tracking-wider transition-all hover:bg-black hover:text-white"
        @click="cleanList"
      >
        Clean list
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallHistory",
  props: {
    numbersList: Array,
  },
  methods: {
    cleanList() {
      this.$emit("clean-list");
    },
  },
};
</script>
