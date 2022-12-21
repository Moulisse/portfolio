<template>
  <div
    class="flex justify-center gap-8 text-xl border-b border-slate-50/10 fixed top-0 w-full backdrop-blur z-10"
  >
    <NuxtLink href="/" active-class="!border-primary-500" class="link">
      A propos
    </NuxtLink>

    <HeadlessPopover v-if="projects" v-slot="{ open, close }">
      <HeadlessPopoverButton
        class="focus:outline-none space-x-2 px-2 py-5 border-b-4 border-transparent"
      >
        <span> Projets </span>
        <Icon
          name="carbon:chevron-down"
          class="transition"
          :class="open ? 'rotate-180' : ''"
        ></Icon>
      </HeadlessPopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <HeadlessPopoverPanel
          class="absolute left-1/2 z-10 w-screen max-w-sm -translate-x-1/2 transform p-4 sm:px-0 lg:max-w-3xl"
        >
          <div
            class="overflow-hidden rounded-lg shadow-lg ring-4 ring-primary-500"
          >
            <div class="relative grid gap-4 bg-slate-800 p-7 lg:grid-cols-2">
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
            </div>
          </div>
        </HeadlessPopoverPanel>
      </transition>
    </HeadlessPopover>

    <NuxtLink href="/cv" active-class="!border-primary-500" class="link">
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
</style>
