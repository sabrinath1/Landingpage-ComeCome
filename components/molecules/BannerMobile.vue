<script setup lang="ts">
const props = defineProps<{
  imgMobile: string;
}>();
</script>
<template>
  <div
    :style="{ backgroundImage: `url(${props.imgMobile})` }"
    class="hero mb-20 block lg:hidden"
  >
    <div class="text-center text-neutral-content h-[20rem] w-full px-5">
      <div class="flex-col text-center ml-32">
        <h1 class="mb-5 text-4xl font-bold pt-24 text-primary">
          Advocacia e Assessoria Jurídica
        </h1>
        <!-- <h3 class="text-3xl font-bold">Assesosria Jurídica</h3> -->
      </div>
    </div>
  </div>
</template>
