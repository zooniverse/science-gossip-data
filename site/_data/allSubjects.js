const fs = require('fs');

function allSubjects() {
  let subjects = [];
  fs.readdirSync('./site/_data/subjects').forEach(file => {
    const groupSubjects = require(`./subjects/${file}`)
    console.log(file, groupSubjects.length)
    subjects = subjects.concat(groupSubjects)
  });
  console.log('Total number of subjects:', subjects.length)
  return subjects
}

module.exports = allSubjects()
