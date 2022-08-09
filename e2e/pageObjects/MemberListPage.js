import { assert, expect as chaiExpect } from "chai";
import testData from "../testData/TestData";
import utilities from "../helper/Utilities";
import baseData from "../testData/BaseData";

class MemberListPage {
  get memberListHeader() {
    return element(by.id("memberListHeader"));
  }
  get addMemberIcon() {
    return element(by.id("addMemberIcon"));
  }
  get noResultsText() {
    return element(by.id("noResultsText"));
  }

  get member_1() {
    return element(by.id("member-0"));
  }
  get memberFullName_1() {
    return element(by.id("memberFullName-0"));
  }
  get memberId_1() {
    return element(by.id("memberId-0"));
  }
  get memberDelete_1() {
    return element(by.id("memberDelete-0"));
  }

  get member_2() {
    return element(by.id("member-1"));
  }
  get memberFullName_2() {
    return element(by.id("memberFullName-1"));
  }
  get memberId_2() {
    return element(by.id("memberId-1"));
  }
  get memberDelete_2() {
    return element(by.id("memberDelete-1"));
  }

  member(memberNumber) {
    return element(by.id(`member-${memberNumber - 1}`));
  }

  memberDelete(memberNumber) {
    return element(by.id(`memberDelete-${memberNumber}`));
  }

  get deleteModalText(){
    return element(by.id('deleteModalText'));
  }

  get deleteModalYesButton(){
    return element(by.id('deleteModalButton-Yes'));
  }

  get deleteModalNoButton(){
    return element(by.id('deleteModalButton-No'));
  }

  // Functions used in encapsulation
  async verifyMemberListPage(membersCount) {
    await expect(this.memberListHeader).toHaveText("Members");
    await expect(this.addMemberIcon).toBeVisible();

    switch (membersCount) {
      case 2:
        await expect(this.memberFullName_2).toHaveText(
          `${testData.getName_2()} ${testData.getSurname_2()} -`
        );
        testData.setId_2(await utilities.getElementText(this.memberId_2));
        chaiExpect(
          await utilities.getElementText(this.memberFullName_2)
        ).to.include(testData.getName_2());
      
      case 1:
        await expect(this.noResultsText).not.toBeVisible();
        await expect(this.memberFullName_1).toHaveText(
          `${testData.getName_1()} ${testData.getSurname_1()} -`
        );
        testData.setId_1(await utilities.getElementText(this.memberId_1));
        chaiExpect(
          await utilities.getElementText(this.memberFullName_1)
        ).to.include(testData.getName_1());
        break;
        case 0:
          await expect(this.noResultsText).toHaveText(
            "No Members added on the list"
          );
          break;

      default:
        assert.fail(
          `The entered ${membersCount} is an invalid count for Members`
        );
    }
  }

  async deleteMember(member){
    await this.memberDelete(member-1).tap();
    await expect(this.deleteModalText).toHaveText(`Are you sure you want to delete ${baseData.getName(member.toString())} ${baseData.getSurname(member.toString())}?`);
    await expect(this.deleteModalYesButton).toHaveText('YES');
    await expect(this.deleteModalNoButton).toHaveText('NO');
    await this.deleteModalYesButton.tap();
  }

}

export default new MemberListPage();
