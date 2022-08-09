import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import memberList from "../../pageObjects/MemberListPage";
import formPage from "../../pageObjects/FormPage";
import showMemberPage from "../../pageObjects/ShowMemberPage";

setDefaultTimeout(120 * 1000);

//Delete Member steps
When('I delete Member number {int}', async (member)=>{
  await memberList.deleteMember(member);
}); 

// Edit Member steps
Then("The Edit Member page is correctly displayed with:", async (formData) => {
  await formPage.verifyEditMemberPage(formData.hashes()[0]);
});

// Show Member steps
Then("The Show Member page is correctly displayed with:", async (formData) => {
  await showMemberPage.verifyShowMemberPage(formData.hashes()[0]);
});

Then("I tap on the Edit Member icon", async () => {
  await showMemberPage.editMemberIcon.tap();
});

// Form steps
When("I fill in the form with:", async (formData) => {
  await formPage.fillInForm(formData.hashes()[0]);
  await element(formPage.formBackground).swipe("up");
  await formPage.saveMemberButton.tap();
});

Then("the Add Member page is correctly displayed", async () => {
  await formPage.verifyAddMemberPage();
});

// Member List steps
When(
  "the Member List page is correctly displayed for {int} members",
  async (membersCount) => {
    await memberList.verifyMemberListPage(membersCount);
  }
);

When("I tap on the Member number {int}", async (memberNumber) => {
  await memberList.member(memberNumber).tap();
});

Then("I tap the Add Member icon", async () => {
  await memberList.addMemberIcon.atIndex(0).tap();
});
