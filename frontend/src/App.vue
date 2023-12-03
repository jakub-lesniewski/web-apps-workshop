<template>
  <div>
    <Navbar />

    <main class="flex h-screen items-center justify-center">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
