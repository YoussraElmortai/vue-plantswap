<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
         <RouterLink to="/stekjes">stekjes</RouterLink>
        <RouterLink to="/workshops">workshops</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>

</style>
