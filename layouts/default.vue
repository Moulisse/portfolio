<script setup lang="ts">
function resize() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

onMounted(() => {
  window.addEventListener('resize', resize)
  resize()
})
</script>

<template>
  <div class="min-h-screen gradient">
    <NuxtLoadingIndicator color="#ef4444" />
    <Header class="no-print" />
    <slot />
  </div>
</template>

<style scoped>
.gradient {
  background: linear-gradient(
    to bottom,
    #0ea5e920 0,
    #0ea5e910 30vh,
    transparent 100vh
  );
  @apply bg-slate-900 text-slate-50;
}
</style>
