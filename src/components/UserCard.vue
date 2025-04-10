<script setup>
import { defineProps } from 'vue'
defineProps({
  user: {
    name: String,
    daily: String,
    weekly: String,
    monthly: String,
    required: true,
  },
})
</script>
<template>
  <div class="user-container User">
    <div class="img-container">
      <img src="../assets/images/image-jeremy.png" alt="User Image" />
    </div>
    <div class="user-card">
      <h3>Report for</h3>
      <p>{{ user.name }}</p>
    </div>
    <div>
      <p>{{ user.daily }}</p>
      <p>{{ user.weekly }}</p>
      <p>{{ user.monthly }}</p>
    </div>
  </div>
</template>
<style scoped></style>
