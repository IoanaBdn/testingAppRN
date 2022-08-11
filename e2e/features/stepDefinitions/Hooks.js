import { BeforeAll, Before, AfterStep, After, AfterAll } from '@cucumber/cucumber';
import { init, beforeEach, afterEach, cleanup } from 'detox';
import { detox as config } from '../../../package.json';
import testData from '../../testData/TestData';
import moment from 'moment';
import utilities from '../../helper/Utilities';
import { mkdirp } from 'fs-extra';
import report from '../../helper/ReportGeneration';
import replace from 'replace-in-file';

const date = moment().format('DD-MM-YYY_HH-mm-ss_a');

let executionStart;

BeforeAll({ timeout: 120 * 1000 }, async () => {
    console.log("Execution start: ", moment(executionStart).format('HH:mm:ss'));
    executionStart= moment();
    mkdirp('e2e/reports/');

    await init(config);
});

Before(async (testCase) => {
    let instanceBoolean = true;
    for (let i = 0; i < testCase.pickle.tags.length; i++) {
        let tag = testCase.pickle.tags[i].name;
        if ((tag === '@addmembers' || testData.getLastTag() === '@addmembers')
            || (tag === '@editmembers' || testData.getLastTag() === '@editmembers')) {
            instanceBoolean = false;
        } else if ((tag === '@addmembers') || (tag === '@editmembers')) {
            testData.setLastTag(tag);
        }
    }
    await device.launchApp({ delete: instanceBoolean, newInstance: true});

    const testSummary = {
        fullName: testCase.pickle.name,
        status: 'running'
    }

    await beforeEach(testSummary); 

});


AfterStep(async function (step) {
    if (step.result.status !== 'FAILED') {
        const stepName = step.pickleStep.text.replace(/\s+/g, '-');
        await this.attach(await utilities.takeScreenshotStream(`${device.getPlatform()}_${stepName}_${date}`), 'image/png');
    }
});



After(async (scenario) => {
    const testSummary = {
        fullName: scenario.pickle.name,
        status: scenario.result.status.toLowerCase()
    }
    

    await afterEach(testSummary); 

});

AfterAll(async () => {
    const deviceOS = device.getPlatform();
    await cleanup();
    const executionEnd = moment();
    console.log("Execution end: ", moment(executionEnd).format('HH:mm:ss'));

    const options = {
        files: 'e2e/Gulpfile.js',
        from: new RegExp('reporter.generate.*'),
        to: `reporter.generate(${report.getReportValues(deviceOS, executionStart, executionEnd)})`
    }
    
    await replace(options);
});