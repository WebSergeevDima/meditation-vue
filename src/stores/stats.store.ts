import {defineStore} from "pinia";
import {API_ROUTES, httpAuth} from "@/api.ts";
import type {StatResponse, StatUpdateProps} from "@/interfaces/stats.ts";

export const useStatsStore = defineStore('stats', () => {

    async function updateStat(params: StatUpdateProps) {
        await httpAuth.post<StatResponse>(API_ROUTES.stats, params)
    }

    return {
        updateStat,
    }
})