<template>
  <div
    class="lg:grid grid-cols-3 grid-flow-dense gap-y-48 lg:py-32 gap-x-6 items-center"
  >
    <template v-for="(project, i) in projects">
      <Blob :class="{ 'col-start-3': i % 2 !== 0 }">
        <NuxtImg
          v-if="project.preview"
          :src="'/img/' + project.preview"
          class="rounded-xl shadow-2xl"
          loading="lazy"
          width="1920px"
          height="1920px"
          format="webp"
          fit="inside"
        ></NuxtImg>
      </Blob>
      <NuxtLink
        :href="project._path"
        class="col-span-2 py-6 px-4 group hover:bg-gray-50/5 hover:outline outline-2 outline-gray-50/10 rounded-xl transition"
        :class="{ 'col-start-2': i % 2 === 0 }"
      >
        <h2 class="text-3xl mb-6">{{ project.title }}</h2>
        <div class="mb-8">
          <span class="opacity-50">{{ project.description }}</span
          >&nbsp;
          <span
            class="underline lg:opacity-0 group-hover:!opacity-100 transition"
            >En savoir plus
          </span>
        </div>
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
</script>
