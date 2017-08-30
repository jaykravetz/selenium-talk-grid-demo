//jshint strict: false
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        'scenarios.js'
    ],

    multiCapabilities: [
        { 'browserName': 'chrome', 'platform': 'WINDOWS' },
        { 'browserName': 'firefox', 'platform': 'WINDOWS' },
        { 'browserName': 'internet explorer', 'platform': 'WINDOWS' },
    ],

    seleniumServerJar: 'C:\\apps\\selenium\\bin\\selenium-server-standalone-3.4.0.jar',

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
