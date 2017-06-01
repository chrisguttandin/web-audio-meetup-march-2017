module.exports = {
    default: {
        options: {
            failOnUnusedDeps: true,
            ignoreDirs: [
                'build'
            ],
            ignoreMatches: [
                'hammerjs',
                'prismjs',
                '@angular/cli',
                '@angular/compiler-cli',
                '@angular/language-service',
                '@types/*',
                'chai',
                'eslint-config-holy-grail',
                'grunt-*',
                'husky',
                'jasmine',
                'karma*',
                'mocha',
                'sinon',
                'sinon-chai',
                'tslint-config-holy-grail',
                'typescript',
                'webpack-bundle-analyzer'
            ]
        },
        src: './'
    }
};
