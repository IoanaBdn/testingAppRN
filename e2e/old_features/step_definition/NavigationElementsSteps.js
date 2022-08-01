import { Then, setDefaultTimeout, Given } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

Given('I tap on the {string} navigation tab', async(section)=>{
    await element(by.id(`${section.toLowerCase()}NavigationImage`)).atIndex(0).tap();
    await element(by.id(`${section.toLowerCase()}NavigationSection`)).atIndex(0).tap();
});


Given('I tap on the Cities navigation tab', async()=>{
    await element(by.id('citiesNavigationImage')).atIndex(0).tap();
    await element(by.id('citiesNavigationSection')).atIndex(0).tap();
});

Then('I tap the Add Member Icon', async () => {
    await element(by.id('memberListHeader')).atIndex(0).tap();
    await element(by.id('addMemberIcon')).atIndex(0).tap();
});