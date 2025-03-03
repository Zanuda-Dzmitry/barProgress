<template>
  <div class="chart-container">
    <VChart :option="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { useLocalStore } from "../stores/formData";
const store = useLocalStore();

const items = computed(() => store.items);

const chartOptions = computed(() => ({
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["30%", "70%"],
      itemStyle: {
        borderRadius: [20, 5, 5, 10],
      },
      data: items.value.map((item) => ({
        name: item.name,
        value: item.value,
        itemStyle: {
          color: item.itemStyle.color,
        },
      })),
    },
  ],
}));
</script>

<style scoped>
.chart-container {
  width: 600px;
  height: 400px;
}
</style>
