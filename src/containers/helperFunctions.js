export const abbreviateNumber = (num) => {
  if (num > 999) {
    return Math.ceil(Math.sign(num)*((Math.abs(num)/1000).toFixed(1))) + 'k'
  } 
    return num
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getRandom = (array) => {
  return array[Math.floor(Math.random()*array.length)]
}

export const randomDate = () => {
  const date = String(new Date(+(new Date()) - Math.floor(Math.random()*10000000000)))
  const formatted = date.slice(4, 15)
  const formattedWithComma = formatted.slice(0, 6) + "," + formatted.slice(6)
  return formattedWithComma
}

export const toggleClass = (toggledClass, clickedElement, ...additionalElementsForToggling) => {
  clickedElement.addEventListener('click', () => {
    additionalElementsForToggling.forEach(additionalClass => {
      additionalClass.classList.toggle(toggledClass)
    })
  })
}



