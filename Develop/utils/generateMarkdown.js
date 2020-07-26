// function to generate markdown for README
const mapOfKeyToMarkDown = new Map([
  ['title','# Project Title:'],
  ['description','# Description: '],
  ['installation','# Install Instructions: '],
  ['usage','# Project use: '],
  ['lic','# License: '],
  ['contribution','# Contribution: '],
  ['test','# Test: '],
  ['userName','# Github UserName: '],
  ['userEmail','# User Email: '],
]);

function generateMarkdown(data) {
  // create a new string to return;
  let results = "";
  // get the keys from the data
  const keys = Object.keys(data);
  console.log("KEYS =>", keys);
  // translate the keys into markdown
  keys.forEach(key => {
    // for each key we need the mark down and the value
    results += `${mapOfKeyToMarkDown.get(key)} ${data[key]}\n`;
  
  });
  // console.log the results
  console.log("RESULTS =>", results);
  // return the results
  return results;
}

module.exports = generateMarkdown;
