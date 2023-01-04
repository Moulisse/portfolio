<template>
  <span
    class="px-2 py-1.5 text-xs font-semibold border rounded-lg bg-gray-600 text-gray-100 border-gray-500"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </span>
</template>
