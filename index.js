const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(arrayOfObjects) {
  const winner = arrayOfObjects.find( function(object) { return object.result === "W" })
    if (winner) {
      return winner.year
    }
}

superbowlWin(record)