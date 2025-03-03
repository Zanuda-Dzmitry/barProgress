<template>
  <UCard>
    <template #header>
      <UButton class="m-5" size="sm" @click="reloading">Reloading</UButton>
      <UButton class="m-5" color="red" size="sm" @click="error">Error</UButton>
      <UButton class="m-5" color="orange" size="sm" @click="warning"
        >Warning</UButton
      >
      <UButton class="m-5" size="sm" @click="toggleType">Type</UButton>
    </template>

    <ProgressBar
      :progress="progressValue"
      :status="statusValue"
      :transformRotate="transformRotate"
    />
  </UCard>
</template>

<script setup>
const progressValue = ref(0);
const statusValue = ref("in-progress");
const transformRotate = ref("rotate(-90 50 50)");

const toggleType = () => {
  transformRotate.value =
    transformRotate.value === "rotate(-90 50 50)"
      ? "rotate(90 50 50)"
      : "rotate(-90 50 50)";
};

// Функция для обновления прогресса
const updateProgress = () => {
  if (progressValue.value < 100 && statusValue.value === "in-progress") {
    progressValue.value += 1;
    setTimeout(updateProgress, 100);
  } else if (progressValue.value === 100) {
    statusValue.value = "success";
  }
};

const reloading = () => {
  progressValue.value = 0;
  statusValue.value = "in-progress";
  updateProgress();
};

const error = () => {
  progressValue.value = 23;
  statusValue.value = "error";
};

const warning = () => {
  progressValue.value = 45;
  statusValue.value = "warning";
};
</script>

<style scoped></style>
