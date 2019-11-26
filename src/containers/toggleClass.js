const toggleClass = (toggledClass, clickedClass, ...additionalClassesForToggling) => {

    clickedClass.addEventListener('click', () => {
      console.log(toggledClass, clickedClass, additionalClassesForToggling)
      additionalClassesForToggling.forEach(additionalClass => {
        additionalClass.classList.toggle(toggledClass)
      })
    })
  }

export default toggleClass