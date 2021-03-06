// Write log to console and report.txt file
//
const fs = require('fs-extra');

const report_lines = [];
let verbose;
let log_file = './report.txt';

function report_flush() {
  fs.writeFileSync(log_file, report_lines.join('\n'));
}

function report_log(aline) {
  report_lines.push(aline);
  if (verbose) console.log(aline);
}

function report_verbose(state) {
  verbose = state;
}

function report_logFile(nfile) {
  log_file = nfile;
}

module.exports = {
  flush: report_flush,
  log: report_log,
  verbose: report_verbose,
  logFile: report_logFile,
};
