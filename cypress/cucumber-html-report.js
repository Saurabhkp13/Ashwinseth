var reporter = require('multiple-cucumber-html-reporter');
var options = {

       jsonDir: 'cypress/cucumber-json',

       reportPath: './cypress/cucumber-json/',

        reportSuiteAsScenarios: true,

        reportName: 'HDFC',

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
                {label: 'Project', value: 'HDFC project'},
                {label: 'Release', value: '1.2.3'},

                {label: 'Execution Start Time', value: (new Date).getDate() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getFullYear() + " (" + (new Date).getHours() + ":" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + ")"},
                {label: 'Execution End Time',value: (new Date).getDate() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getFullYear() + " (" + (new Date).getHours() + ":" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + ")"}
            ]
        }
 

    };

    reporter.generate(options);