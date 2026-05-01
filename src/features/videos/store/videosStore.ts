import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Video } from '../domain/types';
import { videoService } from '../services/videoService';

export const useVideosStore = defineStore('videos', () => {
  const videos = ref<Video[]>([]);

  const loadVideos = async () => {
    videos.value = await videoService.getVideos();
  };

  const uploadVideo = async (file: File) => {
    const video = await videoService.uploadVideo(file);
    videos.value.push(video);
  };

  const deleteVideo = async (id: string) => {
    await videoService.deleteVideo(id);
    videos.value = videos.value.filter((v) => v.id !== id);
  };

  return {
    videos,
    loadVideos,
    uploadVideo,
    deleteVideo,
  };
});
