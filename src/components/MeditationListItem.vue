<template>
  <div class="card-container">
    <div class="card-title">{{item.title}}</div>
    <div class="card-descr">
      {{item.description}}
    </div>
    <button class="card-btn">
      Начать
      <IconArrowWithRound />
    </button>
    <div class="card-time">{{item.duration_min}} мин</div>
  </div>
</template>

<script setup lang="ts">
import IconArrowWithRound from "@/Icons/IconArrowWithRound.vue";
import type { Meditation } from "@/interfaces/meditation";

const {item} = defineProps<{ item: Meditation }>()

</script>

<style scoped>
.card-container {
  background-color: var(--color-card);
  border-radius: 1rem;
  padding: 1.2rem 2rem;
  width: 320px;
  position: relative;
  box-sizing: border-box;
}
.card-title {
  font-weight: 700;
  font-size: 24px;
  margin: 0 0 0.2rem 0;
  color: var(--color-dark);
}
.card-descr {
  margin: 0 0 1.1rem 0;
  font-size: 15px;
  color: var(--color-dark);
  line-height: 1.3;
}
.card-btn {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 12px;
  padding: 0.6rem 1.5rem;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.card-btn:hover {
  background: var(--color-primary-light);
}
.card-time {
  position: absolute;
  right: 2rem;
  bottom: 1.2rem;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 400;
}
</style>