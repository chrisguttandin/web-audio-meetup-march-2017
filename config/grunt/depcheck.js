module.exports = {
    default: {
        options: {
            failOnUnusedDeps: true,
            ignoreDirs: [
                'build'
            ],
            ignoreMatches: [
                '@angular/service-worker',
                'hammerjs',
                'tslib',
                '@angular/cli',
                '@angular/compiler-cli',
                '@angular/language-service',
                '@sonarwhal/sonar',
                '@types/*',
                'axe-core',
                'bundle-buddy',
                'chai',
                'chromedriver',
                'eslint',
                'eslint-config-holy-grail',
                'greenkeeper-lockfile',
                'grunt-*',
                'husky',
                'jasmine-core',
                'karma*',
                'mocha',
                'sinon',
                'sinon-chai',
                'stylelint-config-holy-grail',
                'tsconfig-holy-grail',
                'tslint',
                'tslint-config-holy-grail',
                'typescript',
                'webpack-bundle-analyzer',
                'webpack-stats-duplicates'
            ]
        },
        src: './'
    }
};
