import { browser, by, element } from 'protractor';
import { promise } from 'selenium-webdriver'; // tslint:disable-line:no-implicit-dependencies

const IS_SMOKE_TEST = !!process.env.IS_SMOKE_TEST;

export class HomePage {

    public async getHeadline (): Promise<string> {
        const innerHtml = await element(by.css('wam-app h1')).getInnerHtml();

        // @todo Chrome does treat a <br> tag as line break but Safari doesn't which is why it is done manually here.
        return innerHtml.replace(/<br>/, '\n');
    }

    public getSubHeadline (): promise.Promise<string> {
        return element(by.css('wam-app h2')).getText();
    }

    public navigateTo (): promise.Promise<any> {
        return browser.get((IS_SMOKE_TEST) ? 'https://chrisguttandin.github.io/web-audio-meetup-march-2017' : '/');
    }

}
