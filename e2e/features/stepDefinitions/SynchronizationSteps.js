import {When} from '@cucumber/cucumber';

When('I toggle the animation\'s switch', async()=>{
    await element(by.id('animationSwitch')).tap();
    await expect(element(by.id('animationSwitch'))).toHaveToggleValue(true);
    await element(by.id('animationSwitch')).tap();
    await expect(element(by.id('animationSwitch'))).toHaveToggleValue(false);


});