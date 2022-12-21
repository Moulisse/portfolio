<template>
  <div class="relative">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      class="fill-current text-primary-500"
    >
      <path
        d="M40.7,-55.5C54,-46.4,66.9,-36.2,74.6,-22C82.2,-7.9,84.6,10.2,79.9,26.4C75.2,42.5,63.4,56.8,48.9,60.2C34.4,63.6,17.2,56.1,0.5,55.4C-16.2,54.7,-32.4,60.8,-45.4,56.9C-58.5,53.1,-68.4,39.3,-72.9,24C-77.3,8.8,-76.4,-7.9,-67.3,-17.6C-58.3,-27.3,-41.1,-30.1,-28.5,-39.5C-16,-48.8,-8,-64.7,2.9,-68.7C13.7,-72.7,27.4,-64.7,40.7,-55.5Z"
        transform="translate(100 100)"
      />
    </svg>
    <div class="absolute inset-6 flex justify-center items-center">
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
