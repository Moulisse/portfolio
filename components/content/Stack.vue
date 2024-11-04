<script setup lang="ts">
defineProps<{ stack: string[] }>()

const icons: { [key: string]: string } = {
  'Nuxt': 'tabler:brand-nuxt',
  'Vue': 'tabler:brand-vue',
  'Tailwind': 'tabler:brand-tailwind',
  'HeadlessUI': 'tabler:brand-headlessui',
  'Angular': 'tabler:brand-angular',
  'Angular Material': 'tabler:brand-angular',
  'Ionic': 'ion:logo-ionic',
  'Electron': 'ion:logo-electron',
  'NodeJS': 'ion:logo-nodejs',
  'ThreeJS': 'tabler:brand-threejs',
}
</script>

<template>
  <div class="flex items-baseline gap-4 flex-wrap">
    <div
      v-for="lang in stack"
      :key="lang"
      class="inline-block rounded-full px-4 pb-1 pt-0.5 shrink-0 flex items-center gap-2 select-none"
      :class="lang"
    >
      <Icon
        v-if="icons[lang]"
        :name="icons[lang]"
        class="text-xl"
      />
      {{ lang }}
    </div>
  </div>
</template>

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
  background-color: #06adc9;
  color: black;
}
.HeadlessUI {
  background: linear-gradient(160deg, #61d0f2, #7466d5);
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
.Electron {
  background-color: #292c37;
  color: #9ae4f2;
}
.NodeJS {
  background-color: #303030;
  color: #7cc327;
}
.ThreeJS {
  background: linear-gradient(to right, #222222, black);
  color: rgb(187, 187, 187);
}
</style>
