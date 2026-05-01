<template>
  <div class="video-gallery">
    <div class="grid gap-6">
      <div
        v-for="video in videosStore.videos"
        :key="video.id"
        class="video-item bg-white rounded shadow p-4"
      >
        <video controls :src="video.url" class="w-full h-64 rounded" />
        <div class="mt-3 flex items-center justify-between gap-2">
          <p class="text-sm font-medium">{{ video.name }}</p>
          <button
            @click="deleteVideo(video.id)"
            class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useVideosStore } from '../store/videosStore';

  const videosStore = useVideosStore();

  const deleteVideo = async (id: string) => {
    await videosStore.deleteVideo(id);
  };
</script>

<style scoped></style>
