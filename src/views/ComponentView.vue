<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-900 mb-6">
      {{ componentName }}
    </h1>
    <div class="bg-white rounded-lg shadow-sm p-6">
      <component :is="currentComponent" v-if="currentComponent" />
      <div v-else class="text-gray-500">
        Component not found
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentComponent = ref(null)
const componentName = ref('')

const loadComponent = async () => {
  const componentPath = route.params.component as string
  try {
    const module = await import(`../components/${componentPath}.vue`)
    currentComponent.value = module.default
    componentName.value = componentPath.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  } catch (error) {
    console.error('Failed to load component:', error)
    currentComponent.value = null
  }
}

onMounted(loadComponent)
watch(() => route.params.component, loadComponent)
</script>