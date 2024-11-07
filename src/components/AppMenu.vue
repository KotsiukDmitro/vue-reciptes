<script setup>
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ROUTES_PATHS } from "@/constants";

const router = useRouter();
const route = useRoute();

const isPathActive = (path) => {
  return route.path === path;
};

onMounted(()=>isPathActive);
</script>

<template>
  <div class="h-screen border-r border-[#dcdfe6] pt-5 py-1.5">
    <div class="flex justify-center">
      <img
        class="w-12 py-4 pb-4 border-b border-[#dcdfe6]"
        src="../assets/image/logo.jpg"
        alt="logo"
      />
    </div>

    <el-menu :router="true" class="el-menu-vertical-demo !border-none">
      <el-menu-item
        :index="ROUTES_PATHS.HOME"
        :class="[
          '!text-[#4d0690]',
          isPathActive(ROUTES_PATHS.HOME) && '!text-[#FF5A79]',
        ]"
      >
        <el-icon class="w-6"><Food /></el-icon>
      </el-menu-item>
      <el-menu-item
        :index="ROUTES_PATHS.CATEGORIES"
        :class="[
          '!text-[#4d0690]',
          isPathActive(ROUTES_PATHS.CATEGORIES) && '!text-[#FF5A79]',
        ]"
      >
        <el-icon class="w-6"><Dish /></el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>



<style scoped>
</style>