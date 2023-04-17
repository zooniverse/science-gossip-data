function searchIndex({ allTags }) {
  return allTags.map(([key, value]) => ({ tagName: value.tagName, slug: key }));
}

module.exports = {
  eleventyComputed: {
    searchIndex,
    title: 'Keyword search',
    description: 'Search for keywords that have been added by our volunteers.'
  }
}
