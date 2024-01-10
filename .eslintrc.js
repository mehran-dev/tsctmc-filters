module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {},
            {
                usePrettierrc: false,
            },
        ],
    },
    files: ['src/**/*.js'],
}
