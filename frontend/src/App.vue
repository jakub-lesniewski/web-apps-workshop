<template>
  <div>
    <Navbar />
    <CallHistory />

    <main class="flex h-screen items-center justify-center">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import CallHistory from "./components/CallHistory.vue";

export default {
  name: "App",
  components: {
    Navbar,
    CallHistory,
  },
};
</script>
