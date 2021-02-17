module.exports = {
    rules: {
        'subject-case': [
            0, 'always',
        ],
        'scope-case': [
            0, 'always',
        ],
        'header-max-length': [
            2,
            'always',
            100
        ],
    },
    extends: ['@commitlint/config-conventional'],
    parserPreset: './parser-preset',
};