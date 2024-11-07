<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { useMainStore } from './stores/main';


const mainStore = useMainStore()

onMounted(()=> {
  mainStore.getAreas()
  mainStore.getCategories()
  mainStore.getIngredients()
})

</script>

<template>

  <RouterView />

</template>

