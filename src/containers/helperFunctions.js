export const uuid = (a) => {return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid)}

export const abbreviateNumber = (num) => {
  if (num > 999) {
    return Math.round(num/1000) + 'k'
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

export const fabricateTimeStamp = (index) => {
  const random60 = Math.floor(Math.random() * 60)
  const random2 = Math.floor(Math.random() * 2)

  if (index < 20) {
    if (index + random2 <= 1) { return random60 + ' ' + 'minutes ago' } 
    return index + random2 + ' ' + 'hours ago'
  }

  else if (index >= 20) {
    if (index + random2 - 20 <= 1) { return '1 day ago' } 
    return index + random2 - 20 + ' ' + 'days ago'
  }
  
  return null
}

export const randomNumber = (num) => {
  return Math.floor(Math.random() * num + 1)
}

export const randomNumberBetweenTwo = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


