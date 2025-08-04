<template>
  <div class="navigation">
    <RouterLink to="/" class="link" active-class="active">
      <IconPlay/>
      Медитация
    </RouterLink>
    <div class="line"></div>
    <RouterLink to="/stats" class="link" active-class="active">
      <IconStats/>
      Статистика
    </RouterLink>
    <div class="line"></div>
    <RouterLink to="/test" class="link" active-class="active">
      <IconDoor/>
      Выход
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import IconPlay from "@/Icons/IconPlay.vue";
import IconStats from "@/Icons/IconStats.vue";
import IconDoor from "@/Icons/IconDoor.vue";
</script>

<style scoped>
.navigation {
  display: flex;
  height: 92px;
  gap: 20px;
}

.link {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  cursor: pointer;
  padding: 0 40px;
  opacity: .5;
}

.link:hover {
  opacity: 1;
}

.link.active {
  opacity: 1;
}

.line {
  background: var(--color-primary-extra-light);
  width: 3px;
}
</style>