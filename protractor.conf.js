const HtmlReporter = require('protractor-beautiful-reporter');
const reporter = new HtmlReporter({
    baseDirectory: 'reports/testResults',
    preserveDirectory: true,
    cleanDestination: true,
    screenshotsSubfolder: 'images',
    excludeSkippedSpecs: true,
    takeScreenShotsOnlyForFailedSpecs: false,
    docTitle: 'SalesChamp QA Automation Report - Harvey Decapia',
    docName: 'SalesChampAutomationReport.html',
    clientDefaults:{
        showTotalDurationIn: "header",                  
        totalDurationFormat: "hms"            
    }
});

const { SpecReporter } = require('jasmine-spec-reporter');
exports.config = {
    framework: 'jasmine2', //Type of Framework used 
    directConnect:true, 
    specs: [   //Name of the Specfile
        './specs/home.spec.ts',
        './specs/careers.spec.ts'
    ],
    multiCapabilities: [{
        browserName: 'chrome',   
        shardTestFiles: true, // Allows different specs to run in parallel
        maxInstances: 2, // Sets max number of browser instances that can run in parallel for this set of capabilities.
        'chromeOptions': {
            'args' : [
                'start-maximized',
                'disable-extensions',
                'incognito',
                'disable-gpu',
                'disable-infobars',
                'ignore-certificate-errors'
            ]
        }
    }
    ],
    // noGlobals: false,
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        realTimeFailure: true,
        print: function () {}
    },
    onPrepare() {
       //global test set-up goes here
       jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: 'pretty' }}));
       jasmine.getEnv().addReporter(reporter.getJasmine2Reporter());
       require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
      });
      
    },
    suites : {

    },
};