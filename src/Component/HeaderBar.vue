<template>
    <Header class="flex justify-between items-center bg-green-700 h-16 font-bold">
        <div class="space-x-10  text-xm ml-8">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/play">Play</RouterLink>
        </div>
        <div class="text-xm mr-6">
            <label for="">Langue : </label>
            <select v-model="language" @change="changeLanguage" name="" class="bg-green-700 border-2 border-gray-400 h-10" >
                <option value="fr" selected class="bg-orange-600">Français</option>
                <option value="en" class="bg-orange-600">English</option>
            </select>
        </div>
        
    </Header>
</template>

<script setup>
import { inject } from 'vue'

const setLanguage = inject('setLanguage')
const language = inject('language')

const changeLanguage = () => {
    setLanguage(language.value)
}

</script>