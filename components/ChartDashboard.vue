<template>
  <div v-if="items.length">
    <ChartPie :chartData="myChartData" />
  </div>
  <div v-else>Загрузка данных...</div>
</template>

<script setup lang="ts">
import ChartDataLabels from "chartjs-plugin-datalabels";

import { useLocalStore } from "../stores/formData";
const store = useLocalStore();

onMounted(() => {
  store.loadItems();
});

// Получаем данные из Store
const items = computed(() => store.items);

const myChartData = computed(() => ({
  type: "pie",
  data: {
    labels: items.value.map((item) => item.section),
    datasets: [
      {
        data: items.value.map((item) => item.value),
        backgroundColor: items.value.map((item) => item.color),
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
}));
</script>
