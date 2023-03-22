import { addPlant } from './field.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createPotato } from './seeds/potato.js'
import { createCorn } from './seeds/corn.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

//The function must accept the year's planting plan as input
//contains 3 arrays representing the rows in the field to be plants
//iterate both the parent array and the child arrays
export const plantSeeds = (plantingPlan) => {
  for (const row of plantingPlan) {
    for (const seed of row) {
      if (seed === 'Asparagus') {
        addPlant(createAsparagus())
      } else if (seed === 'Potato') {
        addPlant(createPotato())
      } else if (seed === 'Corn') {
        addPlant(createCorn())
      } else if (seed === 'Soybean') {
        addPlant(createSoybean())
      } else if (seed === 'Sunflower') {
        addPlant(createSunflower())
      } else if (seed === 'Wheat') {
        addPlant(createWheat())
      }
    }
  }
}