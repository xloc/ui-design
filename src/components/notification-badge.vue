<template>
  <div class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900">Notification Badge Component</h2>

    <div class="flex gap-8">
      <!-- Basic Badge -->
      <div class="relative">
        <button class="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <span
          class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          3
        </span>
      </div>

      <!-- Status Badge -->
      <div class="relative">
        <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-gray-600 font-medium">JD</span>
        </div>
        <span class="absolute bottom-0 right-0 bg-green-500 border-2 border-white rounded-full h-4 w-4"></span>
      </div>

      <!-- Floating Badge -->
      <div class="relative">
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Messages
        </button>
        <span class="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
          New
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>