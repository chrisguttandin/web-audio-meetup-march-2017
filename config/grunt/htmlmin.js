module.exports = {
    default: {
        files: [
            {
                cwd: 'build/web-audio-meetup-march-2017/browser',
                dest: 'build/web-audio-meetup-march-2017/browser',
                expand: true,
                src: ['**/404.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
