const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let total = 100 
  
  total += 25 * distanceTraveled
  
  if (numberOfPeople >= 30) {
    total += 25
  }
  total = total/100
  total = total.toLocaleString("en-US", {style:"currency", currency:"USD"})
  return total
}
