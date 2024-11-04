<template>
  <Transition
    name="transition-fade"
    appear
  >
    <slot />
  </Transition>
</template>

<style>
.transition-fade-enter-active,
.transition-fade-leave-active {
  transition: opacity 0.5s ease;
}

.transition-fade-enter-from,
.transition-fade-leave-to {
  opacity: 0;
}
</style>
