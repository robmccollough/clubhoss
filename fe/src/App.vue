<script setup>
import { RouterView } from 'vue-router'
import TopNav from '@/components/nav/TopNav.vue'
</script>

<template>
  <TopNav />
  <RouterView />
</template>

<style lang="sass">
#app
    display: flex
    width: 100vw
    flex-direction: column
</style>
