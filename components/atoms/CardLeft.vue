<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
  img: string;
}>();
</script>
<template>
  <div class="w-10/12 mx-auto flex justify-center">
    <div
      class="flex justify-start items-center bg-secondary rounded-full w-32 h-28 mt-4"
    >
      <img :src="props.img" class="w-24 h-24 mx-auto" />
    </div>
    <div class="flex-col w-full my-auto">
      <h3 class="flex px-4 text-secondary font-bold text-xl py-2">
        {{ props.title }}
      </h3>
      <p class="w-full px-4 justify-end font-sans text-white">
        {{ props.content }}
      </p>
    </div>
  </div>
</template>
