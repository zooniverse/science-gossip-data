function metaDesc(description) {
  return `
    <meta name="description" content="${ description }" />
    <meta name='twitter:description' content="${ description }" />
    <meta property='og:description' content="${ description }" />
  `;
}

function metaImage(ogImage) {
  return `
    <meta property='og:image' content="${ ogImage }" />
    <meta name='twitter:image' content="${ ogImage }" />
  `;
}

module.exports = function({ page, title = 'Science Gossip Data', description, ogImage }){
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="view-transition" content="same-origin" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Science Gossip Data" />
    <meta property='og:url' content="https://zooniverse.github.io/science-gossip-data${ page.url }" />
    <meta property='og:title' content="${ title }" />
    ${ description ? metaDesc(description) : ''}
    ${ ogImage ? metaImage(ogImage) : ''}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@the_zooniverse" />
    <meta name="twitter:site" content="@the_zooniverse" />
    <title>${ title }</title>
  `
};
