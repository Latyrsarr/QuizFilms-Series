<template>

<h3 class="text-3xl font-bold text-orange-700">{{ question.question }}</h3>

</template>

<script setup>

defineProps({
    question: Object
})

</script>