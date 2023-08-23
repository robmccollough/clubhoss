<script setup>
import { ref, defineExpose } from 'vue'
import { onClickOutside } from '@vueuse/core'

const isOpen = ref(false)
const modal = ref(null)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

defineExpose({ open, close })
onClickOutside(modal, close)
</script>

<template>
  <div class="background" :class="isOpen && 'open'">
    <div ref="modal" class="modal">
      <a class="close-button" @click.stop="close">
        <FaIcon icon="rectangle-xmark" size="lg" />
      </a>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.background
    position: fixed
    width: 100vw
    height: 100vh
    background-color: transparentize($background,0.2)

    place-items: center
    display: none
    &.open
      display: grid
.modal
    width: min(400px,100%)
    height: min(500px,100%)
    overflow-y: scroll
    overflow-x: hidden
    padding: 2rem
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
    border-radius: 2rem
    position: relative
    background-color: $background-dark
.close-button
    position: absolute
    inset: 1.5rem 1.5rem auto auto
    font-size: 1rem
    color: $dark-grey

    text-decoration: none
</style>
