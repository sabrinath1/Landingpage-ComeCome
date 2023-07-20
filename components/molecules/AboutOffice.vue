<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div
    class="flex flex-col-reverse lg:flex-row lg:mb-10 justify-center w-auto xl:w-5/6"
  >
    <div
      class="flex justify-center items-center xl:px-20 lg:py-10 lg:w-full justify-items-center lg:justify-end"
    >
      <img
        src="/img/escritorio.jpg"
        alt="Foto do Escritório"
        class="w-64 h-auto sm:w-96 sm:h-auto rounded-lg shadow-2xl object-cover"
      />
    </div>
    <div
      class="py-5 sm:pr-16 justify-center items-center lg:w-full px-10 self-center"
    >
      <h1
        class="lg:mb-5 text-5xl font-bold pt-10 lg:pt-0 text-center lg:text-start items-center text-secondary"
      >
        Bem-vindo ao escritório
      </h1>
      <p class="py-6 text-lg font-sans">
        Somos um escritório de advocacia comprometido em fornecer serviços
        jurídicos de excelência e soluções eficazes para nossos clientes.
        Valorizamos o relacionamento com nossos clientes e buscamos compreender
        suas necessidades específicas. Nosso objetivo é fornecer um atendimento
        personalizado, dedicado e orientado para resultados, sempre visando os
        melhores interesses de nossos clientes.Entre em contato conosco para
        agendar uma consulta e descobrir como podemos ajudá-lo. Estamos prontos
        para ouvir suas preocupações, avaliar suas necessidades jurídicas e
        fornecer soluções jurídicas eficazes.
      </p>
      <div class="flex justify-center sm:justify-center items-center">
        <button
          class="bg-primary text-secondary hover:bg-secondary hover:text-primary w-32 h-10 rounded-lg mt-10"
          @click="() => social.redirect('whatsapp')"
        >
          SABER MAIS
        </button>
      </div>
    </div>
  </div>
</template>
