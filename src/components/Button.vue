<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.button {
  background: var(--color-btn);
  border: none;
  border-radius: 10px;
  color: var(--color-white);
  height: 61px;
  padding: 0 55px;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-wrap: nowrap;
}
</style>