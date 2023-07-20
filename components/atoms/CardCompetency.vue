<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
  img: string;
}>();
</script>
<template>
  <div class="card static w-52 lg:h-44 bg-primary m-5 sm:m-10 pt-10 lg:pt-4">
    <div class="flex w-full justify-center">
      <div
        class="flex justify-center items-center bg-secondary rounded-full w-24 h-24 -m-10"
      >
        <img :src="props.img" class="w-16 h-16" />
      </div>
    </div>
    <div class="items-center text-center w-full text-secondary pt-4 lg:pt-0">
      <h2 class="card-title flex justify-center mt-10 my-5">
        {{ props.title }}
      </h2>
      <p class="w-full font-sans text-white">{{ props.content }}</p>
    </div>
  </div>
</template>
