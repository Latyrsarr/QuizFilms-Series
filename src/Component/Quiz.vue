<template>
    <h2 class="text-green-700 text-3xl font-bold mt-16 ml-60">{{ quiz.title }}</h2>
    <Progress :value="step" :max="quiz.questions.length - 1" class="ml-60 mt-5"/>
    
    <div v-if="step < quiz.questions.length" class="ml-80 mt-16">
        <hr>
        <Question :question="question"/>
        <Choices :choices="question" @next-question="nextQuestion"/>
    </div>
    
    <div v-else class="ml-40 mt-16 flex flex-col items-center justify-center">
        <h3 class="text-3xl font-bold">Quiz terminé!</h3>
        <p class="text-xl font-bold" v-if="score>=quiz.questions.length/2">Felicitation vous avez atteint le minimum!!</p>
        <img v-if="score>=3" src="../assets/54051.jpg" alt="" class="w-80 h-52">
        <p class="text-2xl">Votre score final est: {{ score }} / {{ quiz.questions.length }}</p>
    </div>
</template>    

<script setup> 
import { computed, ref } from 'vue';
import Progress from './Progress.vue';
import Question from './Question.vue';
import Choices from './Choices.vue';

const props = defineProps({
    quiz: Object
})

const step = ref(0)
const score = ref(0)
const question = computed(() => props.quiz.questions[step.value])

const nextQuestion = (isCorrect) => {
    if (isCorrect) {
        score.value++
    }
    step.value++
}
</script>