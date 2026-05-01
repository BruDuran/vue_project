import type { Video } from '../domain/types';
import { mockApi } from '@/shared/services/mockApi';

export const videoService = {
  async uploadVideo(file: File): Promise<Video> {
    return mockApi.uploadFile(file, 'videos');
  },

  async getVideos(): Promise<Video[]> {
    return mockApi.getFiles('videos');
  },

  async deleteVideo(id: string): Promise<void> {
    return mockApi.deleteFile(id, 'videos');
  },
};
