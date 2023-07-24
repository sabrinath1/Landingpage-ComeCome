<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div
    class="justify-center lg:justify-end items-center w-full px-10 self-center"
  >
    <h3
      class="mb-6 lg:mb-5 text-2xl lg:text-3xl xl:text-4xl font-bold lg:pt-0 text-center items-center text-primary lg:ml-4 xl:ml-0"
    >
      Agendar uma Reunião
    </h3>
    <p
      class="text-xl xl:text-2xl font-sans text-accent font-normal text-justify lg:ml-4 xl:ml-0"
    >
      Estamos ansiosos para agendar uma reunião e discutir como podemos atender
      às suas necessidades de alimentação. Entre em contato conosco hoje mesmo e
      descubra como a Come Come pode levar a melhor comida até a sua empresa!
    </p>
    <div class="flex justify-center mt-10 md:mt-0">
      <button
        class="btn bg-primary text-white hover:bg-secondary"
        @click="social.redirect('whatsapp')"
      >
        Agendar Horário
      </button>
    </div>
  </div>
</template>
