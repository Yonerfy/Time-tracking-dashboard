<script setup>
import UserCard from '@/components/UserCard.vue'
import TaskCardDaily from '@/components/TaskCardDaily.vue'
import data from '@/assets/data.json'
import { ref } from 'vue'
const tasks = ref(data)
const user = ref({
  name: 'Jeremy Robson',
  daily: 'Daily',
  weekly: 'Weekly',
  monthly: 'Monthly',
})
const active = ref('daily')
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-container md:pb-[2em] pb-[2em]">
      <UserCard :user="user" :active="active" />

      <TaskCardDaily v-for="(task, index) in tasks" :key="index" :task="task" />
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  grid-template-areas:
    'user work play study'
    'user exercise social self-Care';
  .User {
    grid-area: user;
  }
  .Work {
    grid-area: work;
  }
  .Play {
    grid-area: play;
  }
  .Study {
    grid-area: study;
  }
  .Exercise {
    grid-area: exercise;
  }
  .Social {
    grid-area: social;
  }
  .Self-Care {
    grid-area: self-Care;
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 2rem;
    grid-template-areas:
      'user user user'
      'work play study'
      'exercise social self-Care';
  }
}
@media (max-width: 426px) {
  .dashboard-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 2rem;
    grid-template-areas:
      'user'
      'work'
      'play'
      'study'
      'exercise'
      'social'
      'self-Care';
  }
}
</style>
