const abbreviateNumberOver999 = (num) => {
  if (num > 999) {
    return Math.ceil(Math.sign(num)*((Math.abs(num)/1000).toFixed(1))) + 'k'
  } 
    return num
}

export default abbreviateNumberOver999