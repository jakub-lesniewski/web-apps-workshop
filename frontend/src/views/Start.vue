<template>
  <form class="flex flex-col gap-5 border p-8 text-lg">
    <CallHistory :numbersList="numbersList" @clean-list="cleanNumbersList" />
    <div>We will call you within 26 seconds!</div>
    <input
      v-model="number"
      id="form-number"
      ref="phoneNumberInput"
      placeholder="phone number"
      class="border p-2 pl-3 focus:outline-none focus:ring-1 focus:ring-black"
    />
    <button
      @click="call"
      type="text"
      class="border p-2 tracking-wider transition-all hover:bg-black hover:text-white"
    >
      Call now!
    </button>

    <ErrorMessage :errorMessage="errorMessage" />
  </form>
</template>

<script>
import CallHistory from "../components/CallHistory.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import { isPhoneNumber, isRootNumber } from "../utils/helpers";

export default {
  components: {
    CallHistory,
    ErrorMessage,
  },
  data() {
    return {
      number: "",
      errorMessage: "stuff",
      numbersList: JSON.parse(localStorage.getItem("numbersList")) || [
        "123123123",
      ],
    };
  },
  methods: {
    async call(event) {
      event.preventDefault();

      if (!isPhoneNumber(this.number)) {
        this.errorMessage = "Incorrect number format!";

        return;
      } else if (isRootNumber(this.number)) {
        this.errorMessage = "Cannot call root number";

        return;
      } else {
        this.numbersList.push(this.number);
        localStorage.setItem("numbersList", JSON.stringify(this.numbersList));

        try {
          let responseStream = await fetch("http://localhost:3000/call/", {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ number: this.number }),
          });

          let response = await responseStream.json();

          this.$router.push({
            name: "ringing",
            params: { callsId: response.id },
          });
        } catch (error) {
          console.error("Error making the call:", error);
          this.errorMessage = "An error occurred while making the call.";
        }
      }
    },
    cleanNumbersList() {
      // Clear the numbersList array
      this.numbersList = [];

      // Clear the local storage
      localStorage.removeItem("numbersList");
    },
  },
  cleanNumbersList() {
    this.numbersList = [];
    localStorage.removeItem("numbersList");
  },

  mounted() {
    this.$refs.phoneNumberInput.focus();
  },
};
</script>
