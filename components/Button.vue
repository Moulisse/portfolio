<template>
  <button
    type="button"
    class="lg:text-lg font-bold border-2 border-primary-500 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 transition hover:-translate-y-0.5"
    :class="{
      'btn-outline': fill === 'outline',
      'btn-solid': fill === 'solid',
      'btn-clear': fill === 'clear',
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ fill?: "outline" | "solid" | "clear" }>(), {
  fill: "solid",
});
</script>

<style scoped>
.btn-outline {
  @apply text-primary-500;
}
.btn-solid {
  @apply text-black bg-primary-500;
}
</style>
