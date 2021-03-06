import { fetchAvatars } from '../../containers/api'

export const determineAvatars = async (amount, category, query) => {
  // Categories correspond to Following, Recommended, Subscription Buttons
  if (category === 'buildings' || query === 'buildings') {
    let pictures = await fetchAvatars('man', amount)
    return pictures
  }
  else if (category === 'nature') {
    let pictures = await fetchAvatars('outdoors', amount)
    return pictures
  }
  else if (category === 'people') {
    let pictures = await fetchAvatars('model', amount)
    return pictures
  }
  else {
    let pictures = await fetchAvatars(query, amount)
    return pictures
  }
}