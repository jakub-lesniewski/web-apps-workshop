<template>
  <form class="flex flex-col gap-5 border p-8 text-lg">
    <div>We will call you within 26 seconds!</div>
    <input
      v-model="number"
      id="form-number"
      ref="phoneNumberInput"
      placeholder="phone number"
      class="border p-2 pl-3 focus:outline-none focus:ring-1 focus:ring-black"
    />
    <button
      @click="call()"
      class="border p-2 tracking-wider transition-all hover:bg-black hover:text-white"
    >
      Call now!
    </button>

    <div class="flex items-center gap-2 tracking-wider text-red-600">
      <img v-if="errorMessage" src="/error.svg" class="w-4" />
      {{ errorMessage }}
    </div>
  </form>
</template>

<script>
import { isPhoneNumber, isRootNumber } from "../utils/helpers";

export default {
  data() {
    return {
      number: "",
      errorMessage: "",
    };
  },
  methods: {
    async call() {
      event.preventDefault();

      if (!isPhoneNumber(this.number)) {
        this.errorMessage = "Incorrect number format!";

        return;
      }
      if (isRootNumber(this.number)) {
        this.errorMessage = "Cannot call root number";

        return;
      }

      let responseStream = await fetch("http://localhost:3000/call/", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ number: this.number }),
      });

      let response = await responseStream.json();
      this.$router.push({ name: "ringing", params: { callsId: response.id } });
    },
  },
  mounted() {
    this.$refs.phoneNumberInput.focus();
  },
};
</script>
