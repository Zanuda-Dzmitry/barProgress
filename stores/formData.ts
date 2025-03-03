import { v4 as uuidv4 } from "uuid";

// {
//   value: 335,
//   name: "A",
//   itemStyle: {
//     color: "black",
//   },
// },

export const useLocalStore = defineStore("saveLocalStorage", {
  state: () => ({
    items: [] as Array<{
      id: string;
      name: string;
      value: number;
      itemStyle: {
        color: string;
      };
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

    addItem(name: string, value: number, color: string) {
      const newItem = {
        id: uuidv4(),
        name,
        value,
        itemStyle: {
          color,
        },
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
      updatedData: { name?: string; value?: number; color?: string }
    ) {
      const itemIndex = this.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        this.items[itemIndex] = {
          ...this.items[itemIndex],
          name: updatedData.name ?? this.items[itemIndex].name,
          value: updatedData.value ?? this.items[itemIndex].value,
          itemStyle: {
            color: updatedData.color ?? this.items[itemIndex].itemStyle.color,
          },
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
