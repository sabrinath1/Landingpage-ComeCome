<script setup lang="ts">
const props = defineProps<{
  content: string;
  img: string;
}>();
</script>
<template>
  <div class="flex justify-around w-72 h-auto items-center">
    <img :src="props.img" class="w-12 h-12" />

    <p class="w-full font-sans text-primary mx-2 my-6 text-lg lg:text-xl">
      {{ props.content }}
    </p>
  </div>
</template>
