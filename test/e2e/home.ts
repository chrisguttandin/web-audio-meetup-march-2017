import { HomePage } from './home.po';

describe('/', () => {

    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display the correct headline', () => {
        page.navigateTo();
        expect(page.getHeadline()).toEqual('What else can we do with the Web Audio API?');
    });

});
