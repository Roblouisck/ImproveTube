const randomDate = () => {
  const date = String(new Date(+(new Date()) - Math.floor(Math.random()*10000000000)))
  const formatted = date.slice(4, 15)
  const formattedWithComma = formatted.slice(0, 6) + "," + formatted.slice(6)
  return formattedWithComma
}

export default randomDate

