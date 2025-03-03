<template>
  <color-picker-block
    with-alpha
    with-initial-color
    with-eye-dropper
    with-hex-input
    with-rgb-input
    :with-colors-history="true"
    v-model="refVariable"
  />
</template>

<script lang="ts" setup>
const refVariable = ref("#000");
</script>
