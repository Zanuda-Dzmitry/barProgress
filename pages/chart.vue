<template>
  <UContainer class="wrapper">
    <div>
      <Table />
      <UButton label="Добавить сектор" color="blue" @click="modal.openModal" />
    </div>
    <ChartDashboard />
  </UContainer>
</template>

<script setup>
import { useModalStore } from "../stores/modalStore";

const modal = useModalStore();
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
