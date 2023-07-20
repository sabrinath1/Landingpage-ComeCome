<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <n-button
    text
    style="font-size: 30px"
    class="static"
    @click="social.redirect('linkedin')"
  >
    <Icon
      name="mdi:linkedin"
      class="text-secondary hover:text-primary transition-all"
    />
  </n-button>
</template>
