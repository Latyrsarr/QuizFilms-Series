

<template>
   <ul class="no-list-style ml-10">
    <li v-for="choice in choices.choices" :key="choice" class="mt-5 text-xl	">
      <input v-model="answer" :value="choice" type="radio" name="answer"> {{ choice }}
    </li>
  </ul>

  <!-- {{ answer }} -->
  <br><hr><br>
  <div class="flex justify-end mr-20" v-if="language ==='fr'">
   <!-- <button class="border w-40 h-10 bg-orange-700 hover:bg-orange-900 font-bold text-white" @click="checkAndNext">Suivant</button> -->
   <el-button type="warning" round @click="checkAndNext" class="bg-orange-700 hover:bg-orange-900 w-40 h-10 font-bold">Suivant</el-button>

   <!-- <p>{{ isCorrect }}</p> -->
   </div>
   <div class="flex justify-end mr-20"  v-else-if="language ==='en'">
   <!-- <button class="border w-40 h-10 bg-orange-700 hover:bg-orange-900 font-bold text-white" @click="checkAndNext">Suivant</button> -->
   <el-button type="warning" round @click="checkAndNext" class="bg-orange-700 hover:bg-orange-900 w-40 h-10 font-bold">Next</el-button>

   <!-- <p>{{ isCorrect }}</p> -->
   </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const props = defineProps({
    choices: Object,
})

const emit = defineEmits(['next-question'])

const answer = ref(null)
const isCorrect = ref(false)
const language = inject('language')


const checkAndNext = () => {
    isCorrect.value = answer.value === props.choices.correct_answer
    
    emit('next-question', isCorrect.value)
    
    answer.value = null
}
</script>