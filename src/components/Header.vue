<template>
  <header class="header">
    <IconLogo class="logo" />
    <HeaderNavigation />
  </header>
</template>

<script setup lang="ts">

import IconLogo from "@/Icons/IconLogo.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin-bottom: -50px;
}
</style>