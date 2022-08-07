import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import memberList from '../../pageObjects/MemberListPage';
import formPage from '../../pageObjects/FormPage';

setDefaultTimeout(120 * 1000);

// Form steps
When('I fill in the form with:', async(formData) => {
    await formPage.fillInForm(formData.hashes()[0]);
    await element(formPage.formBackground).swipe('up');
    await formPage.saveMemberButton.tap();
});

Then('the Add Member page is correctly displayed', async () => {
    await formPage.verifyAddMemberPage();
});

// Member List steps
When('the Member List page is correctly displayed for {int} members', async (membersCount) => {
    await memberList.verifyMemberListPage(membersCount);
});

Then('I tap the Add Member icon', async () => {
    await memberList.addMemberIcon.atIndex(0).tap();
});