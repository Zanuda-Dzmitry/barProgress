<template>
  <UTable :columns="columns" :rows="items">
    <template #color-data="{ row }">
      <MyColorComponent :color="row.itemStyle.color" />
    </template>
    <template #edit-data="{ row }">
      <UButton icon="i-heroicons-pencil-square" @click="editItem(row.id)" />
    </template>
    <template #delete-data="{ row }">
      <UButton
        icon="i-heroicons-x-mark-20-solid"
        color="red"
        @click="deleteItem(row.id)"
      />
    </template>
  </UTable>
  <div>
    <UModal
      v-model="modalStore.isModalOpen"
      :ui="{ width: 'w-[300px] max-w-[300px]' }"
      :close="{
        color: 'primary',
        variant: 'outline',
        class: 'rounded-full',
      }"
    >
      <template #default>
        <Form
          :state="currentSectorData"
          :isEditing="isEditing"
          @submit="handleFormSubmit"
        />
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { useLocalStore } from "../stores/formData";
import { useModalStore } from "../stores/modalStore";

const modalStore = useModalStore();
const store = useLocalStore();

const currentSectorData = ref<{
  id?: string;
  name: string;
  value: number;
  color: string;
}>({
  name: "",
  value: 0,
  color: "#000",
});

const isEditing = ref(false);

const columns = [
  { key: "name", label: "Раздел" },
  { key: "value", label: "Значение" },
  { key: "color", label: "Цвет" },
  { key: "edit", label: "Редактировать" },
  { key: "delete", label: "Удалить" },
];

onMounted(() => {
  loadItems();
});

const loadItems = async () => {
  try {
    await store.loadItems();
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};

const items = computed(() => store.items);

const editItem = (id: string) => {
  const item = store.editItemStore(id);
  if (item) {
    currentSectorData.value = {
      id: item.id,
      name: item.name,
      value: item.value,
      color: item.itemStyle.color, // Извлекаем цвет из itemStyle
    };
  } // Копируем данные для редактирования
  isEditing.value = true; // Включаем режим редактирования
  modalStore.openModal();
};

const deleteItem = (id: string) => {
  try {
    store.removeItem(id);
  } catch (error) {
    console.error("Ошибка при удалении элемента:", error);
  }
};

const handleFormSubmit = (data: {
  name: string;
  value: number;
  color: string;
}) => {
  try {
    if (isEditing.value && currentSectorData.value.id) {
      // Если режим редактирования, обновляем элемент
      store.updateItem(currentSectorData.value.id, {
        name: data.name,
        value: data.value,
        color: data.color, // Обновляем цвет
      });
    } else {
      // Иначе добавляем новый элемент
      store.addItem(data.name, data.value, data.color);
    }
    modalStore.closeModal(); // Закрываем модальное окно
    resetForm(); // Сбрасываем форму
  } catch (error) {
    console.error("Ошибка при обработке формы:", error);
  }
};

const resetForm = () => {
  currentSectorData.value = { name: "", value: 0, color: "#000" };
  isEditing.value = false;
};
</script>
