import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {API_ROUTES, http} from "@/api.ts";
import type {LoginResponse, RegistrationResponse, User, UserLogin} from "@/interfaces/auth.ts";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore('auth', () => {
    const AUTH_TOKEN_STORE = 'meditation-auth-token'

    const router = useRouter()
    const user = ref<User>([])
    const token = ref<string>()
    const initialValue = localStorage.getItem(AUTH_TOKEN_STORE)

    if(initialValue) {
        token.value = initialValue
    }

    function clearToken() {
        token.value = undefined
        localStorage.removeItem(AUTH_TOKEN_STORE)
    }

    const getToken = computed(() => token.value)

    async function fetchLogin(params: UserLogin) {
        const {data} = await http.post<LoginResponse>(API_ROUTES.login, params)
        console.log('data: ',data)

        user.value = data.data.user
        token.value = data.data.token
        localStorage.setItem(AUTH_TOKEN_STORE, data.data.token)

        if(data.status == 'success') {
            router.push({
                name: 'main'
            })
        }
        //user.value = data.data
    }

    async function fetchRegistration(params) {
        const {data} = await http.post<RegistrationResponse>(API_ROUTES.registration, params)

        if(data.status == 'success') {
            router.push({
                name: 'auth'
            })
        }
    }

    return {
        user,
        fetchLogin,
        fetchRegistration,
        getToken,
        clearToken,
    }
})