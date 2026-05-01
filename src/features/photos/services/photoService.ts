import type { Photo } from '../domain/types';
import { mockApi } from '@/shared/services/mockApi';

export const photoService = {
  async uploadPhoto(file: File): Promise<Photo> {
    return mockApi.uploadFile(file, 'photos');
  },

  async getPhotos(): Promise<Photo[]> {
    return mockApi.getFiles('photos');
  },

  async deletePhoto(id: string): Promise<void> {
    return mockApi.deleteFile(id, 'photos');
  },
};
