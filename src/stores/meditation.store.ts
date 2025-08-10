import {defineStore} from "pinia";
import type {Meditation, MeditationsApiResponse} from "@/interfaces/meditation.ts";
import {ref} from "vue";
import {API_ROUTES, http} from "@/api.ts";

export const useMeditationStore = defineStore('meditation', () => {
    const meditations = ref<Meditation[]>([])

    async function fetchMeditations() {
        const {data} = await http.get<MeditationsApiResponse>(API_ROUTES.meditations)
        meditations.value = data.data.meditations
    }

    function getMeditationById(id:number) {
        return meditations.value.find(item => item.id == id)
    }

    return {
        meditations,
        fetchMeditations,
        getMeditationById
    }
})