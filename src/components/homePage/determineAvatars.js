import { fetchAvatars } from '../../containers/api'

  export const determineAvatars = async (category, query) => {
    // Categories correspond to Following, Recommended, Subscription Buttons
    if (category === 'buildings' || query === 'buildings') {
      let pictures = await fetchAvatars('man', 24)
      return pictures
    }
    else if (category === 'nature') {
      let pictures = await fetchAvatars('outdoors', 24)
      return pictures
    }
    else if (category === 'people') {
      let pictures = await fetchAvatars('model', 24)
      return pictures
    }
    else {
      let pictures = await fetchAvatars('dog', 24)
      return pictures
    }
  }