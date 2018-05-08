module.exports = {
    default: {
        files: [ {
            cwd: 'build/web-audio-meetup-march-2017',
            dest: 'build/web-audio-meetup-march-2017',
            expand: true,
            src: [ '**/*.html' ]
        } ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    }
};
