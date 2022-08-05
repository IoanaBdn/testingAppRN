import {Given , Then , When, setDefaultTimeout} from '@cucumber/cucumber';
import memberList from '../../pageObjects/MemberListPage';

setDefaultTimeout(120*1000);

When('the Member List page is correctly displayed for {int} members', async(membersCount)=>{
    await memberList.verifyMemberListPage(membersCount);
})


