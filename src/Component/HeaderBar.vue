<template>
    <header class="flex justify-between items-center bg-green-700 h-16 font-bold">
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
        
    </header>
</template>

<script setup>
import { inject } from 'vue'

const setLanguage = inject('setLanguage')
const language = inject('language')

const changeLanguage = () => {
    setLanguage(language.value)
}

</script>


<!-- <template>
    <header class="flex flex-col bg-green-700 h-16text-xl">
      <el-tabs class="flex-grow" v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane name="home">
          <template #label>
            <span class="font-bold text-xl text-white">Home</span>
          </template>
          <RouterLink to="/" class="h-full flex items-center"/>
        </el-tab-pane>
        <el-tab-pane name="play">
          <template #label>
            <span class="font-bold text-xl text-white">Play</span>
          </template>
          <RouterLink to="/play" class="h-full flex items-center"/>
        </el-tab-pane>
      </el-tabs>
    </header>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import type { TabsPaneContext } from 'element-plus';
  
  const activeTab = ref('home');
  const router = useRouter();
  
  const handleTabClick = (tab: TabsPaneContext) => {
    switch (tab.paneName) {
      case 'home':
        router.push('/');
        break;
      case 'play':
        router.push('/play');
        break;
    }
  };
  </script>
  <style>

</style> -->