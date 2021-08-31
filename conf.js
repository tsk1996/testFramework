var HtmlReporter = require('protractor-beautiful-reporter');

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // If you have one app to test then you can mention the base url here.
  // baseUrl: 'https://juliemr.github.io/protractor-demo/',


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [
    "specs/**/*.spec.js",
  ],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: () => {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);

    // Add a screenshot reporter and store screenshots to `./test-results`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'test-results',
      preserveDirectory: false, // Preserve base directory
      screenshotsSubfolder: 'screenshots',
      jsonsSubfolder: 'jsons', // JSONs Subfolder
      takeScreenShotsForSkippedSpecs: true, // Screenshots for skipped test cases
      takeScreenShotsOnlyForFailedSpecs: false, // Screenshots only for failed test cases
      docTitle: 'Test Automation Execution Report', // Add title for the html report
      docName: 'TestResult.html', // Change html report file name
      gatherBrowserLogs: true // Store Browser logs
    }).getJasmine2Reporter());
  }
};
