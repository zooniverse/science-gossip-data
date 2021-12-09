function parseSubjectResults({ subject, results }) {
  const groupID = subject.group.zooniverse_id;
  const [result] = results[groupID].filter(result => result.subject_id === subject.zooniverse_id);
  return result;
}

function subjectTitle(data) {
  return `Subject ${data.subject.zooniverse_id}`;
}

function subjectDescription(data) {
  const result = parseSubjectResults(data);
  return result ? result.keywords.join(', ') : '';
}
module.exports = {
  eleventyComputed: {
    result: parseSubjectResults,
    title: subjectTitle,
    description: subjectDescription
  }
}