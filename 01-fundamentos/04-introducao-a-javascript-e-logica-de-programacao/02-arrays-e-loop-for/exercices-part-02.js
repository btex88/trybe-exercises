let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXE 01
function runThru() {
  for (let i = 0; i < numbers.length; i++) {
    const show = numbers[i]
    console.log(show)
  }
}
runThru()

// EXE 02
function sumThru() {
  let keep = 0;
  for (let i = 0; i < numbers.length; i++) {
     keep = keep + numbers[i]
  }
  console.log(`\n${keep}\n`)
}
sumThru()

// EXE 03
function arithAvgr() {
  let keep = 0;
  let nLength = numbers.length
  console.log(numbers.length, numbers, nLength)
  for (let i = 0; i < numbers.length; i++) {
     keep = keep + numbers[i]
  }
  let avgr = (keep / nLength)
  console.log(`${avgr.toFixed(2)}\n`)
  return avgr.toFixed(2)
}
arithAvgr()


// EXE 04
function avgrPrint() {
  const get = arithAvgr()
  let msg
  if (get > 20) {
    msg = `O ${get} é maior que 20\n`
    console.log(msg)
  } else {
    msg = `O ${get} é menor ou igual a 20`
    console.log(msg)
  }
}
avgrPrint()