import {defineStore} from "pinia";
import {API_ROUTES, http, httpAuth} from "@/api.ts";
import type {ResponseDataFeel} from "@/interfaces/feels.ts";

export const useFeelsStore = defineStore('feels', () => {



    async function updateFeel(feel: string) {
        const {data} = await httpAuth.post<ResponseDataFeel>(API_ROUTES.feel, {
            type: feel,
            value: 1
        })
        console.log('data: ',data)
    }

    return {
        updateFeel,
    }
})