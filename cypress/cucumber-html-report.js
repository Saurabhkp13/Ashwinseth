var reporter = require('multiple-cucumber-html-reporter');
var options = {

       jsonDir: 'cypress/cucumber-json',

       reportPath: './cypress/cucumber-json/',

        reportSuiteAsScenarios: true,

        reportName: 'Ashwinseth Group',

        scenarioTimestamp: true,

        launchReport: true,

        metadata: {
            browser: {
                name: 'chrome',


                version: '60'
            },
            device: 'Local test machine',
            platform: {
                name: 'Windows',
                version: '10'
            }
        }, 
        customData: {
            title: 'Run info',
            data: [
                {label: 'Project', value: 'Ashwin Seth Group'},
                {label: 'Release', value: '1.0'}

               
            ]
        }
 

    };

    reporter.generate(options);