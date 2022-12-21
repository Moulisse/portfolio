<template>
  <div
    class="lg:grid grid-cols-3 grid-flow-dense gap-y-32 gap-x-6 items-center"
  >
    <template v-for="(project, i) in projects">
      <Blob :class="{ 'col-start-3': i % 2 !== 0 }">
        <img
          :src="'/img/' + project.preview.path"
          v-if="project.preview"
          class="rounded-xl"
          loading="lazy"
        />
      </Blob>
      <NuxtLink
        :href="project._path"
        class="col-span-2 py-6"
        :class="{ 'col-start-2': i % 2 === 0 }"
      >
        <h2 class="text-3xl mb-6">{{ project.title }}</h2>
        <div class="opacity-50 mb-8">{{ project.description }}</div>
        <Stack
          :stack="project.stack"
          v-if="project.stack"
          class="lg:mb-0 mb-32"
        ></Stack>
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData("projects", () =>
  queryContent("/projects")
    .sort({ id: 1 })
    .only([
      "title",
      "description",
      "_path",
      "icon",
      "color",
      "preview",
      "stack",
    ])
    .find()
);

console.log(projects);
</script>
