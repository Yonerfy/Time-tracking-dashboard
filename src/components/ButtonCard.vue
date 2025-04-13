<script setup>
import btnImg from '../assets/images/icon-ellipsis.svg'
</script>
<template>
  <button class="btn flex justify-between items-center w-[100%] p-4 ps-0 navy-900 text-white">
    <slot></slot>
    <img :src="btnImg" alt="Image for btn" class="" />
  </button>
</template>

<style scoped></style>
