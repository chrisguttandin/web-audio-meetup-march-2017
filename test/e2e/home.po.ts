import { env } from 'process';
import { browser, by, element } from 'protractor';
import { promise } from 'selenium-webdriver'; // tslint:disable-line:no-implicit-dependencies

export class HomePage {
    public async getHeadline(): Promise<string> {
        const innerHtml = await element(by.css('wam-app h1')).getAttribute('innerHTML');

        // @todo Chrome does treat a <br> tag as line break but Safari doesn't which is why it is done manually here.
        return innerHtml.replace(/<br[^>]*>/g, '\n');
    }

    public getSubHeadline(): promise.Promise<string> {
        return element(by.css('wam-app h2')).getText();
    }

    public navigateTo(): promise.Promise<any> {
        return browser.get(env.IS_SMOKE_TEST === 'true' ? '/web-audio-meetup-march-2017' : '/');
    }
}
