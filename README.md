
<div id="top"></div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#tools">Tools Used and Why</a></li>
    <li><a href="#users">User Actions used and Page Elements</a></li>
    <li><a href="#how">How Do You Run the Test</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Project contains Automated Test written in TypeScript/JavaScript using [Protractor](https://www.protractortest.org/#/infrastructure) as an open source automation testing framework. Also, comes with [Jasmine](https://jasmine.github.io/) that follows BDD framework, and Jasmine spec reporter, protractor beautiful reporter for real time generation of reports and html reports.

My task is to automate testing of [www.saleschamp.nl](https://www.saleschamp.nl/), in the careers page.
The automated test covers the following test scenarios
* A candidate would like to see open positions in SalesChamp.
* A candidate would like to apply for the Backend role advertised on the SalesChamp site.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Protractor](https://www.protractortest.org/#/infrastructure)
* [TypeScript](https://www.typescriptlang.org/)
* [Jasmine](https://jasmine.github.io/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get automated test in your local copy up and running follow these simple example steps.


### Prerequisites
To publish and install packages to and from the public npm registry or a private npm registry, you must install Node.js and the npm command line interface using either a Node version manager or a Node installer.

Note: to download the latest version of npm, on the command line, run the following command:
   ```sh
   npm install -g npm
   ```
*Please refer to the following*
* [Download Node.js](https://nodejs.org/en/download/)
* [Downloading and installing node js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/veydecapia/saleschamp-exercise.git
   ```
2. Install NPM packages. This downloads dependencies defined in a package.json file and generates a node_modules folder with the installed modules.
   ```sh
   npm run setup
   ```
   
   This is equivalent to the following command:
   ```sh
   npm install && node ./node_modules/protractor/bin/webdriver-manager update
   ```
   
   It would install first the required npm packages and then it will update the webdriver. This is written in package.json file under *scripts.*
   <br/>*Note: The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries.*

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. To run the created Automated test.
Run npm
   ```sh
   npm test
   ```
<br/><br/>
This will run the automated test that covers both the following scenarios: <br/>
* A candidate would like to see open positions in SalesChamp.
* A candidate would like to apply for the Backend role advertised on the SalesChamp site. 

<br/>

2. While the test is running, the Jasmine Spec reporter will send updates of the test pass fail status on the command line in real time.<br/> 

![JasmineSpecReporter](https://user-images.githubusercontent.com/6094567/140670121-3414f338-d73c-4583-bbca-dde3c6f52fbf.png)<br/><br/>

To demonstrate parallel test, maxInstances is set to 2. Two instances of chrome will be instantiated and both **home.spec.ts** and **careers.spec.ts** will run at the same time.
![image](https://user-images.githubusercontent.com/6094567/140841913-1c67b14c-50b1-476b-8507-bbdc5f10b59f.png)


3. After the browser is closed, you can look for the text **0 instance(s) of WebDriver still running**, and you know that the run is already completed.
```
[08:46:20] I/testLogger -

[08:46:20] I/launcher - 0 instance(s) of WebDriver still running
[08:46:20] I/launcher - chrome #01-0 passed
[08:46:20] I/launcher - chrome #01-1 passed
```
<br/><br/>
4. After the test, go to **reports\testResults** folder.<br/>
  You should see a HTML Test Report, *SalesChampAutomationReport.html*. Open and see the summary result.<br/><br/>
  
  ![image](https://user-images.githubusercontent.com/6094567/140842067-efad346a-048e-4bf9-afa5-bfcfffef5851.png)
  
  You can view the screenshot for each of the test cases available. *(e.g.Should have the correct page title)* provides you a screenshot.<br/>

  ![image](https://user-images.githubusercontent.com/6094567/140842175-a3a0cd2b-5278-409e-9d33-671a7c9b663f.png)
  
  ![image](https://user-images.githubusercontent.com/6094567/140842128-d2de1ab2-02b7-4a0b-9ece-76496dacc524.png)
  


  Sample generated report for reference: [reports.zip](https://github.com/veydecapia/saleschamp-exercise/files/7501112/reports.zip)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Tools Used and Why

- **[Protractor]** - Test Framework/Test Runner
   - [x] It is built and runs on top of WebDriverJS, which also uses WebDriver API same as Selenium *giving all the advantages of Selenium.*
   - [x] Protractor is an open source automation testing framework that is writen using NodeJS. It also focuses on cross-browser automation; its value proposition is a single standard API that works across all major browsers.
   - [x] Protractor can automate the different browsers like chrome, firefox, IE, Edge, opera. A puppeteer can automate the chromium engine only, as of today Chrome and Microsoft Edge browsers are using the Chromium engine. 
   - [x] Unlike other test runners like Puppeteer, focuses and only works on a Chromium engine.
   - [x] *Protractor allows for automated parallel Cross Browser Testing*, so it saves time and resources. Hence, ensures Cross Browser compatibility.
   - [x] *Supports asynchronous Test Execution, uses callbacks, Promises, and Async/Await to improve performance and make the test run faster.*
   - [x] It supports **Jasmine** and Mocha as BDD test frameworks out of the box.
   - [x] *Working with packages is easier* in Protractor.
   - [x] Supports various cloud testing platforms like SauceLabs, and CrossBrowserTesting, etc.
   - [x] It can run in both a Real browser and headless browsers.


- **[Jasmine]** - Test Framework
   - [x] Follows BDD (Behavior-driven development).
   - [x] *All the syntax used in Jasmine framework is clean and obvious.*
   - [x] Have an easy to read syntax.
   - [x] Easy to implement.
   - [x] Capable of testing any kind of JavaScript application.
   - [x] Jasmine does not depend on any other JavaScript framework.
   - [x] Jasmine does not require any DOM.


- **[Visual Studio Code/ VSCode]** - IDE/Text Editor
   - [x] Visual Studio Code has a large catalog different extensions to extend its own capabilities.
   - [x] Visual Studio Code Supports debugging for Typescript/Javascript based applications.
   - [x] Visual Studio Code (VSCode) is the most popular development environment.


<p align="right">(<a href="#top">back to top</a>)</p>


## User Actions used and Page Elements

*Note:* 
 * Please note that Captcha cannot be automated.
 * We need to request for A developer to remove captcha functionality on a testing environment.
 * When dealing with a Production environment, Captcha can temporarily be disabled.
 * As a result, I use assertion on alert text box instead. To verify the submission of the role application.

| **User Actions**      | **Elements**           | **Why?**                                                                                                                             |
|-----------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Go to Home Page       | heroTitle              | -For Home Page verification and know that automation is in the correct page.                                                         |
| Navigational Elements | navigationHeaderItems  | -For Home Page verification and know that automation is in the correct page.                                                         |
|                       | headerLogo             |                                                                                                                                      |
|                       | careersLink            |                                                                                                                                      |
|                       | pricingLink            |                                                                                                                                      |
|                       | contactUsLink          |                                                                                                                                      |
| Go to Careers Page    | heroTitle              | -For Careers Page verification and know that automation is in the correct page.-Also used as a setup to view open positions        |
|                       | heroParagraph          |                                                                                                                                      |
|                       | applyNowBtn            |                                                                                                                                      |
|                       | viewHotRolesBtn        |                                                                                                                                      |
|                       | openPositionsSection   |                                                                                                                                      |
| View Open Positions   | cardRole               | -For automated viewing of Open positions based on the data provided on **roleData.json** -Also used as a setup to apply for a role |
|                       | roleNameLbl            |                                                                                                                                      |
|                       | roleDescriptionLbl     |                                                                                                                                      |
|                       | viewDetailsPlusSignBtn |                                                                                                                                      |
|                       | cardRoleApplyNowBtn    |                                                                                                                                      |
| Apply for a Role      | careersFormSection     | -For automated role application of Open positions based on the data provided on **applyRoleData.json**                               |
|                       | applyForARoleLbl       |                                                                                                                                      |
|                       | fillOutInstructionsLbl |                                                                                                                                      |
|                       | nameTxtbox             |                                                                                                                                      |
|                       | emailAddressTxtbox     |                                                                                                                                      |
|                       | messageTxtArea         |                                                                                                                                      |
|                       | submitBtn              |                                                                                                                                      |
|                       | formDoneBlock          |                                                                                                                                      |


## How Do You Run The Test Cases?

Please refer to [Installation](#installation) and [Usage](#usage).

<!-- CONTACT -->
## Contact

Your Name - harveydecapia@gmail.com

Project Link: [https://github.com/veydecapia/saleschamp-exercise](https://github.com/veydecapia/saleschamp-exercise.git)

<p align="right">(<a href="#top">back to top</a>)</p>
