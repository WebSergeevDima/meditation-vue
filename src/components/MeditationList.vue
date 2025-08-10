<template>
  <div class="wrapper">
    <div class="user-info">
      <img src="/public/user-logo.png" alt="Пользователь" class="logo"/>
      <div>
        <h1 class="title">Добро пожаловать, {{storeProfile?.profile?.username}}!</h1>
        <p class="desc">Как вы сегодня себя чувствуете?</p>
      </div>
      <Feels />
    </div>
    <div class="meditation-list">
      <MeditationListItem v-for="item in storeMeditation.meditations" :key="item.id" :item="item" />
    </div>
  </div>

</template>

<script setup lang="ts">
  import {onMounted} from "vue";
  import {useMeditationStore} from "@/stores/meditation.store.ts";
  import MeditationListItem from "@/components/MeditationListItem.vue";
  import Feels from "@/components/Feels.vue";
  import {useProfileStore} from "@/stores/profile.store.ts";

  const storeMeditation = useMeditationStore()
  const storeProfile = useProfileStore()

  onMounted(() => {
    storeMeditation.fetchMeditations()
    storeProfile.fetchProfile()
  })
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 100px;
}

.user-info {
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.meditation-list {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.title {
  color: var(--color-white);
  font-size: 30px;
  font-weight: 500;
}

.desc {
  font-size: 22px;
  font-weight: 400;
  color: var(--color-white);
  opacity: 0.7;
}

.logo {
  width: 129px;
  height: 129px;
}
</style>