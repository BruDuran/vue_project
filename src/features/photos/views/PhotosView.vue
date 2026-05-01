<template>
  <div class="photos-view p-4">
    <h1 class="text-2xl font-bold mb-4">Fotos</h1>
    <PhotoUpload />
    <PhotoGallery />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import PhotoUpload from '../components/PhotoUpload.vue';
  import PhotoGallery from '../components/PhotoGallery.vue';
  import { usePhotosStore } from '../store/photosStore';

  const photosStore = usePhotosStore();

  onMounted(() => {
    photosStore.loadPhotos();
  });
</script>

<style scoped></style>
