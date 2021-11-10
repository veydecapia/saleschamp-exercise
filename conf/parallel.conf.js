exports.config = {
  'specs': [ '../specs/home.spec.ts' ],
  'browserstackUser': 'harveydecapia_rQ5fzk',
  'browserstackKey': 'J4wx38FAQFoewn2c1YWJ',
  'commonCapabilities': {
    'build': 'browserstack-build-1',
    'name': 'parallel_test',
    'browserstack.debug': 'true',
    'browserName': 'Chrome'
  },
  'multiCapabilities': [{
    "browser": "chrome",
    "browser_version": "95.0",
    "os": "Windows",
    "os_version": "10"
  },{
    "browser": "firefox",
    "browser_version": "94.0",
    "os": "Windows",
    "os_version": "10"
  },{
    "browser": "safari",
    "browser_version": "14.1",
    "os": "OS X",
    "os_version": "Big Sur"
  }],
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
// Code to support common capabilities
exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});