import { create } from 'zustand';

const useImageStore = create((set) => ({
  downloadUrl: null,
  uploadingProgress: 0,
  setDownloadUrl: (url) => set(() => ({ downloadUrl: url})),
  setUploadingProgress: (progress) => set(() => ({ uploadingProgress: progress})),
}))

export default useImageStore;