<template>
  <div
    class="flex justify-center gap-8 text-xl border-b border-slate-50/10 links"
  >
    <template v-for="menu of tree">
      <button v-if="menu.children">{{ menu.name }}</button>
      <NuxtLink v-else :href="menu.href" active-class="!border-primary-500">{{
        menu.name
      }}</NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
const tree = [
  { name: "A propos", href: "/" },
  {
    name: "projets",
    children: [{ name: "borne", href: "/projects/borne" }],
  },
];
</script>

<style scoped>
.links > * {
  @apply px-2 py-5 border-b-4 border-transparent;
}
</style>
