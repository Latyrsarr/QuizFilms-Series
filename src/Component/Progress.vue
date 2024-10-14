<template>
    <div>
    <progress :value="value" :max="max" class="h-3 w-80 rounded-full "/>    Etape {{ value + 1 }}/{{ max + 1}}<br> 
    </div>
</template>

<script setup>

defineProps({
    value: Number,
    max: Number
})

</script>