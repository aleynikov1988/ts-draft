module.exports = (config) => {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        plugins: [
            'karma-typescript',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-mocha-reporter'
        ],
        files: [
            {
                pattern: './src/**/!(index).ts'
            }
        ],
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        reporters: ['mocha'],
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'],
        singleRun: true,
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.spec.conf',
            reports: {
                html: 'covarage'
            }
        }
    });
}
