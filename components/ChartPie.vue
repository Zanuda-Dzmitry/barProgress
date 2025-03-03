<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});

const chartCanvas = ref(null);
let chartInstance = ref(null); // Ссылка на экземпляр графика

// Создаем график при монтировании компонента
onMounted(async () => {
  if (!chartCanvas.value) {
    console.error("Canvas element not found!");
    return;
  }

  const ctx = chartCanvas.value.getContext("2d");
  if (!ctx) {
    console.error("Could not get canvas context!");
    return;
  }

  chartInstance.value = new Chart(ctx, props.chartData);
});

onUnmounted(() => {
  if (chartInstance.value) {
    chartInstance.value.destroy(); // Уничтожаем экземпляр графика
    chartInstance.value = null;
  }
});

watch(
  () => props.chartData,
  (newData) => {
    if (!chartInstance.value) {
      console.error("Chart instance is not initialized!");
      return;
    }

    // Проверяем, что новые данные корректны
    if (
      !newData ||
      !newData.data ||
      !newData.data.labels ||
      !newData.data.datasets
    ) {
      console.error("Invalid chart data provided:", newData);
      return;
    }

    try {
      // Обновляем данные графика
      chartInstance.value.data.labels = newData.data.labels;
      chartInstance.value.data.datasets = newData.data.datasets;

      // Обновляем настройки графика, если они переданы
      if (newData.options) {
        chartInstance.value.options = newData.options;
      }

      chartInstance.value.update(); // Перерисовываем график
    } catch (error) {
      console.error("Failed to update chart:", error);
    }
  },
  { deep: true } // Глубокое отслеживание изменений в объекте
);
</script>
