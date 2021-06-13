const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function findMatching(array, name){
    const lowerCaseName= name.toLowerCase()
      return array.filter(name=> name.toLowerCase()=== lowerCaseName);
  }
console.log(findMatching(drivers, "Bobby"))

function fuzzyMatch(array, name){
    const firstTwoLetters=name.slice(0, 2)
    return array.filter(name=>name.slice(0, 2)=== firstTwoLetters)
}

function matchName(array, string){
    return array.filter((string)=>"Bobby"=== string.name)
}
