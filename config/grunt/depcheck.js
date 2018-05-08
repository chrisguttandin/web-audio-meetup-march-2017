module.exports = {
    default: {
        options: {
            failOnUnusedDeps: true,
            ignoreDirs: [
                'build'
            ],
            ignoreMatches: [
                'hammerjs',
                'tslib',
                '@angular/cli',
                '@angular/compiler-cli',
                '@angular/language-service',
                '@angular-devkit/build-angular',
                '@commitlint/cli',
                '@commitlint/config-angular',
                '@sonarwhal/*',
                '@types/*',
                'axe-core',
                'bundle-buddy',
                'chai',
                'commitizen',
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
                'sonarwhal',
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
