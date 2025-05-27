<template>
  <component :is="currentComponent" v-if="currentComponent" />
  <div v-else class="text-gray-500">
    Component not found
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentComponent = ref(null)

const loadComponent = async () => {
  const componentPath = route.params.component as string
  try {
    const module = await import(`../components/${componentPath}.vue`)
    currentComponent.value = module.default
  } catch (error) {
    console.error('Failed to load component:', error)
    currentComponent.value = null
  }
}

onMounted(loadComponent)
watch(() => route.params.component, loadComponent)
</script>