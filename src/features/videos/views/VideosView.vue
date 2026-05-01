<template>
  <div class="videos-view p-4">
    <h1 class="text-2xl font-bold mb-4">Videos</h1>
    <VideoUpload />
    <VideoGallery />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import VideoUpload from '../components/VideoUpload.vue';
  import VideoGallery from '../components/VideoGallery.vue';
  import { useVideosStore } from '../store/videosStore';

  const videosStore = useVideosStore();

  onMounted(() => {
    videosStore.loadVideos();
  });
</script>

<style scoped></style>
