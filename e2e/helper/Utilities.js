import { getText } from 'detox-getprops';
import { copyFile as _copyFile, createReadStream } from 'fs-extra';
import tempfile from 'tempfile';
import { promisify } from 'util'; 
const copyFile = promisify(_copyFile);

class Utilities {

    async sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    async typeInElement(mobileElement, text) {
        device.getPlatform() === 'ios' ? await device.disableSynchronization() : null;
        await mobileElement.replaceText(text);
        await mobileElement.tapReturnKey();
        device.getPlatform() === 'ios' ? await device.enableSynchronization() : null;
    }

    async scrollToElement(targetElement, background, pixels, direction) {
        if (direction === 'left' || direction === 'right') {
            await this.scrollHorizontallyToElement(element(background), direction, targetElement);
        } else {
            await waitFor(targetElement)
                .toBeVisible()
                .whileElement(background)
                .scroll(pixels, direction);
        }
    }

    async scrollHorizontallyToElement(background, direction, targetElement) {
        while (await this.softElementAssertion(targetElement) === false) {
            const scrollDirection = direction === 'left' ? 'right' : 'left';
            await background.swipe(scrollDirection, 'slow', 0.3);
        }
    }

    async softElementAssertion(mobileElement) {
        try {
            await expect(mobileElement).toBeVisible();
            return true;
        } catch {
            return false;
        }
    }

    async softTextAssertion(mobileElement, text) {
        try {
            await expect(mobileElement).toHaveText(text);
            return true;
        } catch {
            return false;
        }
    }

    async getElementText(mobileElement) {
        if (device.getPlatform() === 'ios') {
            const attributes = await mobileElement.getAttributes();
            return attributes.text;
        } else {
            return await getText(mobileElement);
        }
    }

    async takeScreenshotStream(screenshotName) {
        const imagePath = await device.takeScreenshot(screenshotName);
        const persistedImagePath = tempfile('.png');
        await copyFile(imagePath, persistedImagePath);
        return createReadStream(persistedImagePath);
    }

}

export default new Utilities();