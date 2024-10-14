
<template>
    <div v-if="language === 'fr'" class="ml-60 py-16">
      <h2 class="text-3xl font-bold text-green-700 mb-6">Bienvenue sur la plateforme Quiz Films & Séries</h2>
      <br><br><br><hr>
      <p class="text-xl text-gray-700 leading-relaxed mb-8 ml-20 mr-10 mt-16">
        Teste tes connaissances sur les films et les séries à travers une série de questions amusantes et engageantes ! 
        Que tu sois un cinéphile aguerri ou un fan de séries, notre plateforme est faite pour toi. 
        Joue dès maintenant et tente de répondre correctement à un maximum de questions sur tes films et séries préférés.
      </p>
  
      <router-link to="/play">
        <br><hr><br>
        <div class="flex justify-end mr-20">
            <button class="border w-60 h-10 bg-orange-700 hover:bg-orange-900 font-bold text-white mt-5" @click="checkAndNext">
                Commence à jouer
            </button>
        </div>    
      </router-link>
    </div>
    <div v-else-if="language === 'en'" class="ml-60 py-16">
        <h2 class="text-3xl font-bold text-green-700 mb-6">Welcome to the Movie & Series Quiz Platform</h2>
        <br><br><br><hr>
        <p class="text-xl text-gray-700 leading-relaxed mb-8 ml-20 mr-10 mt-16">
            Test your knowledge of movies and series through a fun and engaging series of questions! 
            Whether you're a seasoned cinephile or a TV series fan, our platform is made for you. 
            Play now and try to answer as many questions correctly as you can about your favorite movies and series.
        </p>

        <router-link to="/play">
            <br><hr><br>
            <div class="flex justify-end mr-20">
            <button class="border w-60 h-10 bg-orange-700 hover:bg-orange-900 font-bold text-white mt-5" @click="checkAndNext">
                Start Playing
            </button>
            </div>    
        </router-link>
    </div>

  </template>
  
  <script setup>
    import { inject } from 'vue'
    const language = inject('language')

</script>
  
  
  