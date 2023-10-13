const fs = require("fs-extra");
const path = require("path");
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(".", "config", `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const file = config.env.configFile || "cypress.config.test";
      const envConfig = await getConfigurationByFile(file);

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", bundler);

      return { ...config, ...envConfig };
    },
    specPattern: ["**/*.feature"],
    defaultCommandTimeout: 50000,
    requestTimeout: 50000,
  },
  reporter: "junit",
  reporterOptions: {
    useFullSuiteTitle: true,
    testsuitesTitle: true,
    mochaFile: "cypress/results/[hash].xml",
    toConsole: false,
    attachments: true,
  },
});
