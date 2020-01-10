// Pixabay API data didn't come with dislikes, so this function sets dislikes at 1% 
// of likes, with a chance of setting dislikes to 0 if video has less than 500 likes.
const setDislikes = (likes) => {
  const randomlyZeroOrOne = Math.floor(Math.random() * 2) + 0
  const dislikes = Math.ceil(likes*.01)
    if (likes < 500) {
      return dislikes*randomlyZeroOrOne
    }
  return dislikes
}

export default setDislikes
