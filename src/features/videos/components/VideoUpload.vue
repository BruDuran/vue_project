<template>
  <div class="video-upload">
    <input type="file" accept="video/*" @change="handleFileSelect" ref="fileInput" class="hidden" />
    <button
      @click="$refs.fileInput.click()"
      class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Subir Video
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useVideosStore } from '../store/videosStore';

  const fileInput = ref<HTMLInputElement>();
  const videosStore = useVideosStore();

  const handleFileSelect = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      await videosStore.uploadVideo(file);
      target.value = '';
    }
  };
</script>

<style scoped></style>
