<template>
    <div>
    <!-- <progress :value="value" :max="max" class="h-3 w-80 rounded-full "/>    Etape {{ value + 1 }}/{{ max + 1}}<br>  -->

    <el-progress class=" text-green-900 w-2/3" :stroke-width="15" color=" #047857" :percentage="(value + 1)*10" v-if="(value + 1) <= 10" />
    <el-progress class=" text-green-900 w-2/3" :stroke-width="15" color=" #047857" :percentage="100" v-if="(value + 1) > 10" />
    
    </div>
</template>

<script setup>
import { ref } from 'vue';

const color= ref('#fffff')


defineProps({
    value: Number,
    max: Number
})

</script>