module.exports = {
    default: {
        options: {
            failOnUnusedDeps: true,
            ignoreDirs: ['build'],
            ignoreMatches: [
                'hammerjs',
                'tslib',
                '@angular/cli',
                '@angular/compiler-cli',
                '@angular/language-service',
                '@angular-devkit/build-angular',
                '@commitlint/cli',
                '@commitlint/config-angular',
                '@hint/*',
                '@types/*',
                'axe-core',
                'benchmark',
                'bundle-buddy',
                'chai',
                'commitizen',
                'eslint',
                'eslint-config-holy-grail',
                'greenkeeper-lockfile',
                'grunt-*',
                'hint',
                'htmlhint',
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
                'webpack',
                'webpack-bundle-analyzer'
            ]
        },
        src: './'
    }
};
