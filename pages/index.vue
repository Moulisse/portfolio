<template>
  <div>
    <h1>Denis Lachartre</h1>
    <blockquote>Développeur VueJS, NodeJS</blockquote>

    <h2>Projets :</h2>
    <div v-for="project of projects" class="mb-8">
      <NuxtLink :href="project._path">{{ project.title }}</NuxtLink>
      <div>{{ project.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData("projects", () =>
  queryContent("/projects")
    .sort({ id: 1 })
    .only(["title", "description", "_path"])
    .find()
);

console.log(projects);
</script>
