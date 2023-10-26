<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <span>Plantswap</span>
      <nav>
        <RouterLink class="link" to="/">HOME</RouterLink>
         <RouterLink class="link" to="/stekjes">STEKJES</RouterLink>
        <RouterLink class="link" to="/workshops">WORKSHOPS</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style>

header{
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}

nav{
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 1rem;
}

span{
  color:var(--accent-color);
  font-family: Arial, Helvetica, sans-serif;
  font-size: var( --title-size);
}


</style>
