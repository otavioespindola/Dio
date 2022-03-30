const numTotal = 10
const numFigCompradas = 3
const setFig = new Set()

const array = [5,8,3]
for(let i=0; i < numFigCompradas; i++){
  const fig = array[i]
  setFig.add(fig)
}



console.log(numTotal - setFig.size)