export const harvestPlants = (growingPlants) => {
  const seedsToHarvest = []
  let number = 0
  //iterate through plantsArray
  for (const plant of growingPlants) {
    if (plant.type === 'Corn') { // only half of the output of each corn plant will be added to the array
      number = plant.output / 2
    } else {
      number = plant.output
    }
    for (let i = 0; i < number; i++) { //iterate through output and duplicate
      seedsToHarvest.push(plant)
    }
  }
  return seedsToHarvest
}
