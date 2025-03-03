<template>
  <div>
    <ULink
      class="m-5"
      to="/"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >ProgressBar</ULink
    >
    <ULink
      class="m-5"
      to="/chart"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >Chart</ULink
    >
  </div>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { useModalStore } from "../stores/modalStore";
const modal = useModalStore();
</script>
