<template>
  <div class="flex h-full p-6">
    <NuxtImg
      v-if="src"
      :src="'/img/' + src"
      loading="lazy"
      format="webp"
      fit="contain"
      class="max-h-full max-w-full shadow-2xl rounded-lg m-auto"
    ></NuxtImg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src?: string;
}>();
</script>

<style scoped></style>
