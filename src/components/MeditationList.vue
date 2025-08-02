<template>
  <MeditationListItem v-for="item in storeMeditation.meditations" :key="item.id" :item="item" />
</template>

<script setup lang="ts">
  import {onMounted} from "vue";
  import {useMeditationStore} from "@/stores/meditation.store.ts";
  import MeditationListItem from "@/components/MeditationListItem.vue";

  const storeMeditation = useMeditationStore()

  onMounted(() => {
    storeMeditation.fetchMeditations()
  })
</script>

<style scoped>

</style>