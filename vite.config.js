// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // ... other configuration
  base : "/vite-test/",
  plugins: [
      react(),
      tailwindcss(),
    ],
  optimizeDeps: {
    // Exclude the native module packages for the Tailwind Oxide engine
    // and the lightningcss package, which might be causing the 'pkg' issue.
    exclude: [
      '@tailwindcss/oxide',
      '@tailwindcss/oxide-win32-x64-msvc', // or other relevant platform-specific packages
      'lightningcss',
    ]
  }
  // ... other configuration
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
