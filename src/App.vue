<script setup>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
</script>

<template>
  <HeaderPage />
  <RouterView />
  <FooterPage />
</template>

<style scoped>
</style>
