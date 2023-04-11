function tagPageTag({ tagPage }) {
  return tagPage.tagName
}

function tagPageTitle({ tagPage }) {
  return `${tagPage.tagName} Page ${tagPage.page}`
}

function tagPageImage({ tagPage }) {
  const [subject] = tagPage.subjects;
  return subject ? subject.location.thumb : ''
}

module.exports = {
  eleventyComputed: {
    tagName: tagPageTag,
    title: tagPageTitle,
    ogImage: tagPageImage
  }
}