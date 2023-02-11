const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ] // List of countries

  console.log(countries.length);
  console.log(countries[0]);
  console.log(countries[4]);
  console.log(countries.slice(0,5));

  let lastIndex = countries.length - 1;
  console.log(countries[lastIndex]);

  console.log(countries);


// concat lists
const firstList = [1,2,3];
const secondList = [4,5,6];
let thirdList = firstList.concat(secondList);

// get index of a value
thirdList = thirdList.concat([1]);
console.log(thirdList);
console.log(thirdList.lastIndexOf(1));

// join lists of strings
const joinedList = countries.join(' # ');
console.log(joinedList);

// sort list
console.log(thirdList.sort());
console.log(thirdList.reverse());
