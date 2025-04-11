<script setup>
import UserCard from '@/components/UserCard.vue'
import TaskCard from '@/components/TaskCard.vue'
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
    <div class="dashboard-container">
      <UserCard :user="user" />

      <TaskCard v-for="(task, index) in tasks" :key="index" :task="task" />
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
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
</style>
