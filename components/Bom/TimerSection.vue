<template>
  <div>
    <div class="text-center text-fit-container">{{ numberToShow }}</div>
    <div class="text-center">{{ textToShow }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ numberToShow: string; textToShow: string }>();
</script>
<style>
.text-fit-container {
  font-size: 7.5vw;
}
</style>
