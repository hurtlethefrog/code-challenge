const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let output = ''
  for (let recipe of recipes) {
    if (bakeryA.includes(recipe.ingredients[0])) {
      if (bakeryB.includes(recipe.ingredients[1])) {
        output = recipe.name
      }
    }
    if (bakeryB.includes(recipe.ingredients[0])){
      if (bakeryA.includes(recipe.ingredients[1])) {
        output = recipe.name
      }
    }
  }
  return output
}
