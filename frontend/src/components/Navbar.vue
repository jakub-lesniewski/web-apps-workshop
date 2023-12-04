<template>
  <nav class="fixed flex w-screen justify-center gap-10 border p-3 text-xl">
    <router-link
      :to="{ path: '/' }"
      :class="{
        'scale-125 transition-transform duration-300': $route.path === '/',
      }"
    >
      Start
    </router-link>
    <router-link
      :to="{ path: '/about' }"
      :class="{
        'scale-125 transition-transform duration-300': $route.path === '/about',
      }"
    >
      About
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
