<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <RouterLink to="/home" active-class="active">
      <FaIcon icon="fa-solid fa-house" size="lg" />
    </RouterLink>
    <RouterLink to="/library" active-class="active">Library</RouterLink>
    <RouterLink to="/sessions" active-class="active">Sessions</RouterLink>
  </nav>
</template>

<style lang="sass" scoped>
nav
    display: flex
    width: 100%
    align-items: center
    padding: 1rem 2rem
    gap: 2rem
    background-color: darken($background-dark, 10%)
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
    a
        transition-property: color, background-color
        transition-duration: 0.5s
        transition-timing-function: ease
        text-decoration: none
        color: $accent-lighter
        padding: 0.5rem
        text-transform: uppercase
        letter-spacing: 0.1rem
        font-weight: 500
        border-radius: 0.25rem
        &:hover, &.active
            color: lighten($background-dark, 40%)
            background-color: opacify($accent-lighter, 0.5)
</style>
