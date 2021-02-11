function parseSubjectResults(data) {
  const { subject, results } = data;
  const groupID = subject.group.zooniverse_id;
  const [result] = results[groupID].filter(result => result.subject_id === subject.zooniverse_id);
  return result;
}

module.exports = {
  eleventyComputed: {
    results: parseSubjectResults
  }
}