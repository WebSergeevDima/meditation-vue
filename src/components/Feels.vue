<template>
  <div class="feels">
    <div v-for="item in FEELS_LIST" class="feel" @click="updateFeel(item.type)">
      <div class="feel-icon">
        <IconFeelCalm v-if="item.type == 'feeling_calm'" />
        <IconFeelRelax v-if="item.type == 'feeling_relax'" />
        <IconFeelFocus v-if="item.type == 'feeling_focus'" />
        <IconFeelAnxi v-if="item.type == 'feeling_anxiety'" />
      </div>
      <div class="feel-text">{{item.name}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconFeelCalm from "@/Icons/IconFeelCalm.vue";
import IconFeelRelax from "@/Icons/IconFeelRelax.vue";
import IconFeelFocus from "@/Icons/IconFeelFocus.vue";
import IconFeelAnxi from "@/Icons/IconFeelAnxi.vue";
import {useFeelsStore} from "@/stores/feels.store.ts";

const FEELS_LIST = [{
  type: 'feeling_calm',
  name: 'Спокойно'
},{
  type: 'feeling_relax',
  name: 'Расслабленно'
},{
  type: 'feeling_focus',
  name: 'Фокусировано'
},{
  type: 'feeling_anxiety',
  name: 'Тревожно'
}]

const storeFeels = useFeelsStore()
function updateFeel(feel: string) {
  storeFeels.updateFeel(feel)
}
</script>

<style scoped>
.feels {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.feel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.feel-icon {
  width: 65px;
  height: 65px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: var(--color-white);
}

.feel-text {
  color: var(--color-white);
  text-align: center;
}
</style>