<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  book: {
    type: Object,
    default: () => {}
  }
})
const { book } = toRefs(props)
</script>
<template>
  <div>
    {{ book.title }}
  </div>
</template>

<style lang="sass" scoped>
div
  color: red
</style>
