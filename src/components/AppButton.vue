<script setup>

const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    circle: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ''
    },
})

</script>

<template>
    <div>
        <el-button v-if="!circle" type="primary" class="!bg-[#4d0690] !text-xl !py-5 !px-6 !rounded-md">{{ text }}</el-button>
        <el-button v-else circle type="primary" :icon="icon"  class="!bg-red-500"/>
    </div>
</template>

