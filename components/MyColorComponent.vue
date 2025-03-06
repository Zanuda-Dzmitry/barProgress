<template>
  <div :style="{ backgroundColor: color }" class="p-2 rounded">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    required: true,
    validator: (value) => /^#[0-9A-Fa-f]{6}$/.test(value),
  },
});
</script>
