const fs = require('fs');

module.exports = function allSubjects() {
  let subjects = [];
  fs.readdirSync('./_data/subjects').forEach(file => {
    const groupSubjects = require(`./subjects/${file}`)
    console.log(file, groupSubjects.length)
    subjects = subjects.concat(groupSubjects)
  });
  console.log('Total number of subjects:', subjects.length)
  return subjects
}