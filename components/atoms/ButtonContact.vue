<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <button @click="() => social.redirect('whatsapp')">
    <slot></slot>
  </button>
</template>
