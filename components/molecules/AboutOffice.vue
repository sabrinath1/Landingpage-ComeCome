<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div class="flex-col -mt-10">
    <div
      class="flex flex-col-reverse lg:flex-row w-full lg:w-11/12 xl:w-5/6 justify-center mx-auto"
    >
      <div
        class="py-5 justify-center lg:justify-end items-center lg:items-center w-full px-10 self-center"
      >
        <p
          class="py-6 text-xl xl:text-2xl font-sans text-accent font-normal text-justify lg:ml-10 mb-28 lg:mb-0"
        >
          É com entusiasmo e dedicação que apresentamos a Come Come, uma empresa
          especializada em fornecer soluções completas de alimentação
          empresarial. Nossa missão é proporcionar refeições saborosas,
          nutritivas e convenientes para empresas de todos os segmentos,
          garantindo assim o bem-estar e a produtividade de seus colaboradores.
        </p>
      </div>
      <div
        class="flex justify-center items-center xl:px-20 lg:py-10 w-2/3 xl:w-2/5 justify-items-center xl:mr-0 mt-10"
      >
        <img
          src="/img/cozinha1.png"
          alt="Foto do Escritório"
          class="w-96 h-72 xl:w-80 rounded-lg shadow-2xl object-cover hidden lg:block"
        />
      </div>
      <div></div>
    </div>
    <div
      class="flex flex-col-reverse lg:flex-row lg:mb-10 w-full xl:w-5/6 justify-center mx-auto lg:-mt-10"
    >
      <div
        class="justify-center lg:justify-end items-center lg:items-center w-full px-10 self-center"
      >
        <h3
          class="lg:mb-5 text-xl font-bold lg:pt-0 text-center lg:text-start items-center text-primary lg:ml-4 ml-0"
        >
          Quem Somos?
        </h3>
        <p
          class="text-xl xl:text-2xl font-sans text-accent font-normal text-justify lg:ml-4"
        >
          É com entusiasmo e dedicação que apresentamos a Come Come, uma empresa
          especializada em fornecer soluções completas de alimentação
          empresarial. Nossa missão é proporcionar refeições saborosas,
          nutritivas e convenientes para empresas de todos os segmentos,
          garantindo assim o bem-estar e a produtividade de seus colaboradores.
        </p>
        <!-- <div class="flex justify-center sm:justify-end items-center">
          <button
            class="bg-primary text-white hover:bg-secondary w-32 h-10 rounded-lg mt-10"
            @click="() => social.redirect('whatsapp')"
          >
            Entrar em Contato
          </button>
        </div> -->
      </div>
      <div
        class="flex justify-center -mt-32 items-center xl:px-20 lg:py-10 w-2/3 xl:w-2/5 justify-items-center xl:justify-center mr-24 xl:mr-0"
      >
        <img
          src="/img/cozinha2.png"
          alt="Foto do Escritório"
          class="w-full h-72 xl:w-80 rounded-lg shadow-2xl object-cover hidden lg:block"
        />
      </div>
    </div>
    <!-- <div class="flex justify-center w-1/2 mx-auto">
      <img
        src="/img/sobre.png"
        alt="Foto do Escritório"
        class="w-full h-72 xl:w-80"
      />
    </div> -->
  </div>
</template>
