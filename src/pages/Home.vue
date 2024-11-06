<script setup>
import { ref, onMounted } from "vue";
import {RecipeService} from '@/services'
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layout/AppLayout.vue";

const recipes = ref()

const fetchRecipe = async ()=> {
    try {
        recipes.value = await RecipeService.getRecipeByLetter() 
    } catch (error) {
        console.log(error);     
    }
}

onMounted(fetchRecipe)

</script>

<template>
    <AppLayout>
        <template #title>Рецепты</template>

        <template #controls>
            <AppButton text="Добавить рецепт" />
        </template>

        <template #inner></template>

    </AppLayout>

</template>
