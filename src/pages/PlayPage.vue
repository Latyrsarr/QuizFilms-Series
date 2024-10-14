<template>
    <Quiz :quiz="quiz" v-if="state === 'idle'"/>

    <p v-if="state !='idle'">Le JSON n'existe pas ou une erreur s'est produite !</p>


</template>

<script setup>
import { onMounted, watch, ref, inject } from 'vue';
import Quiz from '@/Component/Quiz.vue';

const language = inject('language');
const setLanguage = inject('setLanguage');

const state = ref('loading')
const quiz = ref(null)
const loadQuiz = () => {
    const quizFile = language.value === 'fr' ? '/quiz.json' : '/quiz_translated.json';
    state.value = 'loading'; // Réinitialiser l'état à 'loading'

    fetch(quizFile)
    .then(r => {
        if (r.ok) {
            return r.json();
        }
        throw new Error('Impossible de recuperer le JSON');
    })
    .then(data => {
        quiz.value = data;
        state.value = 'idle';
    })
    .catch(() => {
        state.value = 'error'; // Mettre à jour l'état en cas d'erreur
    });
};

onMounted(loadQuiz);

watch(language, (newLang) => {
    loadQuiz(); // Recharger le quiz lorsque la langue change
});
</script>