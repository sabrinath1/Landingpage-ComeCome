<template>
  <div
    class="flex flex-col justify-center w-full xl:w-full bg-gradient-to-t from-orange-400 to-orange-900 pb-10 -z-30"
  >
    <h1
      class="mb-10 lg:mb-5 text-4xl font-bold pt-10 lg:pt-0 text-center items-center text-secondary lg:mt-10"
    >
      Áreas de Atuação
    </h1>
    <div
      class="flex flex-col sm:flex-row flex-wrap justify-center items-center mb-10"
    >
      <AtomsCardServices
        img="/img/civil.png"
        title="Direito Civil"
        color="orange"
        content=" Consultas e acompanhamentos de processos, Filiação, Divórcio, Herença e Testamentos."
      ></AtomsCardServices>
      <AtomsCardServices
        content=" Revisão de juros abusivos, Vazamento de dados pessoais, Contratos de Financiamento, Indenização por Danos Morais e Materiais."
        color="brown"
        img="/img/consumidor.png"
        title="Direito do Consumidor"
      ></AtomsCardServices>
      <AtomsCardServices
        content=" Constituição de mpresas, Contratos Comerciais, Direito Societário, Propriedade Intelectual."
        img="/img/empresarial.png"
        title="Direito Empresarial"
        color="orange"
      ></AtomsCardServices>
      <AtomsCardServices
        content=" Contrato de Trabalho, Direitos Trabalhistas, Segurança e saúde de Trabalho, Organização Sindical."
        img="/img/trabalhista.png"
        title="Direito Trabalhista"
        color="brown"
      ></AtomsCardServices>
      <AtomsCardServices
        content=" Usucapião, Revisão de Contratos de Compra e Venda de Imóveis, Regegociação, Locação, Direito de Vizinhança entre outras."
        img="/img/imobiliaria.png"
        title="Direito Imobiliário"
        color="orange"
      ></AtomsCardServices>
      <AtomsCardServices
        content=" Formação do Contrato, Interpretação do contrato, Cumprimento do Contrato, Modificação e Rescisão de contrato"
        img="/img/contratual.png"
        title="Direito Contratual"
        color="brown"
      ></AtomsCardServices>
    </div>
  </div>
</template>
