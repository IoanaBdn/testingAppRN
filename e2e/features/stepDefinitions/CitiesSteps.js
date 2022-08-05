import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import citiesPage from '../../pageObjects/CitiesPage';

setDefaultTimeout(120 * 1000); 

When('the Cities page is correctly displayed', async () => {
    await citiesPage.verifyCitiesPage();
});

Then('I scroll {string} {string} to image number {int}', async (continent, direction, number) => {
    await citiesPage.scrollCities(
        continent.toLowerCase(),
        direction.toLowerCase(),
        number - 1
    )
});