<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <RouterLink to="/home" active-class="active">Home</RouterLink>
    <RouterLink to="/library" active-class="active">Library</RouterLink>
    <RouterLink to="/sesssions" active-class="active">Sesssions</RouterLink>
  </nav>
</template>

<style lang="sass" scoped>
nav
    display: flex
    width: 100%
    align-items: center
    padding: 1rem 2rem
    gap: 2rem
    background-color: $background
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
            color: lighten($background, 20%)
            background-color: opacify($accent-lighter, 0.5)
</style>
