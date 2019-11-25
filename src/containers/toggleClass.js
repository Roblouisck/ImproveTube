const toggleClass = (toggledClass, clickedClass, ...additionalClassesForToggling) => {
    clickedClass.addEventListener('click', () => {
      additionalClassesForToggling.forEach(additionalClass => {
        additionalClass.classList.toggle(toggledClass)
      })
    })
  }

export default toggleClass