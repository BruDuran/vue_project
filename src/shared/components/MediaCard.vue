<template>
  <div
    class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg active:shadow-xl transition cursor-pointer"
    @click="$emit('click')"
  >
    <img :src="imageSrc" :alt="alt" class="w-full h-32 object-cover rounded mb-2" />
    <h3 class="font-semibold">{{ title }}</h3>
    <p class="text-sm text-gray-500">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    description: string;
    imageSrc: string;
    alt: string;
  }

  defineProps<Props>();

  defineEmits<{
    click: [];
  }>();
</script>

<style scoped>
  /* Estilos adicionales si necesitas */
</style>
