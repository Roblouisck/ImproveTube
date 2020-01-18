export const userClicksFollow = (following) => {
  if (following) {
    document.querySelector(`.channel--grid-nav-follow`).innerHTML = "FOLLOW"
    document.querySelector(`.channel--grid-nav-follow`).classList.remove('button-grey')
    return false
  } else {
    document.querySelector(`.channel--grid-nav-follow`).innerHTML = "UNFOLLOW"
    document.querySelector(`.channel--grid-nav-follow`).classList.add('button-grey')
    return true
  }
}