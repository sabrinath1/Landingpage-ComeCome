<script setup lang="ts">
const props = defineProps<{
  title: string;
  img: string;
  color: "orange" | "brown";
  content: string;
}>();
</script>

<template>
  <div
    class="card xl:w-80 w-56 h-72 px-2 m-3 lg:m-5 xl:m-10 z-0"
    :class="{
      'bg-primary': props.color === 'brown',

      'bg-secondary': props.color === 'orange',
    }"
  >
    <div class="flex w-full justify-center">
      <div class="flex justify-center items-center rounded-full w-24 h-24 mt-5">
        <img :src="props.img" class="w-16 h-16" />
      </div>
    </div>
    <div class="items-center text-center w-full">
      <h2 class="card-title flex justify-center text-white mt-3 text-xl">
        {{ props.title }}
      </h2>
      <h3 class="flex justify-center mt-2 text-white px-2 pb-5 text-sm">
        {{ props.content }}
      </h3>
    </div>
  </div>
</template>
