<template>
  <div class="feels">
    <div class="feel">
      <div class="feel-icon">
        <IconFeelCalm/>
      </div>
      <div class="feel-text">Спокойно</div>
    </div>
    <div class="feel">
      <div class="feel-icon">
        <IconFeelRelax />
      </div>
      <div class="feel-text">Расслабленно</div>
    </div>
    <div class="feel">
      <div class="feel-icon">
        <IconFeelFocus/>
      </div>
      <div class="feel-text">Фокусировано</div>
    </div>
    <div class="feel">
      <div class="feel-icon">
        <IconFeelAnxi />
      </div>
      <div class="feel-text">Тревожно</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import IconFeelCalm from "@/Icons/IconFeelCalm.vue";
import IconFeelRelax from "@/Icons/IconFeelRelax.vue";
import IconFeelFocus from "@/Icons/IconFeelFocus.vue";
import IconFeelAnxi from "@/Icons/IconFeelAnxi.vue";
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