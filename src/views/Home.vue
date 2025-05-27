<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <div class="min-h-screen flex items-center">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            UI Design Showcase
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            A collection of beautiful UI components and layouts, built with Vue 3 and Tailwind CSS
          </p>
          <router-link to="/showcase"
            class="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Explore Components
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>