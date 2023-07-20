<script setup lang="ts">
const props = defineProps<{
  imgDesktop: string;
}>();
const social = useSocialRedirect();
</script>
<template>
  <div
    :style="{ backgroundImage: `url(${props.imgDesktop})` }"
    class="mb-20 hidden md:block sm:bg-left lg:bg-center"
  >
    <div
      class="text-center lg:text-end text-neutral-content h-[30rem] w-full px-20"
    >
      <div class="flex-col pt-10">
        <h1
          class="mb-5 text-6xl font-bold pt-24 lg:pt-20 text-star items-center text-white"
        >
          Solução Completa de Alimentação Industrial
        </h1>
        <!-- <h3 class="mb-5 text-6xl font-bold text-star text-white">
          Assessoria Jurídica
        </h3> -->
      </div>
    </div>
  </div>
</template>
