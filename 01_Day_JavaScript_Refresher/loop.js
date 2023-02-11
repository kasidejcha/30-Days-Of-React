const nums = [1, 2, 3, 4, 5]
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i])
}

console.log("reverse")
const newArray = []
for (let i = nums.length-1; i>=0; i--) {
    newArray.push(nums[i])
    if (i === 3) {
        break
    }
}
console.log(newArray)