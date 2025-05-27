<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Left Navigation -->
    <div class="w-56 bg-white border-r border-gray-200">
      <!-- Home Link -->
      <router-link to="/"
        class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 border-b border-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </router-link>

      <!-- Components List -->
      <div class="py-2">
        <div class="px-3 mb-2">
          <h2 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Components</h2>
        </div>
        <nav class="space-y-0.5">
          <router-link v-for="component in componentRoutes" :key="component.path" :to="`/showcase/${component.path}`"
            class="flex items-center px-3 py-1.5 text-sm" :class="[
              $route.params.component === component.path
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:bg-gray-50'
            ]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {{ component.name }}
          </router-link>
        </nav>
      </div>
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