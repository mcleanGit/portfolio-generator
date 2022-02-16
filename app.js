const profileDataArgs = process.argv.slice(2, process.argv.length);

const name = profileDataArgs[0];
const github = profileDataArgs[1];

console.log(generatePage(name, github));
