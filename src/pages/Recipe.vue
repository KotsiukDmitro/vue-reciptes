<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { RecipeService } from "@/services";
import { useMainStore } from "@/stores/main";
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layout/AppLayout.vue";

const route = useRoute();
const recipeId = route?.params.id;
const recipe = ref(RecipeService.getEmptyRecipe());
const recipeUpdated = ref(RecipeService.getEmptyRecipe());
const isCreatingMode = ref(true);
const mainStore = useMainStore();
const areas = computed(() => mainStore.areas);
const categories = computed(() => mainStore.categories);
const ingredients = computed(() => mainStore.ingredients);

const fetchRecipe = async () => {
  try {
    const data = await RecipeService.getRecipeById(recipeId);
    recipe.value = { ...data };
    recipeUpdated.value = { ...data };
    isCreatingMode.value = false;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  if (parseInt(recipeId)) {
    fetchRecipe();
  }
});
</script>

<template>
  <AppLayout>
    <template #title>{{
      isCreatingMode ? "Новый рецепт" : recipeUpdated.strMeal
    }}</template>

    <template #controls>
      <AppButton text="Сохранит" />
    </template>

    <template #inner>
      <div class="wrapper">
        <div class="flex mb-4">
          <div class="flex-auto w-1/2 mx-2">
            <div class="text-xl pb-1">Title</div>
            <el-input v-model="recipeUpdated.strMeal" placeholder="title" />
          </div>
          <div class="flex-auto w-1/2 mx-2">
            <div class="text-xl pb-1">Area</div>
            <el-select v-model="recipeUpdated.strArea" placeholder="Area">
              <el-option
                v-for="item in areas"
                :key="item.strArea"
                :label="item.strArea"
                :value="item.strArea"
              />
            </el-select>
          </div>
        </div>
        <div class="flex mb-4">
          <div class="flex-auto w-1/2 mx-2">
            <div class="text-xl pb-1">Categories</div>
            <el-select
              v-model="recipeUpdated.strCategory"
              placeholder="Categories"
            >
              <el-option
                v-for="item in categories"
                :key="item.strCategory"
                :label="item.strCategory"
                :value="item.strCategory"
              />
            </el-select>
          </div>
        </div>
        <div class="flex mb-4">
          <div class="flex-auto w-1/2 mx-2">
            <div class="text-xl pb-1">Ingredients</div>
            <el-input
              v-model="recipeUpdated.strInstructions"
              :autosize="{ minRows: 2, maxRows: 5 }"
              type="textarea"
              placeholder="Ingredients"
            />
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>
