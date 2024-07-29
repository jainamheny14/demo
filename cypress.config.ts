const { defineConfig } = require('cypress');

export default defineConfig({
    reporter: 'cypress-multi-reporters',

    reporterOptions: {
        reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
        mochaJunitReporterReporterOptions: {
            mochaFile: 'cypress/reports/junit/junit-[hash].xml',
            testsuitesTitle: 'Cypress UI Tests',
            jenkinsMode: true,
        },
        cypressMochawesomeReporterReporterOptions: {
            charts: true,
            reportPageTitle: 'Cypress Tests with GH and Jenkins',
        },
    },

    video: false,
    chromeWebSecurity: false,

    e2e: {
        setupNodeEvents(on: any, config: any) {
            require('cypress-mochawesome-reporter/plugin')(on, config);
            on('task', {
                log(message: string) {
                    console.log(message);
                    return null;
                },
            });
            return config;
        },
    },
});
