<template>
  <div class="flex items-baseline gap-4 flex-wrap">
    <span class="shrink-0">Stack :</span>
    <div
      v-for="lang in stack"
      class="inline-block rounded-full px-4 pb-1 pt-0.5 shrink-0"
      :class="lang"
    >
      <Icon v-if="icons[lang]" :name="icons[lang]" class="mr-1 text-xl"></Icon>
      {{ lang }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ stack: string[] }>();

const icons: { [key: string]: string } = {
  Nuxt: "tabler:brand-nuxt",
  Vue: "tabler:brand-vue",
  Tailwind: "tabler:brand-tailwind",
  HeadlessUI: "tabler:brand-headlessui",
  Angular: "tabler:brand-angular",
  "Angular Material": "tabler:brand-angular",
  Ionic: "ion:logo-ionic",
};
</script>

<style scoped>
.Nuxt {
  background-color: #00dc82;
  color: black;
}
.Vue {
  background-color: #3eaf7c;
  color: black;
}
.Tailwind {
  background-color: #07adca;
  color: black;
}
.HeadlessUI {
  background-color: #67d3fe;
  color: black;
}
.Angular {
  background-color: #d6002f;
  color: white;
}
.Ionic {
  background-color: #4c8aef;
  color: black;
}
</style>
