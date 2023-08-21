<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
  img: string;
}>();
</script>
<template>
  <div
    class="w-10/12 mx-auto flex flex-col lg:flex-row justify-center my-4 lg:hidden"
  >
    <div
      class="flex justify-center lg:justify-start items-center bg-secondary rounded-full w-32 lg:w-32 lg:h-28 h-32 my-auto mx-auto"
    >
      <img :src="props.img" class="w-28 lg:w-24 lg:h-24 h-28 mx-auto" />
    </div>
    <div class="flex-col w-full my-auto">
      <h3
        class="flex px-4 text-secondary font-bold text-xl xl:text-2xl py-2 justify-center"
      >
        {{ props.title }}
      </h3>
      <p
        class="w-full px-4 justify-end font-sans text-xl xl:text-2xl text-white"
      >
        {{ props.content }}
      </p>
    </div>
  </div>
  <div
    class="w-10/12 mx-auto lg:flex flex-col lg:flex-row justify-center my-4 hidden"
  >
    <div class="lg:flex-col w-full my-auto">
      <h3
        class="flex px-4 text-secondary font-bold text-xl xl:text-2xl py-2 justify-end"
      >
        {{ props.title }}
      </h3>
      <p
        class="w-full px-4 justify-end font-sans text-xl xl:text-2xl text-white"
      >
        {{ props.content }}
      </p>
    </div>
    <div
      class="flex justify-center lg:justify-start items-center bg-secondary rounded-full w-32 lg:w-40 lg:h-36 h-32 my-auto mx-auto"
    >
      <img :src="props.img" class="w-28 lg:w-32 lg:h-32 h-28 mx-auto" />
    </div>
  </div>
</template>
