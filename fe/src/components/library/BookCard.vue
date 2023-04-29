<script setup>
import { toRefs, computed } from 'vue'
const props = defineProps({
  book: {
    type: Object,
    default: () => {}
  }
})
const { book } = toRefs(props)

const authors = computed(() =>
  book.value.authors.map((author) => author.name).join(',')
)
</script>
<template>
  <div class="book">
    <img class="image" :src="book.image" alt="Book thumbnail" />
    <div class="right">
      <div class="title">
        <p>
          {{ book.title }}
        </p>
      </div>
      <div class="subtitle">
        <p>
          {{ authors }}
        </p>
      </div>
      <div class="desc">somethign something something</div>
      <div class="cta">
        <FaIcon icon="fa-solid fa-arrow-up-right-from-square" size="lg" />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.book
  display: grid
  gap: 0.5rem
  grid-template-columns: 10rem 15rem
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
  background-color: $background-darker
  padding: 0.5rem
  border-radius: 0.25rem
  img
    border-radius: 0.25rem
  .right
    display: grid
    gap: 0.5rem
    padding: 0.5rem
    grid-template-columns: 100%
    grid-template-rows: repeat(4, auto)
  .title
    color: $text-light
    font-size: 1.5rem
    line-height: 1.2
    font-weight: 800
  .subtitle
    font-family: 'Roboto Condensed'
    color: $text-light
    font-size: 1rem
    line-height: 1.2
    font-weight: 600
  .desc
    font-family: 'Roboto Condensed'
    color: $text-light
    border-top: 2px solid $accent-lighter
    padding-top: 0.5rem
  .image
    width: 100%
  .cta
    display: flex
    justify-content: flex-end
    padding: 0.5rem
</style>
