import {defineStore} from "pinia";
import {API_ROUTES, httpAuth} from "@/api.ts";
import type {Stat, StatResponse, StatsListResponse, StatsSummary, StatUpdateProps} from "@/interfaces/stats.ts";
import {ref} from "vue";

export const useStatsStore = defineStore('stats', () => {
    const stats = ref<Stat[]>()
    const summary = ref<StatsSummary >()

    async function updateStat(params: StatUpdateProps) {
        await httpAuth.post<StatResponse>(API_ROUTES.stats, params)
    }
    async function fetchStat() {
        const {data} =  await httpAuth.get<StatsListResponse>(API_ROUTES.stats)
        console.log('data: ', data)
        stats.value = data.data.stats
        summary.value = data.data.summary

        console.log('stats!: ', stats)
    }


    return {
        updateStat,
        fetchStat,
        stats,
        summary,
    }
})