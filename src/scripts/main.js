import { addPlant, usePlants } from './field.js'
import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { createCorn } from './seeds/corn.js'
import { createAsparagus } from './seeds/asparagus.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'

const yearlyPlan = createPlan()
//const asparagusSeed = createAsparagus()
//const cornSeed = createCorn()

//const add = addPlant(cornSeed)
//addPlant(asparagusSeed)
plantSeeds(yearlyPlan)
const use = usePlants()
// console.log(use)
const harvested = harvestPlants(use)

const parentHTMLElement = document.querySelector('.messages')
parentHTMLElement.innerHTML = Catalog(harvested)

// console.log(harvested)
