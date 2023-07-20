<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <n-button
    text
    style="font-size: 30px"
    class="static"
    @click="social.redirect('facebook')"
  >
    <Icon
      name="mdi:facebook"
      class="text-secondary hover:text-primary transition-all"
    />
  </n-button>
</template>
