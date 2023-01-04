<template>
  <div
    class="no-print bg-slate-700/50 p-4 border border-l-8 border-amber-400/80 rounded-lg flex items-center gap-4 shadow-xl"
  >
    <Icon
      class="text-2xl text-amber-400 shrink-0"
      name="carbon-information"
    ></Icon>
    <span>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </span>
  </div>
</template>
