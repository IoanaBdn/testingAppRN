import { BeforeAll, Before, After, AfterAll } from '@cucumber/cucumber';
import { init, beforeEach, afterEach, cleanup } from 'detox';
import { detox as config } from '../../../package.json';
import testData from '../../testData/TestData';
import moment from 'moment';
const date = moment().format('DD-MM-YYY_HH-mm-ss_a');

BeforeAll({ timeout: 60 * 1000 }, async () => {
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

After(async (scenario) => {
    const testSummary = {
        fullName: scenario.pickle.name,
        status: scenario.result.status.toLowerCase()
    }
    
    if (scenario.result.status === 'FAILED') {
        const scenarioName = scenario.pickle.name.replace(/\s+/g, '-');
        await device.takeScreenshot(`${device.getPlatform()}_${scenarioName}_${date}`);
    }

    await afterEach(testSummary); 

});

AfterAll(async () => {
    await cleanup();
});