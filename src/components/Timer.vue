<template>
  <div class="wrapper">
    <div class="timer">
      {{ time }}
    </div>

    <div v-if="meditation">
      <h1 class="title">{{ meditation.title }}</h1>
      <p class="desc">{{ meditation.description }}</p>
    </div>

    <div class="controls">
      <div class="control-btn" v-if="!isTartTimer" @click="startTimer">
        <IconPlayBig/>
      </div>
      <div v-if="isTartTimer" class="controls-start">
        <div class="control-btn" @click="pauseTimer">
          <IconPauseBig/>
        </div>
        <div class="control-btn" @click="stopTimer">
          <IconCheckBig/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref, onUnmounted} from "vue";
import {useMeditationStore} from "@/stores/meditation.store.ts";
import type {Meditation} from "@/interfaces/meditation.ts";
import IconPlayBig from "@/Icons/IconPlayBig.vue";
import IconPauseBig from "@/Icons/IconPauseBig.vue";
import IconCheckBig from "@/Icons/IconCheckBig.vue";
import {useStatsStore} from "@/stores/stats.store.ts";

const route = useRoute()
const storeMeditation = useMeditationStore()
const storeStat = useStatsStore()

const meditation = ref<Meditation>()
const time = ref<string>("00:00")
const isTartTimer = ref<boolean>(false)

let remainingSeconds = 0 // сколько секунд осталось
let timerInterval: ReturnType<typeof setInterval> | null = null

function minutesToTimeFormat(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = (totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function startTimer() {
  if (isTartTimer.value) return
  isTartTimer.value = true

  timerInterval = setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds--
      time.value = minutesToTimeFormat(remainingSeconds)
    } else {
      stopTimer()
    }
  }, 1000)
}

function pauseTimer() {
  isTartTimer.value = false
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

function stopTimer() {
  isTartTimer.value = false
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }

  storeStat.updateStat({
    type: 'duration_min',
    value: secondsToMinutes(meditation.value.duration_min * 60 - remainingSeconds)
  })
}

function secondsToMinutes(seconds: number) {
  return Math.floor(seconds / 60);
}

onMounted(() => {
  meditation.value = storeMeditation.getMeditationById(Number(route.params.id))
  remainingSeconds = meditation.value.duration_min * 60
  time.value = minutesToTimeFormat(remainingSeconds)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>


<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.timer {
  width: 250px;
  height: 250px;
  background-image: url(/public/alarm-bg.png);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 50px;
  font-weight: bold;
}

.title {
  color: var(--color-white);
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.desc {
  color: var(--color-white);
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: .5;
}

.control-btn {
  background: var(--color-white);
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
}

.controls-start {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>