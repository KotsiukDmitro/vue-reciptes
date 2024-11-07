<script setup>
import AppMenu from "@/components/AppMenu.vue";
</script>

<template>
  <div class="flex">
    <div class="w-[70px]">
      <AppMenu />
    </div>
    <main class="flex-1 p-5">
      <header class="flex justify-between items-center">
        <div class="text-[#4d0690] text-3xl font-bold">
          <slot name="title"></slot>
        </div>
        <div class="controls">
          <slot name="controls"></slot>
        </div>
      </header>
      <div class="pt-10">
        <slot name="inner"></slot>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>