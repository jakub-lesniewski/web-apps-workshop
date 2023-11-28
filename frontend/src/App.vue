<template>
  <div>
    <nav class="flex justify-center gap-10 border p-5">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/start">Start</router-link>
    </nav>

    <main class="flex h-screen items-center justify-center">
      <router-view />
    </main>
  </div>
</template>
