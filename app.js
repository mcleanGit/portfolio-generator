const profileDataArgs = process.argv.slice(2, process.argv.length);
const [Name, github] = profileDataArgs;

console.log(Name, github);
console.log(generatePage(Name, github));

const generatePage = (userName, githubName) => {
  return `
 <!DOCTYPE html> 
 <html lang="en"> 
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Portfolio Demo</title>
 </head>
 <body>
   <h1>${Name}</h1>
   <h2><a href="https://github.com/${github}">Github</a></h2>
 </body>
 </html>
 `;
};
