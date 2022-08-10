const gulp = require('gulp');
const reporter = require('multiple-cucumber-html-reporter');

gulp.task('report-generation', async () => {
    reporter.generate({"jsonDir":".tmp/","reportPath":"reports/","pageTitle":"Pinnacle QA Academy - iOS Test Automation Report","reportName":"Pinnacle QA Academy - iOS Test Automation Report: Regression Test Suite","displayDuration":true,"metadata":{"device":"iPhone 12 Pro","platform":{"name":"iOS","version":"14.5"},"app":{"name":"membersApp","version":"1.0.0"}},"customData":{"title":"Run Information","data":[{"label":"Execution Date","value":"Wednesday, 10th of August 2022"},{"label":"Execution Start Time","value":"22:18:12"},{"label":"Execution End Time","value":"22:18:25"},{"label":"Execution Duration","value":"00:00:13"},{"label":"Environment","value":"UAT"},{"label":"Framework","value":"Detox"}]}})
});