require('dotenv').config();

exports.config = {
  'specs': [ '../specs/home.spec.ts' ],
  'browserstackUser': process.env.BROWSERSTACK_USERNAME,
  'browserstackKey': process.env.BROWSERSTACK_ACCESS_KEY,
  'capabilities': {
    'build': 'browserstack-build-1',
    'name': 'single_test_passenv',
    'browserName': 'chrome',
    'resolution': '1920x1080',
    'browserstack.debug': 'true',
    // "os_version" : "11.0",  // select "14" for iOS 14
    // "device" : "Samsung Galaxy S21 Ultra",  // choose "iPhone 12 Pro" etc.
    // "real_mobile" : "true",
    // "browserName" : "Android"
  },
  onPrepare() {
    //global test set-up goes here
   require('ts-node').register({
     project: require('path').join(__dirname, '../tsconfig.json') // Relative path of tsconfig.json file 
   });

   browser.getProcessedConfig().then(console.log);


  },
  // Code to mark the status of test on BrowserStack based on test assertions
  onComplete: function (passed) {
    if (!passed) {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion has failed"}}');
    }
    if (passed) {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "All assertions passed"}}');
    }
  }
};
