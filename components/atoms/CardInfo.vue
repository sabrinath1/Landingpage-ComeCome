<script setup lang="ts">
const props = defineProps<{
  content: string;
  img: string;
}>();
</script>
<template>
  <div class="flex justify-center w-72 h-auto items-center">
    <img :src="props.img" class="w-12 h-12" />

    <p
      class="w-full font-sans text-accent mx-2 my-6 text-xl xl:text-2xl font-normal"
    >
      {{ props.content }}
    </p>
  </div>
</template>
