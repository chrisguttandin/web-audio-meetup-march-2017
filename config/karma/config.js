const { join } = require('path');

module.exports = (config) => {

    config.set({

        angularCli: {
            environment: 'dev'
        },

        basePath: '../../',

        client: {
            clearContext: false
        },

        coverageIstanbulReporter: {
            dir: join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true,
            reporters: [ 'kjhtml', 'progress' ]
        },

        frameworks: [
            '@angular-devkit/build-angular',
            'jasmine'
        ],

        plugins: [
            '@angular-devkit/build-angular/plugins/karma',
            'karma-*'
        ],

        reporters: config.angularCli && config.angularCli.codeCoverage
            ? [ 'progress', 'coverage-istanbul' ]
            : [ 'progress', 'kjhtml' ]

    });

    if (process.env.TRAVIS) {
        config.set({

            browserNoActivityTimeout: 120000,

            browsers: [
                'ChromeSauceLabs'
            ],

            captureTimeout: 120000,

            customLaunchers: {
                ChromeSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    platform: 'OS X 10.11'
                }
            },

            tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER

        });
    } else {
        config.set({

            browsers: [
                'ChromeHeadless'
            ]

        });
    }

};
