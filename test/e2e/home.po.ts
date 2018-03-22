import { browser, by, element } from 'protractor';

const IS_SMOKE_TEST = !!process.env.IS_SMOKE_TEST;

export class HomePage {

    public async getHeadline () {
        const innerHtml = await element(by.css('wam-app h1')).getInnerHtml();

        // @todo Chrome does treat a <br> tag as line break but Safari doesn't which is why it is done manually here.
        return innerHtml.replace(/<br>/, '\n');
    }

    public getSubHeadline () {
        return element(by.css('wam-app h2')).getText();
    }

    public navigateTo () {
        return browser.get((IS_SMOKE_TEST) ? 'https://chrisguttandin.github.io/web-audio-meetup-march-2017' : '/');
    }

}
