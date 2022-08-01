import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import utilities from '../../helper/Utilities';

setDefaultTimeout(120 * 1000);

When('I enter {string} {string} {string} as Date of Birth', async (day, month, year) => {
    await element(by.id('formLabel-dateOfBirth')).tap();
    await utilities.selectDatePickerDate(day, month, year);
    await utilities.confirmPickerButton();
});

Then('I select {string} as Start Day', async (day) => {
    await element(by.id('formLabel-startDay')).tap();
    await utilities.selectPickerValue(element(by.id('formPicker-startDay')), day);
});

Then('I select {string} as Country swiping {string}', async (country, swipeDirection) => {
    await element(by.id('formBackground')).swipe('up');
    await element(by.id('formLabel-country')).tap();
    await utilities.selectPickerValue(element(by.id('formPicker-country')), country, swipeDirection);
});

Then('I enter {string} {string} as Start Time', async (hours, minutes) => {
    await element(by.id('formBackground')).swipe('up');
    await element(by.id('formLabel-startTime')).tap();
    await utilities.setTime(hours, minutes);
    await utilities.confirmPickerButton();
});