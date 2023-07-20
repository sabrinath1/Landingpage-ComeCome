<script setup lang="ts">
const props = defineProps<{
  imgBanner: string;
}>();
</script>
<template>
  <div
    :style="{ backgroundImage: `url(${props.imgBanner})` }"
    class="mb-20 bg-center w-full h-auto -mt-32 lg:mt-4"
  >
    <div
      class="text-center lg:text-end text-neutral-content h-[30rem] w-full lg:px-20"
    >
      <div class="flex-col pt-10 w-2/3 ml-32 md:ml-0">
        <h1
          class="mb-5 text-4xl lg:text-6xl font-bold pt-24 mt-20 ml-4 lg:pt-20 text-center items-center text-white"
        >
          Solução Completa em Alimentação Industrial
        </h1>
      </div>
    </div>
  </div>
</template>
