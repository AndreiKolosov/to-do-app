import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: false,
    viewportHeight: 900,
    viewportWidth: 1600,
    baseUrl: 'http://localhost:3000/to-do-app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
