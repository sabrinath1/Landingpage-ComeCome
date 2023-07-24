<template>
  <div class="flex w-full xl:w-11/12 h-auto justify-center">
    <div
      class="lg:flex justify-center items-center w-2/4 ml-20 my-auto hidden xl:justify-end"
    >
      <img
        src="/img/cozinheiro.png"
        alt="Foto de um cozinheiro"
        class="w-auto h-auto xl:w-96 rounded-lg object-cover hidden lg:block"
      />
    </div>
    <div class="flex-col mx-10 mr-10">
      <div class="justify-center items-center w-full px-10 self-center">
        <h3
          class="lg:mb-5 text-2xl lg:text-3xl xl:text-4xl font-bold lg:pt-0 text-center items-center text-primary lg:ml-4 xl:ml-0 mb-6"
        >
          Nossos Diferenciais
        </h3>
      </div>
      <AtomsCardDifferential
        title="Qualidade dos Ingredientes"
        content="Trabalhamos apenas com ingredientes frescos e de alta qualidade para garantir o sabor e a nutrição em todas as nossas refeições."
      />
      <AtomsCardDifferential
        title="Cardápios Personalizados"
        content="Criamos cardápios personalizados de acordo com as preferências e necessidades específicas de cada cliente."
      />
      <AtomsCardDifferential
        title="Compromisso com a Saúde"
        content=" Nossa equipe de chefs e nutricionistas prioriza a saúde e o bem-estar em todas as nossas receitas."
      />
      <AtomsCardDifferential
        title="Atendimento Excepcional"
        content=" Acreditamos em oferecer um atendimento amigável e ágil, sempre prontos para atender às suas solicitações."
      />
      <AtomsCardDifferential
        title="Entrega Confiável"
        content="Nossa equipe se orgulha de entregar as refeições pontualmente, garantindo que seus colaboradores desfrutem de suas refeições no horário adequado."
      />
    </div>
  </div>
</template>
