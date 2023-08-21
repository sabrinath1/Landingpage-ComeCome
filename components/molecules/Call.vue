<script setup lang="ts">
const props = defineProps<{
  imgCall: string;
}>();
</script>
<template>
  <div
    class="flex justify-center w-full h-auto bg-secondary/40 py-10 bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${props.imgCall})` }"
  >
    <div class="justify-center items-center w-full xl:w-9/12 px-14 self-center">
      <h3
        class="lg:mb-5 text-2xl lg:text-3xl xl:text-4xl font-bold lg:pt-0 text-center items-center text-primary lg:ml-4 xl:ml-0 mb-10"
      >
        Parceria de Sucesso!
      </h3>
      <p
        class="text-xl xl:text-2xl font-sans text-accent font-normal text-justify xl:text-2 lg:ml-4 xl:ml-0"
      >
        Se você busca uma parceria de confiança para fornecimento de comida
        empresarial, a Come Come é a escolha certa. Nossa paixão pela
        gastronomia e compromisso com a excelência nos tornam a opção ideal para
        cuidar da alimentação de seus colaboradores.
      </p>
    </div>
  </div>
</template>
