<script setup lang="ts">
const myList = ref([
  {
    title: "Sobre",
    items: [
      {
        label: "Quem Somos",
        key: "#about",
      },

      {
        label: "Nossos Diferenciais",
        key: "#differential",
      },
      {
        label: "Serviços",
        key: "#services",
      },
      {
        label: "Fale Conosco",
        key: "#contact",
      },
    ],
  },

  {
    title: "Contatos",
    items: [
      {
        label: "(15)99651-4338",
      },
      {
        label: "contato@comecomecozinhaindustrial.com.br",
      },
      {
        label: "R. Tiburcio Ribeiro Filho, 303 - Jd. Eucaliptos, Sorocaba - SP",
      },
    ],
  },
  {
    title: "Funcionamento",
    items: [
      {
        label: "Segunda á Sexta: ",
      },
      {
        label: "09:00 - 18:00 horas",
      },
    ],
  },
]);
</script>

<template>
  <footer class="bg-primary" aria-labelledby="footer-heading ">
    <div class="px-4 py-12 mx-auto w-full sm:px-6 lg:px-16">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="flex flex-col justify-center items-center my-3">
          <img
            c
            src="/img/logotipo-completo.png"
            alt="Logotipo Come Come Cozinha Industrial"
          />
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 xl:mt-0 xl:col-span-2 sm:justify-items-center mx-14 sm:mx-1"
        >
          <div
            class="flex-col md:grid md:grid-cols-1 md:gap-8"
            v-for="(i, index) in myList"
            :key="`title_${index}`"
          >
            <div class="flex flex-col">
              <h3 class="text-xl font-bold tracking-wider text-secondary">
                {{ i.title }}
              </h3>
              <ul role="list" class="mt-4 space-y-2 text-lg">
                <li
                  class=""
                  v-for="(subItem, sbIndex) in i.items"
                  :key="`item_${sbIndex}`"
                >
                  <div class="flex">
                    <NuxtLink
                      :to="subItem.key"
                      class="text-base font-normal text-white hover:text-secondary flex-row"
                    >
                      {{ subItem.label }}
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-5 py-5 mx-auto bg-gray-50 w-full sm:px-6 md:flex md:items-center md:justify-between lg:px-20"
    >
      <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
        <AtomsButtonWhatsapp />
        <AtomsButtonInstagram />
      </div>

      <div class="flex justify-center space-x-6 md:order-first md:mb-0">
        Todos os direitos reservados a Come Come - Cozinha Industrial
      </div>
    </div>
  </footer>
</template>
