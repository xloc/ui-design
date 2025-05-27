<template>
  <div class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900">Profile Card Component</h2>

    <div class="max-w-sm bg-white rounded-xl shadow-sm overflow-hidden">
      <!-- Cover Image -->
      <div class="h-32 bg-gradient-to-r from-purple-500 to-pink-500"></div>

      <!-- Profile Content -->
      <div class="px-6 py-4">
        <!-- Avatar -->
        <div class="relative -mt-12 mb-4">
          <div class="w-24 h-24 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- User Info -->
        <div class="space-y-1">
          <h3 class="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
          <p class="text-sm text-gray-500">UI/UX Designer</p>
        </div>

        <!-- Stats -->
        <div class="mt-4 flex gap-4 text-sm">
          <div class="text-center">
            <div class="font-semibold text-gray-900">245</div>
            <div class="text-gray-500">Posts</div>
          </div>
          <div class="text-center">
            <div class="font-semibold text-gray-900">12.5k</div>
            <div class="text-gray-500">Followers</div>
          </div>
          <div class="text-center">
            <div class="font-semibold text-gray-900">1.2k</div>
            <div class="text-gray-500">Following</div>
          </div>
        </div>

        <!-- Action Button -->
        <button class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Follow
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>