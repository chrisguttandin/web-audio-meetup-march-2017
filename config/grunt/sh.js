module.exports = {
    analyze: {
        cmd: 'webpack-bundle-analyzer build/stats.json'
    },
    build: {
        cmd: 'ng build --aot --base-href /web-audio-meetup-march-2017 --no-sourcemap --prod --stats-json'
    },
    continuous: {
        cmd: 'ng test'
    },
    e2e: {
        cmd: 'ng e2e'
    },
    lint: {
        cmd: 'ng lint --type-check'
    },
    monitor: {
        cmd: 'ng serve --port 7766'
    },
    preview: {
        cmd: 'ng serve --aot --port 7766 --prod'
    },
    test: {
        cmd: 'ng test --watch false'
    }
};
