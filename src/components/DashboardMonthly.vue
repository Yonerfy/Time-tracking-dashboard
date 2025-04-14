<script setup>
import UserCard from '@/components/UserCard.vue'
import TaskCardMonthly from '@/components/TaskCardMonthly.vue'
import data from '@/assets/data.json'
import { ref } from 'vue'
const tasks = ref(data)
const user = ref({
  name: 'Jeremy Robson',
  daily: 'Daily',
  weekly: 'Weekly',
  monthly: 'Monthly',
})
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-container md:pb-[2em] pb-[2em]">
      <UserCard :user="user" />

      <TaskCardMonthly v-for="(task, index) in tasks" :key="index" :task="task" />
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
    'User Work Play Study'
    'User Exercise Social Self-Care';
  .User {
    grid-area: User;
  }
  .Work {
    grid-area: Work;
  }
  .Play {
    grid-area: Play;
  }
  .Study {
    grid-area: Study;
  }
  .Exercise {
    grid-area: Exercise;
  }
  .Social {
    grid-area: Social;
  }
  .Self-Care {
    grid-area: Self-Care;
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 2rem;
    grid-template-areas:
      'User User User'
      'Work Play Study'
      'Exercise Social Self-Care';
  }
}
@media (max-width: 426px) {
  .dashboard-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 2rem;
    grid-template-areas:
      'User'
      'Work'
      'Play'
      'Study'
      'Exercise'
      'Social'
      'Self-Care';
  }
}
</style>
