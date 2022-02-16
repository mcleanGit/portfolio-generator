const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [Name, github] = profileDataArgs;

// note placement of console.log call after generatePage reworking above => shows the HTML Doc!; had to be fs line 1 and line 24
fs.writeFile('index.html', generatePage(Name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to the output!');
});