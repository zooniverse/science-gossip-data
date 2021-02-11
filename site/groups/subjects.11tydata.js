function subjectsPageGroup(data) {
  const { groups, subjectsPage } = data;
  return groups[subjectsPage.groupID]
}

module.exports = {
  eleventyComputed: {
    group: subjectsPageGroup
  }
}