const lightsOn = function(lights) {
  for (let ele of lights) {
    ele.on = true
  }
  return lights
}

const lightsOff = function(lights) {
  for (let ele of lights) {
    ele.on = false
  }
  return lights
}

const toggleLights = function(lights, lightsAreOn) {
  for (let ele of lights) {
    if (ele.on === true) {
      ele.on = false;
    } else {
      ele.on = true
    }
  }
  return lights
}
