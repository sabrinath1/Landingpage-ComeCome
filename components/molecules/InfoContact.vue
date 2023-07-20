<script setup lang="ts"></script>
<template>
  <div class="flex flex-col py-10 justify-items-center h-full w-full lg:w-96">
    <div class="flex w-full">
      <h3 class="text-primary text-3xl my-4 font-bold">Fale Conosco</h3>
    </div>

    <AtomsCardInfo img="img/telefone.png" content="(15)3232-4343" />
    <AtomsCardInfo img="img/whatsapp.png" content="(15)99999-9999" />
    <AtomsCardInfo img="img/email.png" content="sabrina@advocacia.com.br" />
    <AtomsCardInfo
      img="img/localizacao.png"
      content="Rua Afonso Vergueiro, 1589 - Centro / Sorocaba"
    />
    <MoleculesSocialLink />
  </div>
</template>
