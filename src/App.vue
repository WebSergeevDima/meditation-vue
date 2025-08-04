<template>
<div>
  <Header />
  <main class="main">
    <RouterView />
  </main>
</div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<style scoped>
.main {
  padding: 0 40px;
}
</style>