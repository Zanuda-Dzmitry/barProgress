import { v4 as uuidv4 } from "uuid";

export const useLocalStore = defineStore("saveLocalStorage", {
  state: () => ({
    items: [] as Array<{
      id: string;
      section: string;
      value: number;
      color: string;
    }>,
  }),
  actions: {
    loadItems() {
      const storedItems = localStorage.getItem("items");
      if (storedItems) {
        try {
          this.items = JSON.parse(storedItems);
        } catch (error) {
          console.error("Ошибка при загрузке данных из localStorage:", error);
        }
      }
    },

    addItem(section: string, value: number, color: string) {
      const newItem = {
        id: uuidv4(),
        section,
        value,
        color,
      };
      this.items.push(newItem);
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem("items", JSON.stringify(this.items));
    },

    editItemStore(id: string) {
      const itemToEdit = this.items.find((item) => item.id === id);
      if (itemToEdit) {
        return itemToEdit;
      }
      return null;
    },

    updateItem(
      id: string,
      updatedData: { section?: string; value?: number; color?: string }
    ) {
      const itemIndex = this.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        // Обновляем только те поля, которые переданы в updatedData
        this.items[itemIndex] = {
          ...this.items[itemIndex],
          ...updatedData,
        };
        this.saveToLocalStorage();
      } else {
        console.warn("Элемент с указанным id не найден.");
      }
    },

    removeItem(id: string) {
      this.items = this.items.filter((item) => item.id !== id);
      this.saveToLocalStorage();
    },
  },
});
