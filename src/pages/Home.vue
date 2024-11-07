<script setup>
import { ref, onMounted } from "vue";
import { RecipeService } from "@/services";
import { ROUTES_PATHS } from "@/constants";
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layout/AppLayout.vue";

const recipes = ref();

const fetchRecipe = async () => {
  try {
    recipes.value = await RecipeService.getRecipeByLetter();
  } catch (error) {
    console.log(error);
  }
};

const getRecipePath = (id) => {
  return `${ROUTES_PATHS.RECIPE.split(":")[0]}${id}`;
};

onMounted(fetchRecipe);
</script>

<template>
  <AppLayout>
    <template #title>Рецепты</template>

    <template #controls>
      <RouterLink :to="getRecipePath('new')">
        <AppButton text="Добавить рецепт" />
      </RouterLink>
    </template>

    <template #inner>
      <div class="wrapper">
        <el-table :data="recipes" style="width: 100%">
          <el-table-column prop="idMeal" label="Id" width="150" />

          <el-table-column label="Image" width="150">
            <template #default="scope">
              <RouterLink :to="getRecipePath(scope.row.idMeal)">
                <img :src="scope.row.strMealThumb" class="w-16" />
              </RouterLink>
            </template>
          </el-table-column>

          <el-table-column prop="strMeal" label="Name" />
          <el-table-column prop="strArea" label="Area" width="200" />
          <el-table-column prop="strCategory" label="Category" width="200" />
          <el-table-column label="Tags">
            <template #default="scope">
              <template v-if="scope?.row?.strTags">
                <el-tag
                  v-for="(tag, key) in scope?.row?.strTags.split(',')"
                  :key="key"
                  type="primary"
                  class="m-1"
                  >{{ tag }}</el-tag
                >
              </template>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
  </AppLayout>
</template>

