<template>
  <header
    :class="[
      'bg-slate-950 text-white shadow-lg border-b border-slate-800 transition-transform duration-300 ease-out',
      hideNav ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
      <div>
        <router-link
          to="/"
          class="text-xl font-semibold tracking-tight text-white hover:text-slate-200 transition"
        >
          PhotoVideo App
        </router-link>
      </div>

      <div class="flex items-center gap-3">
        <nav class="hidden md:flex items-center gap-3">
          <ButtonLink to="/photos" variant="primary">Fotos</ButtonLink>
          <ButtonLink to="/videos" variant="tertiary">Videos</ButtonLink>
          <ButtonLink to="/music" disabled>Música</ButtonLink>
        </nav>

        <button
          class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Abrir menú"
          type="button"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-sm"
      >
        <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
          <ButtonLink to="/photos" variant="primary" class="w-full" @click="mobileMenuOpen = false"
            >Fotos</ButtonLink
          >
          <ButtonLink to="/videos" variant="tertiary" class="w-full" @click="mobileMenuOpen = false"
            >Videos</ButtonLink
          >
          <ButtonLink to="/music" disabled class="w-full" @click="mobileMenuOpen = false"
            >Música</ButtonLink
          >
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import ButtonLink from '@/shared/components/ButtonLink.vue';

  const mobileMenuOpen = ref(false);
  const hideNav = ref(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const isScrollingDown = currentScroll > lastScrollY;

    if (isScrollingDown && currentScroll > 80) {
      hideNav.value = true;
      mobileMenuOpen.value = false;
    } else {
      hideNav.value = false;
    }

    lastScrollY = currentScroll;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<style scoped>
  header {
    position: sticky;
    top: 0;
    z-index: 20;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
