function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let fr=[];
    fr= zName.split(' ')
    return `${fr[0]} ${fr[1][0].toUpperCase()}.`
  }
  function ageWithMessage(zAge) {
      let age=[];
      age =zAge.split(' ')
      for(i=0;i<age.length;i++){
        if (typeof +age[i] === 'number'){
          return`Your Age Is ${age[i]}`;
        }
      }
  }
  function countryTwoLetters(zCountry) {
    let country=[];
    country=zCountry.split('')
    return `You Live In ${country[0].toUpperCase()}${country[1].toUpperCase()}`
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
  }
  return fullDetails(); // Do Not Edit This
}
function namePattern(zName) {
  
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY