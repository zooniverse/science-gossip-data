function subjectsPageGroup({ groups, subjectsPage }) {
  return groups[subjectsPage.groupID]
}

function subjectsPageTitle({ groups, subjectsPage }) {
  const group = groups[subjectsPage.groupID];
  return `${group.metadata.title} Page ${subjectsPage.page}`
}

function subjectsPageDescription({ groups, subjectsPage }) {
  const group = groups[subjectsPage.groupID];
  return `Illustrated pages from ${group.metadata.title}`
}

module.exports = {
  eleventyComputed: {
    group: subjectsPageGroup,
    title: subjectsPageTitle,
    description: subjectsPageDescription
  }
}