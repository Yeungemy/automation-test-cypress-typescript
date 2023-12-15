// import { defineConfig } from 'cypress';
// import allureWriter from '@shelex/cypress-allure-plugin/writer';
// import webpack from '@cypress/webpack-preprocessor';
// import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

// module.exports = defineConfig({
//     screenshotOnRunFailure: true,
//     videoCompression: false,

//     env: {
//         url: "https://testpages.eviltester.com/styled/index.html",
//         userName: "test@demoqa.com",
//         password: "test1234"
//     },
//     e2e: {
//         baseUrl: "https://testpages.eviltester.com/styled/index.html",
//         specPattern: 'cypress/e2e/test/**/**/*.spec.ts',
//         setupNodeEvents: async function (on, config) {
//             await addCucumberPreprocessorPlugin(on, config);
//             on(
//                 'file:preprocessor',
//                 webpack({
//                     webpackOptions: {
//                         resolve: { extensions: ['.ts', '.js'] },
//                         module: {
//                             rules: [
//                                 {
//                                     test: /\.feature$/,
//                                     use: [
//                                         {
//                                             loader: '@badeball/cypress-cucumber-preprocessor/webpack',
//                                             options: config
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     }
//                 })
//             );
//             allureWriter(on, config);
//             return config;
//         }
//     }
// });

import { defineConfig } from "cypress";
import preprocessor from "@badeball/cypress-cucumber-preprocessor";
import sqlServer from 'cypress-sql-server';
import excelToJson from 'convert-excel-to-json';
import { downloadFile } from 'cypress-downloadfile/lib/addPlugin';
import fs from 'fs';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

// Function to set up Node events if needed
const setupNodeEvents = () => {
    // Add your setup logic here if needed
};

export default defineConfig({
    projectId: "k7bvfp",
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 300000,
    redirectionLimit: 200,
    requestTimeout: 20000,
    responseTimeout: 30000,
    retries: { runMode: 1 },
    reporterOptions: {
        overwrite: false,
        html: false,
        json: true,
    },
    env: {
        url: "https://testpages.eviltester.com/styled/index.html",
        userName: "test@demoqa.com",
        password: "test1234",
    },

    e2e: {
        baseUrl: "https://testpages.eviltester.com/styled/index.html",
        setupNodeEvents: async function (on, config) {
            allureWriter(on, config);
            return config;
        },

        specPattern: 'cypress/e2e/test/**/**/*.spec.ts',
    },
});
