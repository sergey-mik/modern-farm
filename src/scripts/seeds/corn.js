const types = {
  corn: [
    {
      type: 'Corn',
      height: 180,
      output: 6,
    },
    {
      type: 'Corn',
      height: 180,
      output: 6,
    },
  ],
}

export const createCorn = () => {
  return types.corn.map((corn) => ({ ...corn }))
}
