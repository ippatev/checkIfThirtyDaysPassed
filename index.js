function checkIfThirtyDaysPassed() {
  const december1022 = new Date('December 10, 2022');
  const currentDate = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);

  console.log(december1022)
  console.log(currentDate)
  console.log(thirtyDaysAgo)
  
  return december1022 > thirtyDaysAgo;
}

const res = checkIfThirtyDaysPassed()

console.log(res)