const cypress = require('cypress');

const cypressConfig = {
    video: true,
    browser: 'chrome',
    config: {
        specPattern: 'cypress/e2e/**/*.spec.ts',
        excludeSpecPattern: '*.feature'
    },

    env: {
        allure: true,
        allureReuseAfterSpec: true,
        stepDefinitions: `cypress/cucumber/**/*.ts`
    }
};

const cypressCucumberConfig = {
    ...cypressConfig,
    ...{
        config: {
            specPattern: 'cypress/cucumber/*.feature',
            excludeSpecPattern: 'cypress/e2e/**/*.spec.ts'
        }
    }
};

(async function () {
    await cypress.run(cypressConfig);
    await cypress.run(cypressCucumberConfig);
})();
