<template>
  <div class="full-screen flex items-center justify-center flex-col relative">
    <h1 class="text-6xl mb-6 text-center">Denis Lachartre</h1>
    <div class="text-xl italic opacity-50 mb-10">Développeur VueJS, NodeJS</div>
    <div class="flex gap-4">
      <Button @click="scrollBottom">Contacts</Button>
      <NuxtLink href="cv">
        <Button fill="outline">CV imprimable</Button>
      </NuxtLink>
    </div>
    <button
      class="absolute bottom-8 flex flex-col items-center gap-4"
      @click="scrollScreen"
    >
      Mes projets
      <svg
        class="w-6 h-6 text-primary-500 animate-bounce"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
function scrollScreen() {
  document.documentElement.scrollTo({
    top: window.innerHeight - 200,
    behavior: "smooth",
  });
}

function scrollBottom() {
  document.documentElement.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}
</script>
