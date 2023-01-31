<template>
  <div
    class="flex justify-center gap-8 text-xl border-b border-slate-50/10 fixed top-0 w-full backdrop-blur z-10"
  >
    <NuxtLink
      href="/"
      active-class="!border-primary-500"
      class="link text-shadow"
    >
      A propos
    </NuxtLink>

    <Popover v-if="projects">
      <template v-slot="{ open }">
        <span class="text-shadow"> Projets </span>
        <Icon
          name="carbon:chevron-down"
          class="transition stroke-gray-500"
          :class="open ? 'rotate-180' : ''"
        ></Icon>
      </template>
      <template v-slot:content="{ close }">
        <template v-for="item in projects">
          <NuxtLink
            v-if="item"
            :key="item.title"
            :href="item._path"
            class="flex items-center rounded-lg p-2 transition hover:bg-gray-50/5"
            @click="close"
          >
            <div
              v-if="item.icon"
              class="h-12 w-12 flex shrink-0 items-center justify-center relative ml-4 mr-6"
            >
              <div
                class="absolute inset-0 opacity-80 rounded-lg"
                :style="{ background: item.color ?? '#fff' }"
              ></div>
              <Icon
                :name="item.icon"
                v-if="item.icon"
                class="stroke-current stroke-0 w-8 h-8 z-10"
              ></Icon>
            </div>
            <div>
              <p class="mb-2 text-base">
                {{ item.title }}
              </p>
              <p class="text-sm opacity-50">
                {{ item.description }}
              </p>
            </div>
          </NuxtLink>
        </template>
      </template>
    </Popover>

    <NuxtLink
      href="/cv"
      active-class="!border-primary-500"
      class="link text-shadow"
    >
      CV
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData("projects", () =>
  queryContent("/projects").sort({ id: 1 }).find()
);
</script>

<style scoped>
.link {
  @apply px-2 py-5 border-b-4 border-transparent;
}

.text-shadow {
  text-shadow: 0 0 2px black;
}
</style>
