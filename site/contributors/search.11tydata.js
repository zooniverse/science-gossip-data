function searchIndex({ allContributors }) {
  return Object.entries(allContributors).map(([key, value]) => ({ name: value.name, slug: key }));
}

module.exports = {
  eleventyComputed: {
    searchIndex,
    title: 'Contributor search',
    description: 'Search for contributors that have been indexed by our volunteers.'
  }
}
