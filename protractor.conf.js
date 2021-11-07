const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const today = new Date();
const timeStamp = today.getFullYear() + '-'
    + today.getMonth() + 1 + '-'
    + today.getDate() + ' '
    + today.getHours() + 'h:'
    + today.getMinutes() + 'm';

const reporter = new HtmlScreenshotReporter({
    consolidateAll: true,
    dest: 'reports/TestResult',
    filename: 'SalesChampAutomationTestReport.html',
    filePrefix: 'index -' + timeStamp,
    showSummary: true,
    showQuickLinks: true,
    preserveDirectory: false,
    showConfiguration: true,
    inlineImages: false,
    reportTitle: 'SalesChamp_Report',
    timeStamp: true,
    fixedScreenshotName: true,
    userCss: '/reports/reportStyle.css',
    ignoreSkippedSpecs: true,
    reportFailedUrl: true,
    captureOnlyFailedSpecs: false,
    reportOnlyFailedSpecs: false
    // pathBuilder: function (currentSpec, suites, browserCapabilities) {
    //     return browserCapabilities.get('browserName')  + '/' + timeStamp + '_' + currentSpec.;
    // }
})

const { SpecReporter } = require('jasmine-spec-reporter');
exports.config = {
    framework: 'jasmine2', //Type of Framework used 
    directConnect:true, 
    specs: [   //Name of the Specfile
        // './specs/home.spec.ts',
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
    // Can also test using other browser for parallel cross browser testing
    // ,

    // {
    //     browserName: 'firefox'
    // }
    ],
    noGlobals: false,
    beforeLaunch: function () {
        return new Promise( function (resolve) {
          reporter.beforeLaunch(resolve);
        });
    },
    afterLaunch: function (exitCode) {
          browser.driver.ignoreSynchronization = false;
          return new Promise(function (resolve) {
              reporter.afterLaunch(resolve.bind(this, exitCode));
          });
    },
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
       jasmine.getEnv().addReporter(reporter);
       jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: 'pretty' }}));
       const specs = [];
       const orgSpecFilter = jasmine.getEnv().specFilter;
       jasmine.getEnv().specFilter = function (spec) {
           specs.push(spec);
           return orgSpecFilter(spec);
       };
       jasmine.getEnv().addReporter(new function () {
           this.specDone = function (result) {
               if(result.failedExpectations.length > 0) {
                   specs.forEach(function (spec) {
                       spec.disable();
                   });
               }
           };
       });
       require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
      });
      
    },
    suites : {

    },
};