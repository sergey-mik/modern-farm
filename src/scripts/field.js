//this array will store all of the plants that are growing in the field. Do not export the array.
const allPlants = []

export const addPlant = (seed) => {
  if (Array.isArray(seed)) { // Array.isArray method to check if corn got passed in, or one of the others
    for (const corn of seed) {
      allPlants.push(corn)
    }
  } else {
    allPlants.push(seed)
  }
}
//returns a copy of the array of plants
export const usePlants = () => {
  const copyOfAllPlants = []
  for (const plant of allPlants) {
    copyOfAllPlants.push(plant)
  }
  return copyOfAllPlants
}
