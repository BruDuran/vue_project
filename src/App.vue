<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import NavBar from '@/shared/components/NavBar.vue';
</script>

<template>
  <div id="app">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
