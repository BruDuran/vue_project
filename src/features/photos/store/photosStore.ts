import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Photo } from '../domain/types';
import { photoService } from '../services/photoService';

export const usePhotosStore = defineStore('photos', () => {
  const photos = ref<Photo[]>([]);

  const loadPhotos = async () => {
    photos.value = await photoService.getPhotos();
  };

  const uploadPhoto = async (file: File) => {
    const photo = await photoService.uploadPhoto(file);
    photos.value.push(photo);
  };

  const deletePhoto = async (id: string) => {
    await photoService.deletePhoto(id);
    photos.value = photos.value.filter((p) => p.id !== id);
  };

  return {
    photos,
    loadPhotos,
    uploadPhoto,
    deletePhoto,
  };
});
