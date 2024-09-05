const report = require('multiple-cucumber-html-reporter');
const date = new Date();
const Report_Time = (date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '-' + date.getHours())

report.generate({
  jsonDir: 'cypress/reports/cucumber-json', // ** Path of .json file **//
  reportPath: 'cypress/reports/Results', // ** Path of .html file **//
  metadata: {

    browser: {
      name: 'Chrome',
      version: '10'
    },

    device: 'Virtual Machine',
    platform: {
      name: 'MacOs'
    },

    displayReportTime: true,
    displayDuration: true,
    pageTitle: "Pensa Web Automation"
  },

  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Pensa' },
      { label: 'Release', value: 'V1.0' },
      { label: 'Execution Start Time', value: Report_Time + ':' + date.getMinutes() +  ":" + date.getSeconds() },
      { label: 'Execution End Time', value: Report_Time + ':' + date.getMinutes() +  ":" + date.getSeconds() }
    ]
  }

});