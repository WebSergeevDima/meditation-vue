<template>
  <div>
    <Header />
    <main class="main">
      <Stats />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Stats from "@/components/Stats.vue";
</script>

<style scoped>
.main {
  padding: 0 40px;
}
</style>