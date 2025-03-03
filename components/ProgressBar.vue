<template>
  <div class="progress-circle">
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#e6e6e6"
        stroke-width="10"
        fill="none"
      />

      <circle
        cx="50"
        cy="50"
        r="45"
        :stroke="progressColor"
        stroke-width="10"
        fill="none"
        stroke-dasharray="283"
        :stroke-dashoffset="283 - (283 * progress) / 100"
        stroke-linecap="round"
        :transform="transformRotate"
        class="progress-bar"
      />
    </svg>

    <div class="icon">
      <UIcon
        v-if="status === 'error'"
        name="i-lucide-x"
        class="size-5 text-red-500"
      />
      <UIcon
        v-else-if="status === 'warning'"
        name="i-lucide-circle"
        class="size-5 text-orange-500"
      />
      <span v-else-if="status === 'in-progress'" class="progress-value"
        >{{ progress }}%</span
      >
      <UIcon
        v-else-if="status === 'success'"
        name="i-lucide-check"
        class="size-5 text-green-500"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  status: {
    type: String,
    default: "in-progress",
  },
  progress: {
    type: Number,
    default: 0,
  },
  transformRotate: {
    type: String,
    default: "rotate(90 50 50)",
  },
});

const progressColor = computed(() => {
  if (props.progress < 25) {
    return "red";
  } else if (props.progress < 50) {
    return "orange";
  } else if (props.progress < 75) {
    return "blue";
  } else {
    return "green";
  }
});
</script>

<style scoped>
.progress-circle {
  position: relative;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  position: absolute;
  top: 55%;
}

.progress-value {
  font-size: 16px;
}

.progress-bar {
  transition: stroke-dashoffset 0.4s ease, stroke 0.4s ease;
}
</style>
