const pumpkinSpice = money => {
  let output = [0,0,0,0]
  let moneyRemaining = money

  while (moneyRemaining - 5 >= 0) {
    moneyRemaining -= 5
    output[0] += 1
    output[3] += 30
  }

  while (moneyRemaining - 3 >= 0) {
    moneyRemaining -= 3
    output[1] += 1
    output[3] += 15
  }

  while (moneyRemaining - 1 >= 0) {
    moneyRemaining -= 1
    output[2] += 1
    output[3] += 3
  }
  
  return output
}
