<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Left Navigation -->
    <div class="w-64 bg-white border-r border-gray-200 p-4">
      <router-link to="/" class="block px-3 py-2 mb-4 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">
        ← Home
      </router-link>
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Components</h2>
      <nav class="space-y-1">
        <router-link v-for="component in componentRoutes" :key="component.path" :to="`/showcase/${component.path}`"
          class="block px-3 py-2 rounded-md text-sm font-medium" :class="[
            $route.params.component === component.path
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-600 hover:bg-gray-50'
          ]">
          {{ component.name }}
        </router-link>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { componentRoutes } from '../router/routes'
</script>