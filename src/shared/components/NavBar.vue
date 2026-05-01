<template>
  <header class="bg-slate-900 text-white shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
      <div>
        <router-link to="/" class="text-xl font-semibold tracking-tight hover:text-slate-200">
          PhotoVideo App
        </router-link>
      </div>
      <nav class="flex items-center gap-3">
        <router-link
          to="/"
          class="px-3 py-2 rounded-lg transition hover:bg-slate-700"
          active-class="bg-slate-700"
        >
          Inicio
        </router-link>
        <router-link
          to="/photos"
          class="px-3 py-2 rounded-lg transition hover:bg-slate-700"
          active-class="bg-slate-700"
        >
          Fotos
        </router-link>
        <router-link
          to="/videos"
          class="px-3 py-2 rounded-lg transition hover:bg-slate-700"
          active-class="bg-slate-700"
        >
          Videos
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
  header {
    position: sticky;
    top: 0;
    z-index: 20;
  }
</style>
