<template>
    <div>
      <div v-if="storeStats.stats" v-for="item in storeStats.stats" class="stat">
        <div>{{item.feeling_calm}}</div>
        Минут медитации
      </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useStatsStore} from "@/stores/stats.store.ts";

const storeStats = useStatsStore()

onMounted(async () => {
  await storeStats.fetchStat()
})
</script>

<style scoped>
  .stat {
    background: #69B09C;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 150px;
    font-size: 20px;
    color: var(--color-white);
    border-radius: 20px;
    padding: 20px;
  }
</style>