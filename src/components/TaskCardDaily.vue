<script setup>
import ButtonCard from '@/components/ButtonCard.vue'

defineProps({
  task: {
    title: String,
    className: String,
    hour: String,
    lastWeek: String,
    image: String,
    bagroundColor: String,
    required: true,
  },
})
</script>
<template>
  <div class="task-card-container rounded-xl" :class="task.title">
    <div
      class="imgTopCard flex justify-end rounded-t-xl z-10 relative lg:max-h-[3.825em] md:max-h-[2.825em]"
      :class="task.className"
      :style="{ backgroundColor: task.bagroundColor }"
    ></div>
    <div class="cardHover navy-900-bg rounded-xl py-8 px-4 mt-[-.5em] z-20 relative">
      <div class="task-card p-3 rounded-t-xl">
        <ButtonCard>
          <h3 class="text-white">{{ task.title }}</h3>
        </ButtonCard>

        <div class="time-frame flex justify-between items-center md:flex-col md:items-start">
          <p class="text-preset-1 text-white">{{ task.timeframes.daily.current }}hrs</p>
          <p class="text-preset-6 text-white">Yesterday {{ task.timeframes.daily.previous }}hrs</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.imgTopCard {
  background-position: right;
  background-repeat: no-repeat;
  height: 3.825em;
}
</style>
