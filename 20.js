const PI = 3.14159 

const sphereVolume = function (radius) {
  const vol = (4/3)*PI*(Math.pow(radius, 3))
  return vol
}

const coneVolume = function (radius, height) {
  const vol = PI*Math.pow(radius, 2)*(height/3)
  return vol
}

const prismVolume = function (height, width, depth) {
  const vol = height*width*depth
  return vol
}

const totalVolume = function (solids) {
  let totalVol = 0
  for (let shape of solids) {
    switch(shape.type){
      case 'sphere':
        totalVol += sphereVolume(shape.radius)
        break;
      case 'cone':
        totalVol += coneVolume(shape.radius, shape.height)
        break;
      case 'prism':
        totalVol += prismVolume(shape.height, shape.width, shape.depth)
        break;
    }
  }
  return totalVol
}
