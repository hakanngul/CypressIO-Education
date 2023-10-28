const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ne4raw",
  e2e: {
    setupNodeEvents(on, config) {
      on("after:run", (results) => {
        console.log(results);
      });
    },
  },
});
