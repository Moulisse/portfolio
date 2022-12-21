<template>
  <div class="min-h-screen gradient">
    <Header class="no-print"></Header>
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
