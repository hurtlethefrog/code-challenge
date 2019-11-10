const whereCanIPark = (spots, vehicle) => {
  const vSpots = {
    small: ["R", "S"],
    regular: ["R"],
    motorcycle: ["R", "S", "M"]
  };

  let output = false;

  for (let arrIndex in spots) {
    for (let spotIndex in spots[arrIndex]) {
      if (vSpots[vehicle].includes(spots[arrIndex][spotIndex])) {
        output = [spotIndex, arrIndex];
        return output;
      }
    }
  }
  return output;
};
