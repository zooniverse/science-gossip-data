module.exports = function SVGSubject(content, { subject }) {
  const { original_size } = subject.metadata;
  const maxDimension = Math.max(original_size.height, original_size.width);
  const scale = 1400 / maxDimension;
  const height = original_size.height * scale;
  const width = original_size.width * scale;
  return `
  <svg
    style="max-height: 500px;"
    preserveAspectRatio="xMidYMid meet"
    viewbox="0 0 ${width} ${height}"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image
      height=${height}
      width=${width}
      xlink:href=${subject.location.standard}
    />
    ${content}
  </svg>
  `
}