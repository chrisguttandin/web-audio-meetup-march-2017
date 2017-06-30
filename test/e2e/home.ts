import { Key, browser, by, element } from 'protractor';
import { HomePage } from './home.po';

describe('/', () => {

    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display the correct headline', () => {
        page.navigateTo();
        expect<any>(page.getHeadline()).toEqual('What else can we do\nwith the Web Audio API?');
    });

    it('should go to the next slide', () => {
        page.navigateTo();

        element(by.tagName('body')).sendKeys(Key.ARROW_RIGHT);

        expect<any>(page.getSubHeadline()).toEqual('About me');
    });

});
