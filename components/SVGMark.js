module.exports = function SVGMark({ mark }) {
  const [ cx, cy, x, y, width, height ] = mark.coords
  
  if (cx || cy) {
    return `
      <circle
        stroke="black"
        fill="transparent"
        cx=${cx}
        cy=${cy}
        r=30
      />
    `
  }
  return `
    <rect
      stroke="white"
      fill="transparent"
      x=${x}
      y=${y}
      width=${width}
      height=${height}
    />
  `
}