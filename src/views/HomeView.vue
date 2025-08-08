<template>
  <div>
    <Header />
    <main class="main">
      <MeditationList />
    </main>
  </div>
</template>

<script setup lang="ts">
import MeditationList from "@/components/MeditationList.vue";
import Header from "@/components/Header.vue";
</script>

<style scoped>
.main {
  padding: 0 40px;
}
</style>