<script setup lang="ts">
import { FormKit } from "@formkit/vue";

const myInput = ref();

const showModal = ref(false);
async function send(data: any) {
  // colocar funcao para enviar mensagem ao email do cliente.

  showModal.value = true;

  myInput?.value?.node?.reset();
}
</script>
<template>
  <div class="flex">
    <div class="bg-secondary text-primary py-10 w-96 px-4 rounded-lg">
      <div class="flex justify-center w-full">
        <h3 class="text-primary text-4xl my-4 font-bold">Entre em Contato</h3>
      </div>

      <FormKit
        ref="myInput"
        type="form"
        @submit="send"
        name="formContact
      "
        submit-label="Enviar Mensagem"
        :submit-attrs="{
          inputClass: '!bg-primary',
        }"
      >
        <div>
          <FormKit
            label="Nome"
            type="text"
            name="name"
            label-class="text-primary"
            placeholder="Nome Completo"
            validation="required"
          />
        </div>
        <div>
          <FormKit
            type="tel"
            label-class="text-primary"
            label="Celular"
            placeholder="(__)_____-____"
            mask="(99)99999-9999"
            :validation="[
              ['required'],
              ['matches', /^[0-9]{2}[0-9]{5}[0-9]{4}$/],
            ]"
            name="phone"
            :validation-messages="{
              matches: 'Numero de celular com discagem incorreta',
            }"
            validation-visibility="dirty"
            max="11"
          />
        </div>
        <div>
          <FormKit
            type="email"
            label-class="text-primary"
            label="E-mail"
            validation-visibility="live"
            placeholder="email@email.com"
            name="email"
            validation="required|email"
            :validation-messages="{
              email: 'E-mail com formato incorreto',
            }"
          />
        </div>
        <FormKit
          type="textarea"
          label-class="text-primary"
          label="Mensagem"
          name="message"
          placeholder="Digite sua mensagem ..."
          rows="10"
          maxlength="500"
          validation="required"
        />
      </FormKit>

      <n-modal
        class="max-w-md"
        v-model:show="showModal"
        preset="card"
        title=" Obrigado por entrar em contato conosco!"
      >
        <div class="text-primary">
          Recebemos sua mensagem e entraremos em contato o mais breve possível
          para discutir sobre seu caso.
          <br />Mas se preferir, fale conosco através do nosso WhatsApp!
        </div>
      </n-modal>
    </div>
  </div>
</template>
