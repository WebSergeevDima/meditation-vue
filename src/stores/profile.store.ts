import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {API_ROUTES, http, httpAuth} from "@/api.ts";
import type {LoginResponse, RegistrationResponse, User, UserLogin, UserProfileResponse} from "@/interfaces/auth.ts";
import {useRouter} from "vue-router";

export const useProfileStore = defineStore('profile', () => {
    const profile = ref<any>()

    async function fetchProfile() {
        const {data} = await httpAuth.get<UserProfileResponse>(API_ROUTES.profile)
        profile.value = data.data.user
    }

    return {
        profile,
        fetchProfile,
    }
})