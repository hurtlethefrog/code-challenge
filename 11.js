const busTimes = buses => {
  let output = {};
  for (let bus in buses) {
    let speed = buses[bus].speed;
    let distance = buses[bus].distance;
    output[bus] = distance / speed;
  }
  return output;
};
