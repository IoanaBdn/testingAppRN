import {When} from '@cucumber/cucumber';

When('I toggle the animation\'s switch', async()=>{
    await element(by.id('animationSwitch')).tap();
});