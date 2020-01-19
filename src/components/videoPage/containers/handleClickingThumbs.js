export const thumbsUpClicked = (likes) => {
  let thumbsUpText = document.querySelector(`.videoPage-video-options-thumbsUp-text`)
  const thumbsUpIcon = document.querySelector(`.videoPage-video-options-thumbsUp`)

  if (Number(thumbsUpText.innerHTML) === likes) {
    thumbsUpText.innerHTML = Number(thumbsUpText.innerHTML) + 1
    thumbsUpIcon.style.fill = 'green'
  }
  else if (Number(thumbsUpText.innerHTML) > likes) {
    thumbsUpText.innerHTML = Number(thumbsUpText.innerHTML) - 1
    thumbsUpIcon.style.fill = 'grey'
  }
  else return null
}

export const thumbsDownClicked = (dislikes) => {
  let thumbsDownText = document.querySelector(`.videoPage-video-options-thumbsDown-text`)
  const thumbsDownIcon = document.querySelector(`.videoPage-video-options-thumbsDown`)

  if (Number(thumbsDownText.innerHTML) === dislikes) {
    thumbsDownText.innerHTML = Number(thumbsDownText.innerHTML) + 1
    thumbsDownIcon.style.fill = 'red'
  }
  else if (Number(thumbsDownText.innerHTML) > dislikes) {
    thumbsDownText.innerHTML = Number(thumbsDownText.innerHTML) - 1
    thumbsDownIcon.style.fill = 'grey'
  }
  else return null
}