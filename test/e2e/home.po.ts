import { Locator, Page, Response } from '@playwright/test';

export class Home {
    constructor(private _page: Page) {}

    public getHeadline(): Locator {
        return this._page.locator('wam-app h1');
    }

    public getSubHeadline(): Locator {
        return this._page.locator('wam-app h2:first-child');
    }

    public navigateTo(): Promise<null | Response> {
        return this._page.goto('./');
    }
}
