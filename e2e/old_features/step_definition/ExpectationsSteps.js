import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

// Expect elements to have a specific text, label or ID
When('I expect the Member List header text to be {string}', async(text) => {
    await expect(element(by.id('memberListHeader'))).toHaveText(text);
});

Then('I expect the Add Member button to have {string} as label', async (label) => {
    await expect(element(by.id('addMemberIcon'))).toHaveLabel(label);
});

Then('I expect the Add Member button to have {string} as ID', async (id) => {
    await expect(element(by.label('addMemberLabel'))).toHaveId(id);
});

// Expect elements to exist / not exist
When('I verify that the first image of the Asia row exists', async () => {
    await expect(element(by.id('image-asia-0'))).toExist();
});

Then('I verify that the Water Counter doesn\'t exist', async () => {
    await expect(element(by.text('WATER COUNTER'))).not.toExist();
});

// Expect elements to be visible / not visible
When('I verify that the first image of the row is visible', async () => {
    await expect(element(by.id('image-europe-0'))).toBeVisible();
});

Then('I verify that the last image of the row is not visible', async () => {
    await expect(element(by.id('image-europe-2'))).not.toBeVisible();
});