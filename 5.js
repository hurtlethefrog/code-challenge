const chooseStations = (stations) => {
  let output = [];
  for (let ele of stations) {
    if (ele[1] >= 20 && ele[2] === 'school' || ele[2] === 'community centre') {
      output.push(ele[0])
    };
  };
  return output;
};
