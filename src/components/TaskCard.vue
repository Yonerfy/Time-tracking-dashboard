<script setup>
import { defineProps } from 'vue'
import ButtonCard from '@/components/ButtonCard.vue'
defineProps({
  task: {
    title: String,
    hour: String,
    lastWeek: String,
    image: String,
    required: true,
  },
})
</script>
<template>
  <div class="task-card-container" :class="task.title">
    <div class="imgTopCard">
      <img :src="task.image" alt="Task Image" />
    </div>
    <div class="task-card">
      <ButtonCard>
        <h3>{{ task.title }}</h3>
      </ButtonCard>

      <p>{{ task.timeframes.daily.current }}hrs</p>
      <p>Yesterday {{ task.timeframes.daily.previous }}hrs</p>
    </div>
  </div>
</template>
<style scoped></style>
