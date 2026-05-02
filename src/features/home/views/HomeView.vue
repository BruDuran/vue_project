<template>
  <div
    class="home min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 py-8"
  >
    <!-- Hero Section -->
    <div class="text-center mb-12 max-w-4xl w-full">
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
        Bienvenido a Nuestra Familia Digital
      </h1>
      <p class="text-lg md:text-xl text-gray-600 mb-8">
        Descubre y comparte momentos especiales: fotos, videos y más.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <ButtonLink to="/photos" variant="primary">Ver Fotos</ButtonLink>
        <ButtonLink to="/videos" variant="tertiary">Ver Videos</ButtonLink>
        <ButtonLink to="/music" disabled>Música</ButtonLink>
      </div>
    </div>

    <!-- Preview Grid (simulado) -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-6xl">
      <MediaCard
        title="Recuerdos de Verano"
        description="Hace 2 semanas"
        imageSrc="https://picsum.photos/400/300?random=1"
        alt="Foto familiar"
        @click="handleCardClick"
      />
      <MediaCard
        title="Recuerdos de Verano"
        description="Hace 2 semanas"
        imageSrc="https://picsum.photos/400/300?random=2"
        alt="Foto familiar"
        @click="handleCardClick"
      />
      <MediaCard
        title="Recuerdos de Verano"
        description="Hace 2 semanas"
        imageSrc="https://picsum.photos/400/300?random=3"
        alt="Foto familiar"
        @click="handleCardClick"
      />
      <MediaCard
        title="Recuerdos de Verano"
        description="Hace 2 semanas"
        imageSrc="https://picsum.photos/400/300?random=4"
        alt="Foto familiar"
        @click="handleCardClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ButtonLink from '@/shared/components/ButtonLink.vue';
  import MediaCard from '@/shared/components/MediaCard.vue';

  const handleCardClick = () => {
    console.log('Card clicked - podemos navegar a la galería o abrir modal');
  };
</script>

<style scoped>
  /* Estilos adicionales si necesitas */
</style>
