// function to generate markdown for README
const mapOfKeyToMarkDown = new Map([
  ['title', '# '],
  ['description', 'Description: '],
  ['installation', '# Installation'],
  ['usage', 'Usage '],
  ['lic', 'License: '],
  ['contribution', 'Contribution: '],
  ['test', 'Test: '],
  ['userName', 'User Name'],
  ['userEmail', 'User Email: '],
]);

const mapOfLicenseToBadge = new Map([
  ['Apache License 2.0','[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],

  ['Boost Software License 1.0','[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'],

  ['GNU LGPL v3','[![License](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'],

  ['GNU GPL v3','[![License:](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],

  ['MIT','[![License:](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],

  ['Mozilla Public License 2.0','[![License:](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)']

]);


function generateMarkdown(data) {
  // create a new string to return;
  let results = '';
  // get the keys from the data
  const keys = Object.keys(data);
  console.log("Readme File was created");
  //console.log("KEYS =>", keys);
  // translate the keys into markdown
  keys.forEach(key => {
    // for each key we need the mark down and the value
    if(key =='title') {
      const license = data.lic;
      const title = data[key];
      results+=`# [${title}](#${title}) &middot; ${mapOfLicenseToBadge.get(license)}`;
    } else if(key == 'description') {
      results += `\n## Table of Contents`;
      results += `\n* [Installation](#Installation)`;
      results += `\n* [Usage](#usage)`;
      results += `\n* [Contribution](#Contribution)`;
      results += `\n* [Test](#Test)`;
      results += `\n* [Questions](#userMail)`;

    } else if (key == 'installation') {
      results +=`\n# Installation\n\`${data[key]}\`\n`;
    } else if (key == 'usage') {
      results +=`\n# Usage\n\`${data[key]}\`\n`;
    } else if (key == 'contribution') {
      results +=`\n# Contribution\n\`${data[key]}\`\n`;
    } else if (key == 'test') {
      results +=`\n# Test\n\`${data[key]}\`\n`;
    } else if (key == 'userEmail') {
      results +=`\n# UserMail\n\`${data[key]}\`\n`;
    } else if (key == 'userName') {
      results +=`\n# UserName\n\`${data[key]}\`\n`;
    } else if (key == 'userMeail') {
      results +=`\n# UserName\n\`If you have any questions about this project, please contact me via email at <${data.key}> or [on GitHub](https://github.com/${data.userName})`;
    } else {
      results += `${mapOfKeyToMarkDown.get(key)} ${data[key]}\n`;
    }

 `\`${data[key]}\``
 
  }
  );
  return results;
}

module.exports = generateMarkdown;
