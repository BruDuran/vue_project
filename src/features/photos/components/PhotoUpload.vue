<template>
  <div class="photo-upload">
    <input type="file" accept="image/*" @change="handleFileSelect" ref="fileInput" class="hidden" />
    <button
      @click="fileInput?.click()"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Subir Foto
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { usePhotosStore } from '../store/photosStore';

  const fileInput = ref<HTMLInputElement>();
  const photosStore = usePhotosStore();

  const handleFileSelect = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      await photosStore.uploadPhoto(file);
      target.value = ''; // Reset input
    }
  };
</script>

<style scoped></style>
