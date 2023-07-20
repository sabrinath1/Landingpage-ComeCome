<script setup lang="ts"></script>
<template>
  <MoleculesBanner
    imgBanner="img/banner-desktop.png"
    class="hidden md:block xl:hidden"
  />
  <!-- <MoleculesBanner imgBanner="img/banner-mobile.png" class="block md:hidden" /> -->
  <MoleculesBanner imgBanner="img/banner-tablet.png" class="block md:hidden" />
  <MoleculesBanner imgBanner="img/banner-tv.png" class="hidden xl:block" />
</template>
