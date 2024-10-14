<template>
  <HeaderBar/>
  <div>
    <RouterView/>
  </div>
  
</template>




<script setup>
import { onMounted, ref, provide } from 'vue';
import Quiz from './Component/Quiz.vue';
import HeaderBar from './Component/HeaderBar.vue';
import HomePage from './pages/HomePage.vue';
import PlayPage from './pages/PlayPage.vue';

const language = ref('fr')

const setLanguage = (newLanguage) => {
  language.value = newLanguage
}

provide('language', language)
provide('setLanguage', setLanguage)

</script>
