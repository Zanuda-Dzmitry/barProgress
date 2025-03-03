<template>
  <UForm class="form" @submit.prevent="submitForm">
    <UFormGroup class="form_group" label="Наименование">
      <UInput v-model="section" />
    </UFormGroup>
    <UFormGroup class="form_group" label="Значение">
      <UInput v-model="value" type="number" :min="0" :max="100" />
    </UFormGroup>
    <ColorPickerForm @change="updateColor($event.hex)" />
    <UButton class="form_button" type="submit">
      {{ isEditing ? "Обновить сектор" : "Добавить сектор" }}
    </UButton>
  </UForm>
</template>

<script setup>
const emit = defineEmits(["submit"]);

const props = defineProps({
  state: {
    type: Object,
    required: false,
    default: () => ({ section: "", value: 0, color: "#000" }),
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});

const section = ref(props.state.section);
const value = ref(props.state.value);
const selectedColor = ref(props.state.color);

// Метод для обновления выбранного цвета
const updateColor = (color) => {
  selectedColor.value = color;
};

// Метод для отправки формы
const submitForm = () => {
  const formData = {
    section: section.value,
    value: value.value,
    color: selectedColor.value,
  };
  emit("submit", formData); // Отправляем данные в родительский компонент
};

// Заполнение формы данными при инициализации.
watch(
  () => props.state,
  (newData) => {
    if (newData) {
      section.value = newData.section;
      value.value = newData.value;
      selectedColor.value = newData.color;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  gap: 20px;
}

.form_group,
.form_button {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
