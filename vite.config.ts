import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'url'
import fs from 'fs'
import path from 'path'
import type { ViteDevServer } from 'vite'

// Function to generate routes content
function generateRoutesContent(componentsDir: string) {
  const components = fs.readdirSync(componentsDir)
    .filter((file: string) => file.endsWith('.vue'))
    .map((file: string) => {
      const stats = fs.statSync(path.join(componentsDir, file))
      return {
        name: file.replace('.vue', '')
          .split('-')
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        path: file.replace('.vue', ''),
        created: stats.birthtime.getTime()
      }
    })
    .sort((a, b) => b.created - a.created) // Sort by creation time, newest first

  return `// This file is auto-generated. Do not edit manually.
export const componentRoutes = ${JSON.stringify(components, null, 2)}
`
}

// Plugin to generate routes from components
function generateRoutes() {
  return {
    name: 'generate-routes',
    buildStart() {
      const componentsDir = path.resolve(process.cwd(), 'src/components')
      const routesFile = path.resolve(process.cwd(), 'src/router/routes.ts')

      // Generate initial routes
      const content = generateRoutesContent(componentsDir)
      fs.writeFileSync(routesFile, content)
    },
    configureServer(server: ViteDevServer) {
      const componentsDir = path.resolve(process.cwd(), 'src/components')
      const routesFile = path.resolve(process.cwd(), 'src/router/routes.ts')

      // Watch the components directory
      server.watcher.add(componentsDir)

      // Handle file changes
      server.watcher.on('add', (file) => {
        if (file.endsWith('.vue')) {
          const content = generateRoutesContent(componentsDir)
          fs.writeFileSync(routesFile, content)
          server.ws.send({ type: 'full-reload' })
        }
      })

      server.watcher.on('unlink', (file) => {
        if (file.endsWith('.vue')) {
          const content = generateRoutesContent(componentsDir)
          fs.writeFileSync(routesFile, content)
          server.ws.send({ type: 'full-reload' })
        }
      })

      server.watcher.on('change', (file) => {
        if (file.endsWith('.vue')) {
          const content = generateRoutesContent(componentsDir)
          fs.writeFileSync(routesFile, content)
          server.ws.send({ type: 'full-reload' })
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: "", // for gh-pages
  plugins: [
    vue(),
    tailwindcss(),
    generateRoutes()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
