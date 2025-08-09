<template>
  <div class="wrapper">
    <IconLogoBig />
    <form class="form" @submit.prevent="login">
      <InputText v-model="form.username" placeholder="Имя пользователя" />
      <InputText v-model="form.password" placeholder="Пароль" />
      <Button>Войти в приложение</Button>
    </form>
  </div>
</template>

<script setup lang="ts">

import InputText from "@/components/InputText.vue";
import {ref} from "vue";
import IconLogoBig from "@/Icons/IconLogoBig.vue";
import Button from "@/components/Button.vue";
import {useAuthStore} from "@/stores/auth.store.ts";

const storeAuth = useAuthStore()

const form = ref<{
  username: string,
  password: string,
}>({
  username: "",
  password: "",
})

function login() {
  storeAuth.fetchLogin(form.value)
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 300px;
}
</style>