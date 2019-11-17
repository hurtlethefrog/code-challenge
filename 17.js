const judgeVegetable = (vegetables, metric) => {
  let num = 0
  let winner = ''
  for (let ele of vegetables) {
    if (ele[metric] > num) {
      num = ele[metric]
      winner = ele.submitter
    }
  }
  return winner
}
