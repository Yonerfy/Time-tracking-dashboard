<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
defineProps({
  user: {
    name: String,
    daily: String,
    weekly: String,
    monthly: String,
    required: true,
  },
  active: {
    type: String,
    default: 'daily',
  },
})
</script>
<template>
  <div class="user-container User">
    <div
      class="user-container purble-600-bg rounded-xl p-[2em] z-20 relative flex items-center md:flex md:items-center lg:flex-col lg:items-start"
    >
      <div class="img-container lg:mb-[2.3em]">
        <img
          src="../assets/images/image-jeremy.png"
          alt="User Image"
          class="rounded-full w-[4.665em] h-[4.665em] border-3 border-white"
        />
      </div>
      <div class="user-card lg:mb-[5.75em] ml-[1em] md:ml-[1.5em] lg:ml-0">
        <h3 class="text-preset-6 navy-200">Report for</h3>
        <p class="text-preset-2 text-white lg:w-[50%]">{{ user.name }}</p>
      </div>
    </div>
    <div
      class="navy-900-bg rounded-b-xl p-[2em] mt-[-1em] flex lg:flex-col lg:items-start items-center md:items-center md:justify-around justify-between z-10 relative"
    >
      <RouterLink
        to="/"
        class="report-time text-preset-5-regular purble-500 my-[1.313em]"
        active-class="daily"
      >
        {{ user.daily }}
      </RouterLink>
      <RouterLink
        to="/weekly"
        class="report-time text-preset-5-regular purble-500 lg:mb-[1.313em]"
        active-class="weekly"
      >
        {{ user.weekly }}
      </RouterLink>
      <RouterLink
        to="/monthly"
        class="report-time text-preset-5-regular purble-500 lg:mb-[1.313em]"
        active-class="monthly"
      >
        {{ user.monthly }}
      </RouterLink>
    </div>
  </div>
</template>
<style>
a.report-time:hover {
  color: white;
  cursor: pointer;
}
.daily,
.weekly,
.monthly {
  color: white !important;
}
</style>
