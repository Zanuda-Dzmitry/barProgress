export const useModalStore = defineStore("modal", {
  state: () => ({ isModalOpen: false, modalData: null as any }),
  actions: {
    openModal(data?: any) {
      this.isModalOpen = true;
      if (data) {
        this.modalData = data; // Сохраняем данные, если они переданы
      }
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalData = null; // Сбрасываем данные при закрытии
    },
  },
});
