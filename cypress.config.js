const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ne4raw",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.automationpractice.pl",
  },
});
