<template>
  <input type="text" v-model="data" class="input">
</template>

<script setup lang="ts">
const data = defineModel<string>()
</script>

<style scoped>
.input {
  border: 0;
  border-bottom: 1px var(--color-white) solid;
  color: var(--color-white-light);
  height: 50px;
  padding: 0 10px;
}
</style>