import { env } from 'process';
import { browser, by } from 'protractor';
import { elementShotMatchers, expectElementShot, resembleElementShot } from 'element-shot';

const navigateTo = (path: string) => {
    return browser.get(`${browser.baseUrl}${path}`);
};

describe('slides', () => {
    beforeEach(() => {
        jasmine.addMatchers(elementShotMatchers);
    });

    describe('first slide', () => {
        it('should look the same', async () => {
            await navigateTo('/');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(9.2, 9.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

        it('should look the same', async () => {
            await navigateTo('/slides/1');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(9.2, 9.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('second slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/2');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-2');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(5.7, 5.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('third slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/3');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-3');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4.4, 4.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fourth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/4');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-4');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(5.4, 5.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fifth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/5');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-5');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4.6, 4.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('sixth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/6');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-6');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(18.6, 18.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('seventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/7');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-7');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(13, 13.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eighth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/8');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-8');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(12.5, 12.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('nineth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/9');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-9');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.7, 6.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('tenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/10');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-10');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(5, 5.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eleventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/11');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-11');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(16.7, 16.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twelveth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/12');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-12');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(5.1, 5.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/13');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-13');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(11.4, 11.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fourteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/14');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-14');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4.6, 4.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fifteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/15');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-15');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(10.9, 11.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('sixteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/16');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-16');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.2, 6.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('seventeenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/17');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-17');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.8, 3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eighteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/18');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-18');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(17.4, 17.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('nineteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/19');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-19');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.4, 2.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twentieth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/20');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-20');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(16.7, 16.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty first slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/21');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-21');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(7.2, 7.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty second slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/22');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-22');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.4, 3.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty third slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/23');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-23');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(13.4, 13.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty fourth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/24');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-24');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(14.2, 14.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty fifth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/25');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-25');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(5.5, 5.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty sixth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/26');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-26');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(5.4, 5.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty seventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/27');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-27');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4.2, 4.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty eighth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/28');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-28');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4.8, 5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty nineth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/29');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-29');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(8.2, 8.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });
});
