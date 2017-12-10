module.exports = (config) => {

    config.set({

        basePath: '../../',

        benchmarkJsonReporter: {
            pathToJson: 'results.json'
        },

        browserDisconnectTimeout: 10000,

        browserDisconnectTolerance: 10,

        browserNoActivityTimeout: 1000000,

        browsers: [
            'ChromeCanaryHeadless',
            'FirefoxDeveloperHeadless'
        ],

        concurrency: 1,

        files: [
            'test/performance/**/*.js'
        ],

        frameworks: [
            'benchmark',
            'mocha',
            'sinon-chai'
        ],

        mime: {
            'text/x-typescript': [ 'ts', 'tsx' ]
        },

        preprocessors: {
            'test/performance/**/*.js': 'webpack'
        },

        reporters: [
            /*
             * Only one reporter can be used at the same time. Otherwise benchmarks run twice.
             * 'benchmark',
             */
            'benchmark-json'
        ],

        webpack: {
            resolve: {
                extensions: [ '.js' ]
            }
        },

        webpackMiddleware: {
            noInfo: true
        }

    });

};
