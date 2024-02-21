import { defineConfig } from "vite";

export default defineConfig({
  // Other configuration options...

  optimizeDeps: {
    exclude: ['js-big-decimal', 'three'] // Merge both exclusions into a single array
  }
});
