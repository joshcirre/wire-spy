const postcss = require('postcss');

module.exports = {
    plugins: {
        "postcss-import": {},
        tailwindcss: {},
        "postcss-nested": {},
        autoprefixer: {},
        'postcss-prefix-selector': {
            prefix: '.wire-spy ',
            exclude: [':root', 'body', 'html', /^\.wire-spy/],
        },
        cssnano: {},
    }
}