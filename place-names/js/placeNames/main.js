function main() {
  // Put your code here
  let placeList = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

  console.log("All Place Names")

  placeList.forEach(name => {
    console.log(name)
  })
  console.log("    ")

  const filteredNames = placeList.filter(name => {
    if (name.startsWith("The")) {
      return true
    } else {
      return false
    }
  })
  console.log("'The' Place Names")

  filteredNames.forEach(name => {
    console.log(name)
  })
}

main();