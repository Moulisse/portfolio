<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects').sort({ id: 1 }).find(),
)
</script>

<template>
  <div
    class="lg:grid grid-cols-3 grid-flow-dense gap-y-48 lg:py-32 gap-x-6 items-center"
  >
    <template
      v-for="(project, i) in projects"
      :key="project.title"
    >
      <Blob :class="{ 'col-start-3': i % 2 !== 0 }">
        <AppImg :src="project.preview" />
      </Blob>
      <NuxtLink
        :href="project._path"
        class="col-span-2 py-6 px-4 group hover:bg-gray-50/5 hover:outline outline-2 outline-gray-50/10 rounded-xl transition block lg:mb-0 mb-32"
        :class="{ 'col-start-2': i % 2 === 0 }"
      >
        <h2 class="text-3xl mb-6">
          {{ project.title }}
        </h2>
        <div class="mb-8">
          <span class="opacity-50">{{ project.description }}</span>&nbsp;
          <span
            class="underline lg:opacity-0 group-hover:!opacity-100 transition"
          >En savoir plus
          </span>
        </div>
        <Stack
          v-if="project.stack"
          :stack="project.stack"
        />
      </NuxtLink>
    </template>
  </div>
</template>
