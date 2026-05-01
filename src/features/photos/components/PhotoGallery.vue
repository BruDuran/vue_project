<template>
  <div class="photo-gallery">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="photo in photosStore.photos" :key="photo.id" class="photo-item">
        <img :src="photo.url" :alt="photo.name" class="w-full h-48 object-cover rounded" />
        <p class="mt-2 text-sm">{{ photo.name }}</p>
        <button
          @click="deletePhoto(photo.id)"
          class="mt-2 bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { usePhotosStore } from '../store/photosStore';

  const photosStore = usePhotosStore();

  const deletePhoto = async (id: string) => {
    await photosStore.deletePhoto(id);
  };
</script>

<style scoped></style>
