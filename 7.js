const termTopics = (interviews) => {
let output = [0, 0, 0]

  for (let ele of interviews) {
    if (ele === "smart city") {
      output[0] += 1;
    } else if (ele === "arts funding") {
    output[1] += 1;
    } else if (ele === "transportation") {
    output[2] += 1;
    }
  }
  return output
}
