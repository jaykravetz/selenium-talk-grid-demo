//jshint strict: false
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    multiCapabilities: [
        { 'browserName': 'chrome', 'platform': 'WINDOWS' },
        { 'browserName': 'firefox', 'platform': 'WINDOWS' },
        { 'browserName': 'internet explorer', 'platform': 'WINDOWS' },
        { 'browserName': 'MicrosoftEdge', 'platform': 'WINDOWS' }
    ],

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    baseUrl: 'http://localhost:9876/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        print: function() {}
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }

};
