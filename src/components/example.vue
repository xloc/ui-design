<template>
  <div class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900">Example Component</h2>
    <p class="text-gray-600">
      This is an example component. You can create new components in the
      <code class="bg-gray-100 px-1 py-0.5 rounded">src/components</code>
      directory and they will automatically appear in the navigation.
    </p>
    <div class="bg-blue-50 p-4 rounded-lg">
      <p class="text-blue-700">
        To add a new component:
      </p>
      <ol class="list-decimal list-inside mt-2 text-blue-700">
        <li>Create a new .vue file in the components directory</li>
        <li>Use kebab-case for the filename (e.g., my-component.vue)</li>
        <li>The component will automatically appear in the navigation</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>