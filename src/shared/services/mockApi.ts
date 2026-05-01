import { openDB } from 'idb';

interface StoredFile {
  id: string;
  name: string;
  url: string;
  type: string;
  uploadedAt: string;
}

const DB_NAME = 'photo-video-app-db';
const DB_VERSION = 1;

const getDb = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('photos')) {
        db.createObjectStore('photos', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('videos')) {
        db.createObjectStore('videos', { keyPath: 'id' });
      }
    },
  });
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  async uploadFile(file: File, storeName: 'photos' | 'videos') {
    const db = await getDb();
    const id = `${storeName}-${crypto.randomUUID()}`;
    const url = URL.createObjectURL(file);
    const stored: StoredFile = {
      id,
      name: file.name,
      url,
      type: file.type,
      uploadedAt: new Date().toISOString(),
    };
    await db.put(storeName, stored);
    await delay(300);
    return {
      id: stored.id,
      name: stored.name,
      url: stored.url,
      uploadedAt: new Date(stored.uploadedAt),
    };
  },

  async getFiles(storeName: 'photos' | 'videos') {
    const db = await getDb();
    const all = await db.getAll(storeName);
    await delay(200);
    return all.map((item) => ({
      id: item.id,
      name: item.name,
      url: item.url,
      uploadedAt: new Date(item.uploadedAt),
    }));
  },

  async deleteFile(id: string, storeName: 'photos' | 'videos') {
    const db = await getDb();
    await db.delete(storeName, id);
    await delay(100);
  },
};
