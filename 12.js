const checkAir = function (samples, threshold) {
  let clean = 0
  let dirty = 0
  
  for (let ele of samples) {
    if (ele === 'clean') {
      clean += 1
    } else if (ele === 'dirty') {
      dirty += 1
    }
  }
  if (dirty/samples.length > threshold){
    return 'Polluted'     
  }
  return 'Clean' 
}
