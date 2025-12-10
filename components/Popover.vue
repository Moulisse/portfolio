<template>
  <HeadlessPopover v-slot="{ open, close }">
    <HeadlessPopoverButton class="focus:outline-none">
      <slot :open="open" />
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
          class="overflow-hidden rounded-3xl shadow-xl outline outline-2 outline-slate-700/50 grid gap-4 bg-slate-900 p-7 lg:grid-cols-2 backdrop-blur"
        >
          <slot
            name="content"
            :close="close"
          />
        </div>
      </HeadlessPopoverPanel>
    </transition>
  </HeadlessPopover>
</template>
