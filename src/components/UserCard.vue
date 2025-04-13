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
    <div class="user-container purble-600-bg rounded-xl p-[2em] z-20 relative">
      <div class="img-container mb-[2.3em]">
        <img
          src="../assets/images/image-jeremy.png"
          alt="User Image"
          class="rounded-full w-[4.665em] h-[4.665em] border-3 border-white"
        />
      </div>
      <div class="user-card mb-[5.75em]">
        <h3 class="text-preset-6 navy-200">Report for</h3>
        <p class="text-preset-2 text-white lg:w-[50%]">{{ user.name }}</p>
      </div>
    </div>
    <div class="navy-900-bg rounded-b-xl p-[2em] mt-[-1em] flex flex-col items-start z-10 relative">
      <button class="report-time text-preset-5-regular purble-500 my-[1.313em]">
        {{ user.daily }}
      </button>
      <button class="report-time text-preset-5-regular purble-500 mb-[1.313em]">
        {{ user.weekly }}
      </button>
      <button class="report-time text-preset-5-regular purble-500 mb-[1.313em]">
        {{ user.monthly }}
      </button>
    </div>
  </div>
</template>
<style>
button.report-time:hover {
  color: white;
  cursor: pointer;
}
</style>
