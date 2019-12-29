const windowSize1000 = (mediaQuery) => {
  const commentSection = document.querySelector('.videoPage-comment-section')
  const sidebar = document.querySelector('.videoPage-sidebar')
  const main = document.querySelector('.videoPage-main')

  if (mediaQuery.matches) { 
    commentSection.parentNode.insertBefore(sidebar, commentSection.nextSibling)
  }
   else {
    console.log(main)
    console.log(sidebar)
    console.log(commentSection)
    main.parentNode.insertBefore(sidebar, main.nextSibling)
  }
}

const windowSize600 = (mediaQuery) => {
  const descriptionBoxAuthor = document.querySelector('.videoPage-description-column-1-avatar-wrapper')
  const newSubscribers = document.querySelector('.videoPage-new-subscribers-wrapper')
  const descriptionBox = document.querySelector('.videoPage-description-box')

  if (mediaQuery.matches) { 
    descriptionBoxAuthor.parentNode.insertBefore(newSubscribers, descriptionBoxAuthor.nextSibling)
  } else {
    descriptionBox.parentNode.insertBefore(newSubscribers, descriptionBox.nextSibling)
  }
}

const handleMediaQueries = () => {
  const mediaQuery1000 = window.matchMedia("(max-width: 1000px)")
  const mediaQuery600 = window.matchMedia("(max-width: 600px)")

  mediaQuery1000.addListener(windowSize1000)
  mediaQuery600.addListener(windowSize600) 

  windowSize1000(mediaQuery1000)
  windowSize600(mediaQuery600)
}

export default handleMediaQueries