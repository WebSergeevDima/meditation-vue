<template>
  <div>
    <Header />
    <main class="main">
      <Timer />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Timer from "@/components/Timer.vue";
</script>

<style scoped>
.main {
  padding: 0 40px;
}
</style>