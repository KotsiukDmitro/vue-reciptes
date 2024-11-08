import { ref } from 'vue'
import { defineStore } from 'pinia'
import { CommonService } from '@/services'

export const useMainStore = defineStore('main', () => {
  const areas = ref(null)
  const categories = ref(null)
  const ingredients = ref(null)

  const getAreas = async()=> {
    const data = await CommonService.getAreas()
    areas.value = data
  }

  const getCategories = async()=> {
    const data = await CommonService.getCategories()
    categories.value = data
  }

  const getIngredients = async()=> {
    const data = await CommonService.getIngredients()
    ingredients.value = data
  }

  return { areas, categories, ingredients, getAreas, getCategories, getIngredients}
})
