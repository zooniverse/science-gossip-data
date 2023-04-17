function searchIndex({ allSpecies }) {
  return Object.entries(allSpecies).map(([key, value]) => ({ name: value.name, slug: key }));
}

module.exports = {
  eleventyComputed: {
    searchIndex,
    title: 'Species search',
    description: 'Search for species that have been indexed by our volunteers.'
  }
}
