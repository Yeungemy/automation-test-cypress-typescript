import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
import webpack from '@cypress/webpack-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import * as dotenv from 'dotenv';
dotenv.config();

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
        setupNodeEvents: async function (on, config) {
            allureWriter(on, config);
            return config;
        },
    },
});
