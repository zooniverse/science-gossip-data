const fs = require('fs')
const slugify = require('slugify')

const tagIndex = {}

function allTags() {
  const tempTagIndex = {}
  fs.readdirSync('./site/_data/results').forEach(file => {
    const groupResults = require(`./results/${file}`)
    const groupSubjects = require(`./subjects/${file}`)
    console.log(file, groupResults.length)
    for (let i = groupResults.length - 1; i > -1; i--) {
      const result = groupResults[i]
      const subject = groupSubjects[i]
      result.keywords
      .map(key => key.trim())
      .filter(Boolean)
      .forEach(key => {
        const slug = slugify(key).toLowerCase()
        if (slug) {
          const subjects = tempTagIndex[slug] ? [...tempTagIndex[slug].subjects, subject] : [subject]
          tempTagIndex[slug] = {
            tagName: key,
            subjects
          }
        }
      })
    }
  });
  for (const [key, value] of Object.entries(tempTagIndex)) {
    if (value.subjects.length > 1) {
      tagIndex[key] = value
    }
  }
  console.log('Total number of tags:', Object.keys(tagIndex).length)
  return tagIndex
}

module.exports = allTags()