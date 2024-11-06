<script setup>

const props = defineProps({
    text: {
        type: String,
        default: ''
    }
})

</script>

<template>
    <div>
        <el-button type="primary" class="!bg-[#4d0690] !text-xl !py-5 !px-6 !rounded-md">{{ text }}</el-button>
    </div>
</template>

